import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface BookingFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingFlow: React.FC<BookingFlowProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Timer for OTP resend
  useEffect(() => {
    if (step === 2 && timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  const resetFlow = () => {
    setStep(1);
    setName('');
    setMobile('');
    setOtp(['', '', '', '', '', '']);
    setTimer(60);
    setCanResend(false);
    setIsVerifying(false);
  };

  const handleClose = () => {
    resetFlow();
    onClose();
  };

  const handleGenerateOTP = () => {
    if (name.trim() && mobile.trim() && mobile.length === 10) {
      setStep(2);
      setTimer(60);
      setCanResend(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto advance to next field
      if (value && index < 5) {
        otpRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = () => {
    if (otp.every(digit => digit !== '')) {
      setIsVerifying(true);
      // Simulate verification
      setTimeout(() => {
        setIsVerifying(false);
        setStep(3);
      }, 1500);
    }
  };

  const handleResendOTP = () => {
    setTimer(60);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
  };

  const isStep1Valid = name.trim() && mobile.trim() && mobile.length === 10;
  const isOtpComplete = otp.every(digit => digit !== '');

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md mx-auto bg-[#faf8f1] border-none rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={handleClose}
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/db938ab2-6382-4181-a5f0-96430633a5cf.png" 
              alt="Early Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Step 1: User Information */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-700 font-satoshi text-sm leading-relaxed">
                  You've taken the most important step towards lasting health, We're here to guide you the rest of the way
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-satoshi focus:ring-2 focus:ring-[#434a35] focus:border-transparent"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      if (value.length <= 10) {
                        setMobile(value);
                      }
                    }}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-satoshi focus:ring-2 focus:ring-[#434a35] focus:border-transparent"
                  />
                </div>

                <Button
                  onClick={handleGenerateOTP}
                  disabled={!isStep1Valid}
                  className={`w-full py-3 rounded-lg font-satoshi font-bold text-white transition-all ${
                    isStep1Valid 
                      ? 'bg-[#434a35] hover:bg-[#3a4029]' 
                      : 'bg-[#dde2e8] cursor-not-allowed'
                  }`}
                >
                  Generate OTP
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: OTP Verification */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-700 font-satoshi text-sm">
                  Please enter your 6-digit code sent to your mobile.
                </p>
              </div>

              <div className="flex justify-center space-x-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpRefs.current[index] = el)}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-12 h-12 text-center border-2 border-gray-200 rounded-lg font-satoshi font-bold text-lg focus:ring-2 focus:ring-[#434a35] focus:border-transparent"
                    maxLength={1}
                  />
                ))}
              </div>

              <Button
                onClick={handleVerifyOTP}
                disabled={!isOtpComplete || isVerifying}
                className={`w-full py-3 rounded-lg font-satoshi font-bold text-white transition-all ${
                  isOtpComplete && !isVerifying
                    ? 'bg-[#434a35] hover:bg-[#3a4029]' 
                    : 'bg-[#dde2e8] cursor-not-allowed'
                }`}
              >
                {isVerifying ? 'Verifying...' : 'Verify & Proceed'}
              </Button>

              <div className="text-center">
                {canResend ? (
                  <button
                    onClick={handleResendOTP}
                    className="text-[#434a35] font-satoshi text-sm underline hover:text-[#3a4029]"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <p className="text-gray-500 font-satoshi text-sm">
                    Resend OTP in {timer} seconds
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Thank You Page */}
          {step === 3 && (
            <div className="space-y-6">
              {/* Header Section with Sparrow */}
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/0526e4a3-3220-407c-a5dd-0571174d6850.png" 
                  alt="Happy Sparrow" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <p className="text-gray-800 font-satoshi text-lg">
                    Thank you for taking your first step towards Early,
                  </p>
                  <p className="text-gray-600 font-satoshi text-sm mt-1">
                    Up to 20%* weight loss with GLP-1
                  </p>
                </div>
              </div>

              {/* Consultant Card */}
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/1fc28f26-5491-42e6-877f-197f57bbc37b.png" 
                    alt="Nutritionist" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <p className="text-gray-800 font-satoshi text-sm">
                    Our leaders will reach out to you within 4 hours to book your test
                  </p>
                </div>
              </div>

              {/* App Download Section */}
              <div className="space-y-3">
                <p className="text-gray-800 font-satoshi text-sm text-center">
                  To get start with Early you can download our app
                </p>
                
                <div className="flex flex-col space-y-2">
                  <a 
                    href="https://apps.apple.com/us/app/early-fit/id6748427718"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src="/lovable-uploads/742fd2f1-7617-4622-bb00-40422b00ca21.png" 
                      alt="Download on App Store" 
                      className="w-full h-12 object-contain"
                    />
                  </a>
                  <a 
                    href="https://apps.apple.com/us/app/early-fit/id6748427718"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src="/lovable-uploads/8d63363c-e85f-4688-8fe6-85007d2d00d7.png" 
                      alt="Get it on Google Play" 
                      className="w-full h-12 object-contain"
                    />
                  </a>
                </div>
              </div>

              {/* Website Link */}
              <div className="text-center">
                <a 
                  href="https://www.early.fit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#434a35] font-satoshi text-sm underline hover:text-[#3a4029]"
                >
                  visit www.early.fit
                </a>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingFlow;