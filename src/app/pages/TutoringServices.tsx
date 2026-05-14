import { Link } from 'react-router';
import { BookOpen, Calendar, Clock, MapPin } from 'lucide-react';
import { HeaderNavigation } from '../components/HeaderNavigation';

export default function TutoringServices() {
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
            Tutoring Services
          </h2>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="bg-[#fffbf0] border-2 border-[#f59e0b] p-4 mb-4">
            <h3 className="font-['Consolas',monospace] font-black text-[14px] uppercase mb-2">
              Free Academic Support
            </h3>
            <p className="font-['Inter',sans-serif] text-[12px]">
              Get the help you need to succeed in your courses. All tutoring services are free for enrolled students.
            </p>
          </div>

          <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase border-b-2 border-black pb-1 mb-3">
            Available Services
          </h3>

          {/* Subject Tutoring */}
          <div className="bg-white border-2 border-black p-4 mb-3">
            <div className="flex items-start gap-2 mb-2">
              <BookOpen size={20} className="mt-0.5" strokeWidth={1.5} />
              <div className="flex-1">
                <h4 className="font-['Consolas',monospace] font-bold text-[14px] uppercase mb-1">
                  Subject Tutoring
                </h4>
                <p className="font-['Inter',sans-serif] text-[11px] text-[#364153] mb-2">
                  One-on-one or small group tutoring for Math, English, Science, and more.
                </p>
                <div className="space-y-1 text-[11px]">
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-[#6a7282]" />
                    <span className="font-['Inter',sans-serif]">Mon-Fri: 9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-[#6a7282]" />
                    <span className="font-['Inter',sans-serif]">Learning Center, Room 215</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full bg-[#f3f4f6] border-2 border-black py-2 mt-2 font-['Consolas',monospace] font-bold text-[10px] uppercase hover:bg-[#e9ebed]">
              Schedule Appointment
            </button>
          </div>

          {/* Writing Center */}
          <div className="bg-white border-2 border-black p-4 mb-3">
            <div className="flex items-start gap-2 mb-2">
              <BookOpen size={20} className="mt-0.5" strokeWidth={1.5} />
              <div className="flex-1">
                <h4 className="font-['Consolas',monospace] font-bold text-[14px] uppercase mb-1">
                  Writing Center
                </h4>
                <p className="font-['Inter',sans-serif] text-[11px] text-[#364153] mb-2">
                  Get help with essays, research papers, and any writing assignment.
                </p>
                <div className="space-y-1 text-[11px]">
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-[#6a7282]" />
                    <span className="font-['Inter',sans-serif]">Mon-Thu: 10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-[#6a7282]" />
                    <span className="font-['Inter',sans-serif]">Library, 2nd Floor</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full bg-[#f3f4f6] border-2 border-black py-2 mt-2 font-['Consolas',monospace] font-bold text-[10px] uppercase hover:bg-[#e9ebed]">
              Book Writing Session
            </button>
          </div>

          {/* Online Tutoring */}
          <div className="bg-white border-2 border-black p-4 mb-3">
            <div className="flex items-start gap-2 mb-2">
              <BookOpen size={20} className="mt-0.5" strokeWidth={1.5} />
              <div className="flex-1">
                <h4 className="font-['Consolas',monospace] font-bold text-[14px] uppercase mb-1">
                  Online Tutoring
                </h4>
                <p className="font-['Inter',sans-serif] text-[11px] text-[#364153] mb-2">
                  Access virtual tutoring sessions from anywhere, available evenings and weekends.
                </p>
                <div className="space-y-1 text-[11px]">
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-[#6a7282]" />
                    <span className="font-['Inter',sans-serif]">Daily: 5:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-[#6a7282]" />
                    <span className="font-['Inter',sans-serif]">Virtual (Zoom)</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full bg-[#f3f4f6] border-2 border-black py-2 mt-2 font-['Consolas',monospace] font-bold text-[10px] uppercase hover:bg-[#e9ebed]">
              Join Virtual Session
            </button>
          </div>

          {/* Study Groups */}
          <div className="bg-[#d1fae5] border-2 border-[#10b981] p-4">
            <h4 className="font-['Consolas',monospace] font-bold text-[12px] uppercase mb-2">
              Study Groups
            </h4>
            <p className="font-['Inter',sans-serif] text-[11px] text-[#364153] mb-2">
              Join peer-led study groups for popular courses:
            </p>
            <ul className="space-y-1 text-[10px] font-['Inter',sans-serif] pl-4">
              <li>• MATH 150 - Calculus Study Group (Wed 3-5 PM)</li>
              <li>• CHEM 101 - Chemistry Review (Thu 4-6 PM)</li>
              <li>• HIST 101 - History Discussion (Fri 2-4 PM)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
