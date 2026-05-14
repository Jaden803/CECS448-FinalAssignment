import { useState } from 'react';
import { Link } from 'react-router';
import { Search, ChevronUp, ChevronDown, Info, MessageCircle, DollarSign, BookOpen, ExternalLink } from 'lucide-react';
import { HeaderNavigation } from '../components/HeaderNavigation';

export default function Glossary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set(['prerequisite']));

  const toggleTerm = (termId: string) => {
    const newExpanded = new Set(expandedTerms);
    if (newExpanded.has(termId)) {
      newExpanded.delete(termId);
    } else {
      newExpanded.add(termId);
    }
    setExpandedTerms(newExpanded);
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
            Glossary / Help
          </h2>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Search */}
          <div className="bg-white border-2 border-black px-3.5 py-2.5 flex items-center gap-2 mb-4">
            <Search size={16.56} className="text-[#99a1af]" strokeWidth={1.38} />
            <input
              type="text"
              placeholder="SEARCH TERMS (E.G., UNITS)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 font-['Consolas',monospace] font-bold text-[10px] uppercase placeholder:text-black/50 outline-none bg-transparent"
            />
          </div>

          {/* Glossary Terms Header */}
          <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase border-b-2 border-black pb-1 mb-3">
            Glossary Terms
          </h3>

          {/* Terms List */}
          <div className="space-y-2 mb-4">
            {/* Prerequisite - Expanded */}
            <div className="bg-white border-2 border-black">
              <button
                onClick={() => toggleTerm('prerequisite')}
                className="w-full p-3 flex items-center justify-between hover:bg-[#f9fafb]"
              >
                <span className="font-['Consolas',monospace] font-bold text-[14px] uppercase">
                  Prerequisite
                </span>
                {expandedTerms.has('prerequisite') ? (
                  <ChevronUp size={18} strokeWidth={1.5} />
                ) : (
                  <ChevronDown size={18} strokeWidth={1.5} />
                )}
              </button>
              {expandedTerms.has('prerequisite') && (
                <div className="bg-[#f9fafb] border-t-2 border-black px-3 py-3.5 space-y-2">
                  <div className="flex items-start gap-2">
                    <Info size={14} className="mt-0.5" strokeWidth={1.17} />
                    <p className="font-['Inter',sans-serif] text-[11px] leading-[13.75px]">
                      A course you must take and pass before you can enroll in a more advanced course.
                    </p>
                  </div>
                  <p className="font-['Inter',sans-serif] italic text-[10px] text-[#4a5565] pl-5">
                    For example, you must take ENG 100 before you can take ENG 101.
                  </p>
                </div>
              )}
            </div>

            {/* Units */}
            <div className="bg-white border-2 border-black">
              <button
                onClick={() => toggleTerm('units')}
                className="w-full p-3 flex items-center justify-between hover:bg-[#f9fafb]"
              >
                <span className="font-['Consolas',monospace] font-bold text-[14px] uppercase">
                  Units
                </span>
                {expandedTerms.has('units') ? (
                  <ChevronUp size={18} strokeWidth={1.5} />
                ) : (
                  <ChevronDown size={18} strokeWidth={1.5} />
                )}
              </button>
              {expandedTerms.has('units') && (
                <div className="bg-[#f9fafb] border-t-2 border-black px-3 py-3.5 space-y-2">
                  <div className="flex items-start gap-2">
                    <Info size={14} className="mt-0.5" strokeWidth={1.17} />
                    <p className="font-['Inter',sans-serif] text-[11px] leading-[13.75px]">
                      A measure of academic credit representing the amount of time spent in class and studying. One unit typically equals one hour of class per week for a semester.
                    </p>
                  </div>
                  <p className="font-['Inter',sans-serif] italic text-[10px] text-[#4a5565] pl-5">
                    For example, a 3-unit course meets for 3 hours per week and requires about 6 hours of outside study time.
                  </p>
                </div>
              )}
            </div>

            {/* Upper Division */}
            <div className="bg-white border-2 border-black">
              <button
                onClick={() => toggleTerm('upper-division')}
                className="w-full p-3 flex items-center justify-between hover:bg-[#f9fafb]"
              >
                <span className="font-['Consolas',monospace] font-bold text-[14px] uppercase">
                  Upper Division
                </span>
                {expandedTerms.has('upper-division') ? (
                  <ChevronUp size={18} strokeWidth={1.5} />
                ) : (
                  <ChevronDown size={18} strokeWidth={1.5} />
                )}
              </button>
              {expandedTerms.has('upper-division') && (
                <div className="bg-[#f9fafb] border-t-2 border-black px-3 py-3.5 space-y-2">
                  <div className="flex items-start gap-2">
                    <Info size={14} className="mt-0.5" strokeWidth={1.17} />
                    <p className="font-['Inter',sans-serif] text-[11px] leading-[13.75px]">
                      Advanced courses numbered 300-499 that typically require completion of lower division (100-299) prerequisites. These courses are more specialized and in-depth.
                    </p>
                  </div>
                  <p className="font-['Inter',sans-serif] italic text-[10px] text-[#4a5565] pl-5">
                    For example, HIST 350 (Modern European History) is an upper division course that requires HIST 101 as a prerequisite.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Need More Help Section */}
          <div className="bg-[#f3f4f6] border-[3px] border-black p-5">
            <div className="border-b border-black pb-2 mb-3">
              <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase">
                Need More Help?
              </h3>
            </div>
            <div className="space-y-2">
              <Link to="/advisor-sharing" className="w-full bg-white border-2 border-black py-2 flex items-center justify-center gap-2 hover:bg-[#f9fafb]">
                <MessageCircle size={14} strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-bold text-[10px] uppercase">
                  Contact Advisor
                </span>
              </Link>
              <Link to="/financial-aid-faq" className="w-full bg-white border-2 border-black py-2 flex items-center justify-center gap-2 hover:bg-[#f9fafb]">
                <Info size={14} strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-bold text-[10px] uppercase">
                  Financial Aid Office
                </span>
              </Link>
              <Link to="/tutoring-services" className="w-full bg-white border-2 border-black py-2 flex items-center justify-center gap-2 hover:bg-[#f9fafb]">
                <BookOpen size={14} strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-bold text-[10px] uppercase">
                  Tutoring Services
                </span>
              </Link>
              <Link to="/financial-aid-faq" className="w-full bg-white border-2 border-black py-2 flex items-center justify-center gap-2 hover:bg-[#f9fafb]">
                <ExternalLink size={14} strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-bold text-[10px] uppercase">
                  Frequently Asked Questions
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
