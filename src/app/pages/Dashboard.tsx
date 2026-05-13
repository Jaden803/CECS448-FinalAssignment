import { Link } from 'react-router';
import { AlertCircle, User, GripVertical } from 'lucide-react';
import { NavigationMenu } from '../components/NavigationMenu';

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] bg-white border-[3px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="bg-[#f3f4f6] border-b-[3px] border-black px-4 py-3 flex items-center justify-between">
          <NavigationMenu />
          <h2 className="font-['Consolas',monospace] font-bold text-[14px] tracking-[2.8px] uppercase">
            Academic Portal
          </h2>
          <button className="p-0">
            <User size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Alerts Section */}
          <div className="mb-4">
            <div className="bg-white border-4 border-black shadow-[0px_0px_0px_0px_white] relative">
              <div className="absolute -top-3 left-3 bg-white border-2 border-black px-2">
                <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[0.6px] uppercase">
                  Alerts
                </h3>
              </div>
              <div className="p-3 pt-6 space-y-2">
                <Link to="/past-due-alert" className="block bg-[#fff3f3] border-2 border-[#c10007] p-3 relative hover:bg-[#fee2e2]">
                  <AlertCircle className="absolute left-2.5 top-3 text-[#c10007]" size={20} strokeWidth={1.67} />
                  <div className="ml-8">
                    <div className="border-b border-[#c10007] inline-block mb-1">
                      <span className="font-['Inter',sans-serif] font-black text-[9px] tracking-[-0.45px] uppercase text-[#c10007]">
                        Urgent
                      </span>
                    </div>
                    <div className="font-['Inter',sans-serif] font-bold text-[14px] leading-[17.5px]">
                      Past Due Balance
                    </div>
                  </div>
                </Link>
                <div className="bg-[#fffbf0] border-2 border-[#f59e0b] p-3 relative">
                  <AlertCircle className="absolute left-2.5 top-3 text-[#f59e0b]" size={20} strokeWidth={1.67} />
                  <div className="ml-8">
                    <div className="border-b border-[#f59e0b] inline-block mb-1">
                      <span className="font-['Inter',sans-serif] font-black text-[9px] tracking-[-0.45px] uppercase text-[#f59e0b]">
                        Upcoming
                      </span>
                    </div>
                    <div className="font-['Inter',sans-serif] font-bold text-[14px] leading-[17.5px]">
                      Registration Deadline Approaching
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Degree Progress */}
          <div className="mb-4">
            <div className="bg-white border-2 border-black relative">
              <div className="absolute -top-3 left-3 bg-white px-1">
                <h3 className="font-['Consolas',monospace] font-bold text-[12px] tracking-[0.6px] uppercase">
                  Degree Progress
                </h3>
              </div>
              <div className="p-3 pt-5">
                <div className="flex justify-between text-[12px] mb-2">
                  <span className="font-['Inter',sans-serif] font-bold">UNITS COMPLETED</span>
                  <span className="font-['Inter',sans-serif] font-bold">60 / 120</span>
                </div>
                <div className="bg-[#fef3c7] border-2 border-black h-6 relative">
                  <div className="absolute left-0.5 top-0.5 bg-[#10b981] border-r-2 border-black h-5 w-[50%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="mb-4">
            <div className="bg-white border-2 border-black relative">
              <div className="absolute -top-3 left-3 bg-white px-1">
                <h3 className="font-['Consolas',monospace] font-bold text-[12px] tracking-[0.6px] uppercase">
                  Upcoming Deadlines
                </h3>
              </div>
              <div className="p-3 pt-5 space-y-3">
                <div className="relative">
                  <div className="absolute left-0 top-1.5 w-3 h-3 bg-white border-2 border-black" />
                  <div className="ml-6">
                    <div className="font-['Inter',sans-serif] font-bold text-[14px] leading-[17.5px]">
                      Register by May 5
                    </div>
                    <div className="font-['Inter',sans-serif] text-[12px] text-[#364153]">
                      Fall Semester Registration
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-1.5 w-3 h-3 bg-white border-2 border-black" />
                  <div className="ml-6">
                    <div className="font-['Inter',sans-serif] font-bold text-[14px] leading-[17.5px]">
                      Drop deadline May 10
                    </div>
                    <div className="font-['Inter',sans-serif] text-[12px] text-[#364153]">
                      Last day to drop without 'W'
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-4">
            <div className="bg-white border-2 border-black relative">
              <div className="absolute -top-3 left-3 bg-white px-1">
                <h3 className="font-['Consolas',monospace] font-bold text-[12px] tracking-[0.6px] uppercase">
                  Quick Actions
                </h3>
              </div>
              <div className="p-3 pt-8">
                <div className="mb-3 flex items-center gap-2 px-1">
                  <GripVertical size={12} className="text-[#6a7282]" />
                  <span className="font-['Consolas',monospace] font-bold text-[10px] text-[#6a7282] uppercase">
                    Your Next Steps
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/degree-requirements" className="bg-[#dbeafe] border-2 border-black shadow-[2px_2px_0px_black] p-3 flex flex-col items-center justify-center h-[71px] hover:bg-[#bfdbfe]">
                    <div className="w-5 h-5 bg-[#3b82f6] border-2 border-black mb-2" />
                    <span className="font-['Consolas',monospace] font-bold text-[10px] text-center uppercase">
                      Degree Req's
                    </span>
                  </Link>
                  <Link to="/semester-builder" className="bg-[#d1fae5] border-2 border-black shadow-[2px_2px_0px_black] p-3 flex flex-col items-center justify-center h-[71px] hover:bg-[#a7f3d0]">
                    <div className="w-5 h-5 bg-[#10b981] border-2 border-black rounded-full mb-2" />
                    <span className="font-['Consolas',monospace] font-bold text-[10px] text-center uppercase">
                      Degree Path
                    </span>
                  </Link>
                  <Link to="/notifications" className="bg-[#fef3c7] border-2 border-black shadow-[2px_2px_0px_black] p-3 flex flex-col items-center justify-center h-[71px] hover:bg-[#fde68a]">
                    <div className="w-5 h-5 bg-[#f59e0b] border-2 border-black mb-2" />
                    <span className="font-['Consolas',monospace] font-bold text-[10px] text-center uppercase">
                      Notifications
                    </span>
                  </Link>
                  <Link to="/advisor-sharing" className="bg-[#fce7f3] border-2 border-black shadow-[2px_2px_0px_black] p-3 flex flex-col items-center justify-center h-[71px] hover:bg-[#fbcfe8]">
                    <div className="w-5 h-5 bg-[#ec4899] border-2 border-black flex items-center justify-center mb-2">
                      <div className="w-2.5 h-2.5 bg-white rounded-full" />
                    </div>
                    <span className="font-['Consolas',monospace] font-bold text-[10px] text-center uppercase">
                      Contact Advisor
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tips / Resources */}
          <div>
            <div className="bg-white border-2 border-black relative">
              <div className="absolute -top-3 left-3 bg-white px-1">
                <h3 className="font-['Consolas',monospace] font-bold text-[12px] tracking-[0.6px] uppercase">
                  Tips / Resources
                </h3>
              </div>
              <div className="p-6 pt-8 space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-black rounded-full mt-1.5" />
                  <p className="font-['Inter',sans-serif] text-[10px]">
                    Check prerequisites before enrolling
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-black rounded-full mt-1.5" />
                  <p className="font-['Inter',sans-serif] text-[10px]">
                    Meet with an advisor early
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Help Button */}
        <Link
          to="/glossary"
          className="fixed bottom-8 right-8 bg-black text-white rounded-full px-4 py-2.5 shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] hover:bg-gray-800 flex items-center gap-2"
        >
          <AlertCircle size={18} />
          <span className="font-['Consolas',monospace] font-bold text-[12px] tracking-[1.2px] uppercase">
            Glossary & Help
          </span>
        </Link>
      </div>
    </div>
  );
}
