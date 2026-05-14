import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { HeaderNavigation } from '../components/HeaderNavigation';

export default function FinancialAidFAQ() {
  const [expandedFAQs, setExpandedFAQs] = useState<Set<string>>(new Set(['payment-plan']));

  const toggleFAQ = (id: string) => {
    const newExpanded = new Set(expandedFAQs);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedFAQs(newExpanded);
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
            Financial Aid Help
          </h2>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-['Consolas',monospace] font-black text-[14px] tracking-[1.2px] uppercase border-b-2 border-black pb-2 mb-4">
            Frequently Asked Questions
          </h3>

          {/* FAQ List */}
          <div className="space-y-2 mb-4">
            {/* Payment Plan */}
            <div className="bg-white border-2 border-black">
              <button
                onClick={() => toggleFAQ('payment-plan')}
                className="w-full p-3 flex items-center justify-between hover:bg-[#f9fafb] text-left"
              >
                <span className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
                  How do I set up a payment plan?
                </span>
                {expandedFAQs.has('payment-plan') ? (
                  <ChevronUp size={18} strokeWidth={1.5} />
                ) : (
                  <ChevronDown size={18} strokeWidth={1.5} />
                )}
              </button>
              {expandedFAQs.has('payment-plan') && (
                <div className="bg-[#f9fafb] border-t-2 border-black px-3 py-3.5">
                  <p className="font-['Inter',sans-serif] text-[11px] leading-[15px] mb-3">
                    You can set up a payment plan through the Student Portal. Go to Financial Services and select "Payment Plan Options." You can spread your balance over 3-6 months with no interest.
                  </p>
                  <p className="font-['Inter',sans-serif] text-[11px] leading-[15px] text-[#364153]">
                    Requirements: Minimum $500 balance, enrollment verification, and automatic payment setup.
                  </p>
                </div>
              )}
            </div>

            {/* Emergency Grant */}
            <div className="bg-white border-2 border-black">
              <button
                onClick={() => toggleFAQ('emergency-grant')}
                className="w-full p-3 flex items-center justify-between hover:bg-[#f9fafb] text-left"
              >
                <span className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
                  Am I eligible for an emergency grant?
                </span>
                {expandedFAQs.has('emergency-grant') ? (
                  <ChevronUp size={18} strokeWidth={1.5} />
                ) : (
                  <ChevronDown size={18} strokeWidth={1.5} />
                )}
              </button>
              {expandedFAQs.has('emergency-grant') && (
                <div className="bg-[#f9fafb] border-t-2 border-black px-3 py-3.5">
                  <p className="font-['Inter',sans-serif] text-[11px] leading-[15px]">
                    Emergency grants are available for students facing unexpected financial hardships. Eligibility is determined on a case-by-case basis. Contact the Financial Aid Office to apply and discuss your situation.
                  </p>
                </div>
              )}
            </div>

            {/* Late Payment */}
            <div className="bg-white border-2 border-black">
              <button
                onClick={() => toggleFAQ('late-payment')}
                className="w-full p-3 flex items-center justify-between hover:bg-[#f9fafb] text-left"
              >
                <span className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
                  What happens if I pay late?
                </span>
                {expandedFAQs.has('late-payment') ? (
                  <ChevronUp size={18} strokeWidth={1.5} />
                ) : (
                  <ChevronDown size={18} strokeWidth={1.5} />
                )}
              </button>
              {expandedFAQs.has('late-payment') && (
                <div className="bg-[#f9fafb] border-t-2 border-black px-3 py-3.5">
                  <p className="font-['Inter',sans-serif] text-[11px] leading-[15px]">
                    Late payments may result in a $50 late fee and potential enrollment holds. If payment is not received by the deadline, you may be dropped from classes and unable to register for future terms.
                  </p>
                </div>
              )}
            </div>

            {/* Financial Aid Disbursement */}
            <div className="bg-white border-2 border-black">
              <button
                onClick={() => toggleFAQ('disbursement')}
                className="w-full p-3 flex items-center justify-between hover:bg-[#f9fafb] text-left"
              >
                <span className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
                  When will my financial aid be disbursed?
                </span>
                {expandedFAQs.has('disbursement') ? (
                  <ChevronUp size={18} strokeWidth={1.5} />
                ) : (
                  <ChevronDown size={18} strokeWidth={1.5} />
                )}
              </button>
              {expandedFAQs.has('disbursement') && (
                <div className="bg-[#f9fafb] border-t-2 border-black px-3 py-3.5">
                  <p className="font-['Inter',sans-serif] text-[11px] leading-[15px]">
                    Financial aid is typically disbursed 10 days before the start of the semester. You must be enrolled at least half-time and have completed all required verification documents.
                  </p>
                </div>
              )}
            </div>

            {/* Tuition Waiver */}
            <div className="bg-white border-2 border-black">
              <button
                onClick={() => toggleFAQ('tuition-waiver')}
                className="w-full p-3 flex items-center justify-between hover:bg-[#f9fafb] text-left"
              >
                <span className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
                  Can I apply for a tuition waiver?
                </span>
                {expandedFAQs.has('tuition-waiver') ? (
                  <ChevronUp size={18} strokeWidth={1.5} />
                ) : (
                  <ChevronDown size={18} strokeWidth={1.5} />
                )}
              </button>
              {expandedFAQs.has('tuition-waiver') && (
                <div className="bg-[#f9fafb] border-t-2 border-black px-3 py-3.5">
                  <p className="font-['Inter',sans-serif] text-[11px] leading-[15px]">
                    Tuition waivers are available for eligible students including foster youth, veterans, and student employees. Visit the Financial Aid Office or check the student portal for application details.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-[#f3f4f6] border-[3px] border-black p-5">
            <h4 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase border-b border-black pb-2 mb-3">
              Still Have Questions?
            </h4>
            <p className="font-['Inter',sans-serif] text-[11px] mb-3">
              Our Financial Aid team is here to help you navigate your options and find solutions.
            </p>
            <button className="w-full bg-black border-2 border-black text-white py-3 flex items-center justify-center gap-2 hover:bg-gray-800">
              <MessageCircle size={16} strokeWidth={1.5} />
              <span className="font-['Consolas',monospace] font-bold text-[11px] uppercase">
                Contact Financial Aid Office
              </span>
            </button>
            <div className="mt-3 text-center space-y-1">
              <p className="font-['Inter',sans-serif] text-[10px] text-[#364153]">
                Email: financialaid@university.edu
              </p>
              <p className="font-['Inter',sans-serif] text-[10px] text-[#364153]">
                Phone: (555) 123-4567
              </p>
              <p className="font-['Inter',sans-serif] text-[10px] text-[#364153]">
                Hours: Mon-Fri 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
