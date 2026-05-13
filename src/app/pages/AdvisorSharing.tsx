import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { User, Send, Check } from 'lucide-react';
import { NavigationMenu } from '../components/NavigationMenu';

interface Course {
  code: string;
  units: number;
}

export default function AdvisorSharing() {
  const [message, setMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);

  // Load courses from sessionStorage on mount
  useEffect(() => {
    const savedCourses = sessionStorage.getItem('semesterCourses');
    if (savedCourses) {
      const parsed = JSON.parse(savedCourses);
      setCourses(parsed);
    }
  }, []);

  const totalUnits = courses.reduce((sum, course) => sum + course.units, 0);

  const handleShare = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] bg-white border-[3px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="bg-[#f3f4f6] border-b-[3px] border-black px-4 py-3 flex items-center justify-between">
          <NavigationMenu />
          <h2 className="font-['Consolas',monospace] font-bold text-[10px] tracking-[1px] uppercase">
            Advisor Sharing
          </h2>
          <button className="p-0">
            <User size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Plan Summary */}
          <div className="bg-white border-2 border-black p-4 mb-4">
            <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase border-b-2 border-black pb-1 mb-3">
              Your Plan Summary
            </h3>
            {courses.length === 0 ? (
              <div className="bg-[#f9fafb] border-2 border-black border-dashed p-6 text-center mb-3">
                <p className="font-['Inter',sans-serif] text-[12px] text-[#364153]">
                  No courses selected yet. Please add courses from the Course Planner.
                </p>
              </div>
            ) : (
              <div className="space-y-2 mb-3">
                {courses.map((course, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="font-['Consolas',monospace] font-bold text-[11px] uppercase">
                      {course.code}
                    </span>
                    <span className="font-['Consolas',monospace] font-bold text-[11px] uppercase">
                      {course.units} Units
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div className="border-t border-black border-dashed pt-2 flex justify-between items-center">
              <span className="font-['Consolas',monospace] font-black text-[10px] uppercase">
                Total Planned Units:
              </span>
              <span className="font-['Consolas',monospace] font-black text-[14px]">
                {totalUnits}
              </span>
            </div>
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label className="font-['Consolas',monospace] font-black text-[10px] tracking-[1px] uppercase block mb-2">
              Add a message for your advisor
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Any questions or concerns about these classes?"
              className="w-full bg-[#f9fafb] border-2 border-black p-3.5 font-['Inter',sans-serif] text-[11px] leading-[16.5px] placeholder:text-[#99a1af] resize-none h-24 outline-none"
            />
          </div>

          {/* Share Button */}
          <button
            onClick={handleShare}
            disabled={courses.length === 0}
            className="w-full bg-black border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)] text-white py-4 text-center font-['Consolas',monospace] font-black text-[12px] uppercase hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed relative mb-3"
          >
            Share with Advisor
            <Send size={18} className="absolute right-4 top-1/2 -translate-y-1/2" strokeWidth={1.5} />
          </button>

          {/* Confirmation Message */}
          {showConfirmation && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white border-4 border-black p-6 max-w-sm shadow-[8px_8px_0px_rgba(0,0,0,0.3)]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                    <Check size={32} className="text-white" strokeWidth={3} />
                  </div>
                  <h3 className="font-['Consolas',monospace] font-black text-[16px] uppercase mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[12px] text-[#364153]">
                    Your course plan and message have been shared with your academic advisor. They will review and respond within 1-2 business days.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Back to Dashboard */}
          <Link
            to="/dashboard"
            className="block text-center font-['Consolas',monospace] font-black text-[9px] uppercase underline hover:no-underline"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
