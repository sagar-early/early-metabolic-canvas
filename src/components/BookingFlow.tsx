import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Smartphone, Download } from 'lucide-react';

interface BookingFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

type FlowStep = 'details' | 'otp' | 'success';

const BookingFlow: React.FC<BookingFlowProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<FlowStep>('details');
  const [formData, setFormData] = useState({
    name: '',
    mobile: ''
  });
  const [otp, setOtp] = useState('');
  const [otpTimer, setOtpTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const { toast } = useToast();

  // Reset form when dialog opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep('details');
      setFormData({ name: '', mobile: '' });
      setOtp('');
      setOtpTimer(30);
      setCanResend(false);
    }
  }, [isOpen]);

  // OTP Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (currentStep === 'otp' && otpTimer > 0 && !canResend) {
      interval = setInterval(() => {
        setOtpTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentStep, otpTimer, canResend]);

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name to continue.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.mobile.trim() || formData.mobile.length < 10) {
      toast({
        title: "Valid Mobile Number Required",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive"
      });
      return;
    }

    // Simulate sending OTP
    toast({
      title: "OTP Sent!",
      description: `We've sent a 4-digit OTP to ${formData.mobile}`,
    });
    
    setCurrentStep('otp');
    setOtpTimer(30);
    setCanResend(false);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length !== 4) {
      toast({
        title: "Complete OTP Required",
        description: "Please enter the complete 4-digit OTP.",
        variant: "destructive"
      });
      return;
    }

    // Simulate OTP verification
    toast({
      title: "Verification Successful!",
      description: "Your booking has been confirmed.",
    });
    
    setCurrentStep('success');
  };

  const handleResendOtp = () => {
    setOtpTimer(30);
    setCanResend(false);
    setOtp('');
    
    toast({
      title: "OTP Resent!",
      description: `New OTP sent to ${formData.mobile}`,
    });
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'details':
        return (
          <div className="space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#434a35] font-unna text-center">
                Book Your Diagnosis Test
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleDetailsSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#434a35] font-satoshi font-semibold">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="rounded-xl border-[#dbd3df] focus:border-[#927b9e] font-satoshi"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-[#434a35] font-satoshi font-semibold">
                  Mobile Number
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your 10-digit mobile number"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="rounded-xl border-[#dbd3df] focus:border-[#927b9e] font-satoshi"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-[#d2f47e] hover:bg-[#b5ed2c] text-[#434a35] font-satoshi font-bold py-3 text-base rounded-xl transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Continue
              </Button>
            </form>
          </div>
        );

      case 'otp':
        return (
          <div className="space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#434a35] font-unna text-center">
                Verify Your Number
              </DialogTitle>
              <p className="text-[#786184] font-satoshi text-center mt-2">
                We've sent a 4-digit OTP to {formData.mobile}
              </p>
            </DialogHeader>
            
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div className="flex justify-center">
                <InputOTP
                  maxLength={4}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="w-12 h-12 text-lg border-[#dbd3df] focus:border-[#927b9e]" />
                    <InputOTPSlot index={1} className="w-12 h-12 text-lg border-[#dbd3df] focus:border-[#927b9e]" />
                    <InputOTPSlot index={2} className="w-12 h-12 text-lg border-[#dbd3df] focus:border-[#927b9e]" />
                    <InputOTPSlot index={3} className="w-12 h-12 text-lg border-[#dbd3df] focus:border-[#927b9e]" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              
              <div className="text-center">
                {!canResend ? (
                  <p className="text-[#786184] font-satoshi text-sm">
                    Resend in {otpTimer} seconds
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-[#927b9e] font-satoshi font-semibold text-sm hover:underline"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
              
              <Button
                type="submit"
                className="w-full bg-[#927b9e] hover:bg-[#786184] text-white font-satoshi font-bold py-3 text-base rounded-xl transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Verify
              </Button>
            </form>
          </div>
        );

      case 'success':
        return (
          <div className="space-y-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#d6f58a] rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#434a35]" />
              </div>
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#434a35] font-unna text-center">
                You're All Set! 🎉
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-[#fff4e2] p-4 rounded-xl">
                <CheckCircle className="w-5 h-5 text-[#434a35] flex-shrink-0" />
                <p className="text-[#434a35] font-satoshi text-left">
                  Our nutritionist will reach out to you within 4 hours
                </p>
              </div>
              
              <div className="flex items-center space-x-3 bg-[#dde2e8] p-4 rounded-xl">
                <Smartphone className="w-5 h-5 text-[#434a35] flex-shrink-0" />
                <p className="text-[#434a35] font-satoshi text-left">
                  Get started with our app
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  className="flex-1 border-[#927b9e] text-[#927b9e] hover:bg-[#927b9e] hover:text-white rounded-xl font-satoshi"
                  onClick={() => window.open('https://apps.apple.com', '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  App Store
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-[#927b9e] text-[#927b9e] hover:bg-[#927b9e] hover:text-white rounded-xl font-satoshi"
                  onClick={() => window.open('https://play.google.com', '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Play Store
                </Button>
              </div>
              
              <Button
                onClick={onClose}
                className="w-full bg-[#d2f47e] hover:bg-[#b5ed2c] text-[#434a35] font-satoshi font-bold py-3 text-base rounded-xl transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Done
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#faf8f1] border-[#dbd3df] rounded-2xl p-6">
        {renderStepContent()}
      </DialogContent>
    </Dialog>
  );
};

export default BookingFlow;