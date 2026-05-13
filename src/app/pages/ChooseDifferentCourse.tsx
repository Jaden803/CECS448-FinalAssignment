import { Link } from 'react-router';
import { User, Plus, Check } from 'lucide-react';
import { NavigationMenu } from '../components/NavigationMenu';

export default function ChooseDifferentCourse() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] bg-white border-[3px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="bg-[#f3f4f6] border-b-[3px] border-black px-4 py-3 flex items-center justify-between">
          <NavigationMenu />
          <h2 className="font-['Consolas',monospace] font-bold text-[10px] tracking-[1px] uppercase">
            Choose Different Course
          </h2>
          <button className="p-0">
            <User size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="bg-[#f9fafb] border-2 border-black p-4 mb-4">
            <p className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
              Select an alternative course that meets your GE Math requirement:
            </p>
          </div>

          <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase border-b-2 border-black pb-1 mb-3">
            Available Alternatives
          </h3>

          {/* Alternative Courses */}
          <div className="space-y-2 mb-4">
            <div className="bg-white border-2 border-black p-3.5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-['Consolas',monospace] font-bold text-[14px] uppercase block">
                    MATH 120
                  </span>
                  <span className="font-['Inter',sans-serif] text-[12px] text-[#364153]">
                    College Algebra
                  </span>
                </div>
                <div className="border border-black px-1.5 py-px">
                  <span className="font-['Consolas',monospace] font-bold text-[8px] uppercase">
                    GE: Math
                  </span>
                </div>
              </div>
              <p className="font-['Inter',sans-serif] text-[10px] text-[#364153] mb-2">
                Fundamental algebraic concepts and problem-solving. No prerequisites required.
              </p>
              <div className="flex items-center gap-2 text-[#10b981] mb-2">
                <Check size={12} strokeWidth={2} />
                <span className="font-['Inter',sans-serif] font-bold text-[10px]">
                  Prerequisites Met
                </span>
              </div>
              <button className="w-full bg-[#f3f4f6] border-2 border-black py-2.5 flex items-center justify-center gap-2 hover:bg-[#e9ebed]">
                <Plus size={14} strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-black text-[10px] uppercase">
                  Select This Course
                </span>
              </button>
            </div>

            <div className="bg-white border-2 border-black p-3.5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-['Consolas',monospace] font-bold text-[14px] uppercase block">
                    STAT 101
                  </span>
                  <span className="font-['Inter',sans-serif] text-[12px] text-[#364153]">
                    Intro to Statistics
                  </span>
                </div>
                <div className="border border-black px-1.5 py-px">
                  <span className="font-['Consolas',monospace] font-bold text-[8px] uppercase">
                    GE: Math
                  </span>
                </div>
              </div>
              <p className="font-['Inter',sans-serif] text-[10px] text-[#364153] mb-2">
                Basic statistical concepts and data analysis. No prerequisites required.
              </p>
              <div className="flex items-center gap-2 text-[#10b981] mb-2">
                <Check size={12} strokeWidth={2} />
                <span className="font-['Inter',sans-serif] font-bold text-[10px]">
                  Prerequisites Met
                </span>
              </div>
              <button className="w-full bg-[#f3f4f6] border-2 border-black py-2.5 flex items-center justify-center gap-2 hover:bg-[#e9ebed]">
                <Plus size={14} strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-black text-[10px] uppercase">
                  Select This Course
                </span>
              </button>
            </div>

            <div className="bg-white border-2 border-black p-3.5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-['Consolas',monospace] font-bold text-[14px] uppercase block">
                    MATH 095
                  </span>
                  <span className="font-['Inter',sans-serif] text-[12px] text-[#364153]">
                    Pre-Calculus
                  </span>
                </div>
                <div className="border border-black px-1.5 py-px">
                  <span className="font-['Consolas',monospace] font-bold text-[8px] uppercase">
                    Prerequisite
                  </span>
                </div>
              </div>
              <p className="font-['Inter',sans-serif] text-[10px] text-[#364153] mb-2">
                Prepares you for MATH 150 (Calculus I). Covers functions, trigonometry, and limits.
              </p>
              <div className="flex items-center gap-2 text-[#10b981] mb-2">
                <Check size={12} strokeWidth={2} />
                <span className="font-['Inter',sans-serif] font-bold text-[10px]">
                  Prerequisites Met
                </span>
              </div>
              <button className="w-full bg-[#f3f4f6] border-2 border-black py-2.5 flex items-center justify-center gap-2 hover:bg-[#e9ebed]">
                <Plus size={14} strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-black text-[10px] uppercase">
                  Select This Course
                </span>
              </button>
            </div>
          </div>

          <Link
            to="/course-planner"
            className="block bg-black border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)] text-white py-4 text-center font-['Consolas',monospace] font-black text-[12px] uppercase hover:bg-gray-800"
          >
            Continue to Course Planner
          </Link>
        </div>
      </div>
    </div>
  );
}
