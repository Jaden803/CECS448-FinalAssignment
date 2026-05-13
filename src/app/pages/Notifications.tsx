import { Link } from 'react-router';
import { User, AlertCircle, CheckCircle, Info, Calendar } from 'lucide-react';
import { NavigationMenu } from '../components/NavigationMenu';

export default function Notifications() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] bg-white border-[3px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="bg-[#f3f4f6] border-b-[3px] border-black px-4 py-3 flex items-center justify-between">
          <NavigationMenu />
          <h2 className="font-['Consolas',monospace] font-bold text-[10px] tracking-[1px] uppercase">
            Notifications
          </h2>
          <button className="p-0">
            <User size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase">
              Recent
            </h3>
            <button className="font-['Consolas',monospace] font-bold text-[10px] uppercase underline">
              Mark All Read
            </button>
          </div>

          {/* Notifications List */}
          <div className="space-y-2 mb-6">
            {/* Urgent Notification */}
            <div className="bg-[#fff3f3] border-2 border-[#c10007] p-3">
              <div className="flex items-start gap-2">
                <AlertCircle size={20} className="text-[#c10007] mt-0.5" strokeWidth={1.67} />
                <div className="flex-1">
                  <div className="font-['Inter',sans-serif] font-black text-[9px] uppercase text-[#c10007] mb-1">
                    URGENT
                  </div>
                  <div className="font-['Inter',sans-serif] font-bold text-[14px] mb-1">
                    Past Due Balance
                  </div>
                  <p className="font-['Inter',sans-serif] text-[11px] text-[#364153] mb-2">
                    You have an outstanding balance of $1,250.00 due May 5 at 5:00 PM.
                  </p>
                  <div className="flex items-center gap-2 text-[#6a7282] text-[10px]">
                    <Calendar size={12} />
                    <span>Today, 9:30 AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Notification */}
            <div className="bg-[#fffbf0] border-2 border-[#f59e0b] p-3">
              <div className="flex items-start gap-2">
                <Info size={20} className="text-[#f59e0b] mt-0.5" strokeWidth={1.67} />
                <div className="flex-1">
                  <div className="font-['Inter',sans-serif] font-black text-[9px] uppercase text-[#f59e0b] mb-1">
                    UPCOMING
                  </div>
                  <div className="font-['Inter',sans-serif] font-bold text-[14px] mb-1">
                    Registration Deadline Approaching
                  </div>
                  <p className="font-['Inter',sans-serif] text-[11px] text-[#364153] mb-2">
                    Fall semester registration closes on May 5. Register for your classes soon.
                  </p>
                  <div className="flex items-center gap-2 text-[#6a7282] text-[10px]">
                    <Calendar size={12} />
                    <span>Today, 8:00 AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Notification */}
            <div className="bg-[#f0fdf4] border-2 border-[#16a34a] p-3 opacity-60">
              <div className="flex items-start gap-2">
                <CheckCircle size={20} className="text-[#16a34a] mt-0.5" strokeWidth={1.67} />
                <div className="flex-1">
                  <div className="font-['Inter',sans-serif] font-black text-[9px] uppercase text-[#16a34a] mb-1">
                    COMPLETED
                  </div>
                  <div className="font-['Inter',sans-serif] font-bold text-[14px] mb-1">
                    Grade Posted - HIST 101
                  </div>
                  <p className="font-['Inter',sans-serif] text-[11px] text-[#364153] mb-2">
                    Your final grade for HIST 101 has been posted. View your transcript for details.
                  </p>
                  <div className="flex items-center gap-2 text-[#6a7282] text-[10px]">
                    <Calendar size={12} />
                    <span>Yesterday, 3:45 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Notification */}
            <div className="bg-[#f9fafb] border-2 border-black p-3 opacity-60">
              <div className="flex items-start gap-2">
                <Info size={20} className="mt-0.5" strokeWidth={1.67} />
                <div className="flex-1">
                  <div className="font-['Inter',sans-serif] font-black text-[9px] uppercase mb-1">
                    INFO
                  </div>
                  <div className="font-['Inter',sans-serif] font-bold text-[14px] mb-1">
                    Advisor Meeting Scheduled
                  </div>
                  <p className="font-['Inter',sans-serif] text-[11px] text-[#364153] mb-2">
                    Your academic planning meeting is scheduled for May 8 at 2:00 PM in Student Services.
                  </p>
                  <div className="flex items-center gap-2 text-[#6a7282] text-[10px]">
                    <Calendar size={12} />
                    <span>May 3, 10:15 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase border-b-2 border-black pb-1 mb-3">
            Earlier
          </h3>

          <div className="space-y-2">
            <div className="bg-white border border-black p-3 opacity-40">
              <div className="flex items-start gap-2">
                <CheckCircle size={20} className="text-[#16a34a] mt-0.5" strokeWidth={1.67} />
                <div className="flex-1">
                  <div className="font-['Inter',sans-serif] font-bold text-[14px] mb-1">
                    Course Added Successfully
                  </div>
                  <p className="font-['Inter',sans-serif] text-[11px] text-[#364153] mb-2">
                    ENG 101 has been added to your Fall 2026 schedule.
                  </p>
                  <div className="flex items-center gap-2 text-[#6a7282] text-[10px]">
                    <Calendar size={12} />
                    <span>May 1, 4:20 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-black p-3 opacity-40">
              <div className="flex items-start gap-2">
                <Info size={20} className="mt-0.5" strokeWidth={1.67} />
                <div className="flex-1">
                  <div className="font-['Inter',sans-serif] font-bold text-[14px] mb-1">
                    Financial Aid Disbursed
                  </div>
                  <p className="font-['Inter',sans-serif] text-[11px] text-[#364153] mb-2">
                    Your Spring 2026 financial aid has been disbursed to your account.
                  </p>
                  <div className="flex items-center gap-2 text-[#6a7282] text-[10px]">
                    <Calendar size={12} />
                    <span>April 28, 9:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
