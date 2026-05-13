import { Link } from 'react-router';
import { User, AlertTriangle, ArrowRight, Info, CreditCard, MessageCircle, Calendar } from 'lucide-react';
import { NavigationMenu } from '../components/NavigationMenu';

export default function PastDueAlert() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] bg-white border-[3px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="bg-[#f3f4f6] border-b-[3px] border-black px-4 py-3 flex items-center justify-between">
          <NavigationMenu />
          <h2 className="font-['Consolas',monospace] font-bold text-[10px] tracking-[1px] uppercase">
            Alert: Balance Due
          </h2>
          <button className="p-0">
            <User size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Alert Section */}
          <div className="bg-white border-4 border-black mb-4 py-6 relative">
            <div className="flex flex-col items-center">
              <AlertTriangle size={40} strokeWidth={5} className="mb-2" />
              <div className="border-b-2 border-black pb-1 mb-3">
                <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase text-center">
                  Past-Due Balance
                </h3>
              </div>
              <div className="font-['Consolas',monospace] font-black text-[36px] leading-[40px] mb-2">
                $1,250.00
              </div>
              <div className="bg-[#f3f4f6] border border-black px-2 py-1">
                <span className="font-['Consolas',monospace] font-bold text-[10px] uppercase">
                  Due: May 5 at 5:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Important Message */}
          <div className="bg-[#f3f4f6] border-2 border-black p-4 mb-4">
            <p className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
              Important: If this balance is not resolved by the deadline, you may be dropped from
              your current classes.
            </p>
          </div>

          {/* Primary Actions */}
          <div className="space-y-3 mb-4">
            <Link to="/payment-options" className="block w-full bg-black border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)] text-white py-4 text-center font-['Consolas',monospace] font-black text-[12px] uppercase hover:bg-gray-800 relative">
              View Payment Options
              <ArrowRight size={18} className="absolute right-4 top-1/2 -translate-y-1/2" strokeWidth={1.5} />
            </Link>
            <Link to="/financial-aid-faq" className="block w-full bg-white border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.1)] py-4 text-center font-['Consolas',monospace] font-black text-[12px] uppercase hover:bg-[#f9fafb] relative">
              Get Help / Contact Financial Aid
              <Info size={18} className="absolute right-4 top-1/2 -translate-y-1/2" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Available Next Steps */}
          <div className="bg-white border-2 border-black p-5">
            <div className="border-b border-black pb-2 mb-3">
              <h4 className="font-['Consolas',monospace] font-black text-[10px] tracking-[1px] uppercase">
                Available Next Steps
              </h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CreditCard size={14} className="mt-0.5" strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-bold text-[10px] uppercase">
                  Set up a payment plan
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Info size={14} className="mt-0.5" strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-bold text-[10px] uppercase">
                  Apply for emergency grant
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle size={14} className="mt-0.5" strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-bold text-[10px] uppercase">
                  Speak with an advisor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
