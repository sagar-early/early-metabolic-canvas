import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Lock, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Step = "info" | "otp" | "payment" | "simulate" | "failed";

interface CheckoutFlowProps {
  className?: string;
  onClose?: () => void; // optional for bottom sheet use
}

const priceInINR = 1499;

const CheckoutFlow: React.FC<CheckoutFlowProps> = ({ className, onClose }) => {
  const navigate = useNavigate();

  const [step, setStep] = React.useState<Step>("info");
  const [name, setName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [resendIn, setResendIn] = React.useState<number>(30);

  // Derived validations
  const isNameValid = name.trim().length > 1;
  const isMobileValid = /^\d{10}$/.test(mobile);
  const canGenerateOtp = isNameValid && isMobileValid;
  const canVerify = otp.length === 6;

  React.useEffect(() => {
    if (step !== "otp") return;
    setResendIn(30);
    const id = setInterval(() => {
      setResendIn((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [step]);

  const handleGenerateOtp = () => {
    if (!canGenerateOtp) return;
    setStep("otp");
  };

  const handleVerify = () => {
    if (!canVerify) return;
    setStep("simulate");
  };

  const handlePay = () => {
    setStep("simulate");
  };

  const handleSimulateSuccess = () => {
    navigate(`/thank-you?name=${encodeURIComponent(name)}`);
    onClose?.();
  };

  const handleSimulateFailure = () => setStep("failed");

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg ${className ?? ""}`}>
      {step === "info" && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl font-unna text-primary text-center">Your first step to lasting results.</h2>
          <p className="text-base font-satoshi text-primary-soft text-center">
            Our full program is proven to help users lose up to 20% of their body weight.*
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium font-satoshi text-primary-medium">
                Patient's Full Name
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Ananya Sharma"
                className="bg-white"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium font-satoshi text-primary-medium">
                Patient's Mobile Number
              </label>
              <div className="flex items-center rounded-md border border-input focus-within:ring-2 focus-within:ring-ring bg-background">
                <span className="pl-3 pr-2 text-sm text-primary font-satoshi select-none">+91</span>
                <Input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter your 10-digit mobile number"
                  value={mobile}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setMobile(digits);
                  }}
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
          </div>

          <Button
            onClick={handleGenerateOtp}
            disabled={!canGenerateOtp}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-3"
          >
            Generate OTP
          </Button>

          <p className="text-xs text-primary-soft text-center italic">
            *Based on clinical studies of GLP-1 treatments over a 68-week period. Individual results may vary.
          </p>
        </div>
      )}

      {step === "otp" && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl font-unna text-primary text-center">Verify Your Number</h2>
          <p className="text-base font-satoshi text-primary-soft text-center">
            An OTP has been sent to +91 {mobile}
          </p>


          <div className="space-y-3">
            <label className="block text-sm font-medium font-satoshi text-primary-medium">
              Enter 6-Digit OTP
            </label>
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                {Array.from({ length: 6 }).map((_, i) => (
                  <InputOTPSlot key={i} index={i} className="w-10 h-12 text-lg border-primary rounded-md" />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <div className="text-center text-sm font-satoshi text-primary-soft">
              {resendIn > 0 ? (
                <span>Resend in {resendIn} seconds</span>
              ) : (
                <button className="underline text-primary" onClick={() => setResendIn(30)}>
                  Resend OTP
                </button>
              )}
            </div>
          </div>

          <Button
            onClick={handleVerify}
            disabled={!canVerify}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-3"
          >
            Verify & Proceed to Payment
          </Button>

          <p className="text-xs text-primary-soft text-center">
            By entering the OTP, you accept Early's
            {" "}
            <a href="/terms" className="underline text-primary">Terms & Conditions</a>
            {" "}and{" "}
            <a href="/privacy" className="underline text-primary">Privacy Policy</a>.
          </p>
        </div>
      )}

      {step === "payment" && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-2xl font-unna text-primary text-center">Almost there!</h2>
          <div className="rounded-xl border border-input p-4 bg-neutral-light">
            <div className="flex items-center justify-between text-sm font-satoshi">
              <span className="text-primary-medium">Item</span>
              <span className="text-foreground">Metabolic Diagnosis Test</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm font-satoshi">
              <span className="text-primary-medium">Total</span>
              <span className="font-semibold">₹{priceInINR.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <Button onClick={handlePay} className="w-full bg-success text-white hover:bg-success/90 rounded-full py-3">
            Pay ₹{priceInINR.toLocaleString("en-IN")} Now
          </Button>

          <div className="flex items-center justify-center gap-2 text-sm text-primary-medium">
            <Lock className="w-4 h-4" />
            <span>100% Secure Payment via Razorpay</span>
          </div>
        </div>
      )}

      {step === "simulate" && (
        <div className="space-y-4 animate-fade-in">
          <Button onClick={handleSimulateSuccess} className="w-full bg-success text-white hover:bg-success/90 rounded-full py-3">
            Simulate Payment Success
          </Button>
          <Button onClick={handleSimulateFailure} className="w-full bg-error text-white hover:bg-error/90 rounded-full py-3">
            Simulate Payment Failure
          </Button>
        </div>
      )}

      {step === "failed" && (
        <div className="space-y-6 animate-fade-in text-center">
          <XCircle className="w-14 h-14 text-error mx-auto" />
          <h2 className="text-2xl font-unna text-primary">Payment Failed</h2>
          <p className="text-primary-medium font-satoshi">
            Unfortunately, your transaction could not be completed. Please try again.
          </p>
          <Button onClick={() => setStep("payment")} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-3">
            Retry Payment
          </Button>
        </div>
      )}
    </div>
  );
};

export default CheckoutFlow;
