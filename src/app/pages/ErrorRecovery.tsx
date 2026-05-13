import { Link } from 'react-router';
import { User, AlertTriangle, ArrowDown, RotateCcw, Calendar, Info, ArrowLeft } from 'lucide-react';
import { NavigationMenu } from '../components/NavigationMenu';

export default function ErrorRecovery() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] bg-white border-[3px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="bg-[#f3f4f6] border-b-[3px] border-black px-4 py-3 flex items-center justify-between">
          <NavigationMenu />
          <h2 className="font-['Consolas',monospace] font-bold text-[10px] tracking-[1px] uppercase">
            Fix This Plan
          </h2>
          <button className="p-0">
            <User size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Error Explanation */}
          <div className="bg-white border-[3px] border-black p-6 mb-4">
            <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-3">
              <AlertTriangle size={24} strokeWidth={3} />
              <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase">
                Prerequisite Missing
              </h3>
            </div>
            <p className="font-['Consolas',monospace] font-bold text-[12px] uppercase leading-[15px]">
              You cannot enroll in{' '}
              <span className="underline italic">MATH 150 (Calculus I)</span> because you have not
              completed <span className="underline italic">MATH 095 (Pre-Calculus)</span>.
            </p>
          </div>

          {/* Recovery Options */}
          <div className="mb-4">
            <p className="font-['Consolas',monospace] font-black text-[10px] text-[#4a5565] tracking-[1px] uppercase text-center mb-4">
              Let's fix this together:
            </p>
            <div className="space-y-2">
              <Link to="/choose-different-course" className="block w-full bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.1)] py-3 flex items-center justify-center gap-2 hover:bg-[#f9fafb] relative">
                <ArrowDown size={16} className="absolute left-3.5" strokeWidth={1.33} />
                <span className="font-['Consolas',monospace] font-black text-[11px] uppercase">
                  Choose a different course
                </span>
              </Link>
              <Link to="/course-planner" className="block w-full bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.1)] py-3 flex items-center justify-center gap-2 hover:bg-[#f9fafb] relative">
                <RotateCcw size={16} className="absolute left-3.5" strokeWidth={1.33} />
                <span className="font-['Consolas',monospace] font-black text-[11px] uppercase">
                  Add Prerequisite (MATH 095)
                </span>
              </Link>
              <Link to="/semester-builder" className="block w-full bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.1)] py-3 flex items-center justify-center gap-2 hover:bg-[#f9fafb] relative">
                <Calendar size={16} className="absolute left-3.5" strokeWidth={1.33} />
                <span className="font-['Consolas',monospace] font-black text-[11px] uppercase">
                  Adjust your semester schedule
                </span>
              </Link>
              <Link to="/advisor-sharing" className="block w-full bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.1)] py-3 flex items-center justify-center gap-2 hover:bg-[#f9fafb] relative">
                <Info size={16} className="absolute left-3.5" strokeWidth={1.33} />
                <span className="font-['Consolas',monospace] font-black text-[11px] uppercase">
                  Contact your Academic Advisor
                </span>
              </Link>
            </div>
          </div>

          {/* Back Navigation */}
          <div className="border-t-2 border-black pt-4">
            <Link
              to="/course-planner"
              className="flex items-center justify-center gap-2 font-['Consolas',monospace] font-black text-[10px] uppercase hover:underline"
            >
              <ArrowLeft size={16} strokeWidth={1.33} />
              Back to Course Planner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
