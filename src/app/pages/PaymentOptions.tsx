import { useState } from 'react';
import { Link } from 'react-router';
import { CreditCard, Smartphone, Building, Check } from 'lucide-react';
import { HeaderNavigation } from '../components/HeaderNavigation';

export default function PaymentOptions() {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'digital' | 'bank'>('card');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] bg-white border-[3px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-20 bg-[#f3f4f6] border-b-[3px] border-black px-4 py-3">
          <HeaderNavigation />
        </div>

        {/* Page Header */}
        <div className="sticky top-[51px] z-10 bg-white border-b-[3px] border-black px-4 py-4 text-center">
          <h2 className="font-['Consolas',monospace] font-bold text-[10px] tracking-[1px] uppercase">
            Payment Options
          </h2>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Balance Summary */}
          <div className="bg-[#f3f4f6] border-2 border-black p-4 mb-4">
            <div className="flex justify-between items-center">
              <span className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
                Amount Due:
              </span>
              <span className="font-['Consolas',monospace] font-black text-[24px]">
                $1,250.00
              </span>
            </div>
            <div className="mt-2 text-center">
              <span className="font-['Consolas',monospace] text-[10px] text-[#364153]">
                Due: May 5 at 5:00 PM
              </span>
            </div>
          </div>

          {/* Payment Method Selection */}
          <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase border-b-2 border-black pb-1 mb-3">
            Select Payment Method
          </h3>

          <div className="space-y-2 mb-4">
            <button
              onClick={() => setSelectedMethod('card')}
              className={`w-full border-2 border-black p-3 flex items-center gap-3 ${
                selectedMethod === 'card' ? 'bg-black text-white' : 'bg-white hover:bg-[#f9fafb]'
              }`}
            >
              <CreditCard size={20} strokeWidth={1.5} />
              <span className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
                Credit/Debit Card
              </span>
            </button>
            <button
              onClick={() => setSelectedMethod('digital')}
              className={`w-full border-2 border-black p-3 flex items-center gap-3 ${
                selectedMethod === 'digital' ? 'bg-black text-white' : 'bg-white hover:bg-[#f9fafb]'
              }`}
            >
              <Smartphone size={20} strokeWidth={1.5} />
              <span className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
                Digital Wallet (Apple Pay, Google Pay)
              </span>
            </button>
            <button
              onClick={() => setSelectedMethod('bank')}
              className={`w-full border-2 border-black p-3 flex items-center gap-3 ${
                selectedMethod === 'bank' ? 'bg-black text-white' : 'bg-white hover:bg-[#f9fafb]'
              }`}
            >
              <Building size={20} strokeWidth={1.5} />
              <span className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
                Bank Transfer
              </span>
            </button>
          </div>

          {/* Payment Form */}
          <form onSubmit={handleSubmit}>
            {selectedMethod === 'card' && (
              <div className="bg-white border-2 border-black p-4 mb-4 space-y-3">
                <div>
                  <label className="font-['Consolas',monospace] font-bold text-[10px] uppercase block mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full border-2 border-black px-3 py-2 font-['Inter',sans-serif] text-[12px] outline-none"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-['Consolas',monospace] font-bold text-[10px] uppercase block mb-1">
                      Expiry
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border-2 border-black px-3 py-2 font-['Inter',sans-serif] text-[12px] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-['Consolas',monospace] font-bold text-[10px] uppercase block mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full border-2 border-black px-3 py-2 font-['Inter',sans-serif] text-[12px] outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="font-['Consolas',monospace] font-bold text-[10px] uppercase block mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border-2 border-black px-3 py-2 font-['Inter',sans-serif] text-[12px] outline-none"
                    required
                  />
                </div>
              </div>
            )}

            {selectedMethod === 'digital' && (
              <div className="bg-white border-2 border-black p-4 mb-4 text-center">
                <p className="font-['Inter',sans-serif] text-[12px] mb-3">
                  You will be redirected to complete payment with your chosen digital wallet.
                </p>
                <div className="flex gap-2 justify-center">
                  <div className="border-2 border-black px-4 py-2 font-['Consolas',monospace] font-bold text-[10px]">
                    Apple Pay
                  </div>
                  <div className="border-2 border-black px-4 py-2 font-['Consolas',monospace] font-bold text-[10px]">
                    Google Pay
                  </div>
                </div>
              </div>
            )}

            {selectedMethod === 'bank' && (
              <div className="bg-white border-2 border-black p-4 mb-4 space-y-3">
                <div>
                  <label className="font-['Consolas',monospace] font-bold text-[10px] uppercase block mb-1">
                    Account Number
                  </label>
                  <input
                    type="text"
                    placeholder="123456789"
                    className="w-full border-2 border-black px-3 py-2 font-['Inter',sans-serif] text-[12px] outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="font-['Consolas',monospace] font-bold text-[10px] uppercase block mb-1">
                    Routing Number
                  </label>
                  <input
                    type="text"
                    placeholder="987654321"
                    className="w-full border-2 border-black px-3 py-2 font-['Inter',sans-serif] text-[12px] outline-none"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-black border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)] text-white py-4 text-center font-['Consolas',monospace] font-black text-[12px] uppercase hover:bg-gray-800"
            >
              Process Payment - $1,250.00
            </button>
          </form>

          {/* Confirmation Message */}
          {showConfirmation && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white border-4 border-black p-6 max-w-sm shadow-[8px_8px_0px_rgba(0,0,0,0.3)]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                    <Check size={32} className="text-white" strokeWidth={3} />
                  </div>
                  <h3 className="font-['Consolas',monospace] font-black text-[16px] uppercase mb-2">
                    Payment Successful!
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[12px] text-[#364153]">
                    Your payment of $1,250.00 has been processed. You will receive a confirmation email shortly.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
