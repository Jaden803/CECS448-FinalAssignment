import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { User, Check, Calendar, Clock, MapPin } from 'lucide-react';
import { HeaderNavigation } from '../components/HeaderNavigation';

interface CourseDetail {
  code: string;
  name: string;
  units: number;
  schedule: string;
  location: string;
  instructor: string;
}

export default function SemesterReview() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [courses, setCourses] = useState<CourseDetail[]>([]);

  // Load courses from sessionStorage and add details
  useEffect(() => {
    const savedCourses = sessionStorage.getItem('semesterCourses');
    if (savedCourses) {
      const parsed = JSON.parse(savedCourses);

      // Map basic course data to detailed course info
      const detailedCourses = parsed.map((course: any) => {
        const details: Record<string, Partial<CourseDetail>> = {
          'ENG 101': {
            name: 'Intro to Writing',
            schedule: 'MWF 10:00-10:50 AM',
            location: 'Building A, Room 101',
            instructor: 'Dr. Smith'
          },
          'HIST 101': {
            name: 'World History',
            schedule: 'TTh 1:00-2:15 PM',
            location: 'Building B, Room 205',
            instructor: 'Prof. Johnson'
          },
          'PSYC 101': {
            name: 'Intro to Psychology',
            schedule: 'MWF 10:30-11:20 AM',
            location: 'Building C, Room 310',
            instructor: 'Dr. Martinez'
          },
          'BIOL 100': {
            name: 'General Biology',
            schedule: 'TTh 9:00-10:50 AM',
            location: 'Science Hall, Lab 3',
            instructor: 'Dr. Williams'
          },
          'MATH 150': {
            name: 'Calculus I',
            schedule: 'TTh 9:00-10:50 AM',
            location: 'Math Building, Room 120',
            instructor: 'Prof. Chen'
          }
        };

        return {
          code: course.code,
          units: course.units,
          ...details[course.code]
        };
      });

      setCourses(detailedCourses as CourseDetail[]);
    }
  }, []);

  const totalUnits = courses.reduce((sum, course) => sum + course.units, 0);

  const handleFinalize = () => {
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] bg-white border-[3px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">
          <div className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-4">
                <Check size={40} className="text-white" strokeWidth={3} />
              </div>
              <h2 className="font-['Consolas',monospace] font-black text-[20px] uppercase mb-3">
                Enrollment Confirmed!
              </h2>
              <p className="font-['Inter',sans-serif] text-[14px] text-[#364153] mb-6">
                You have successfully enrolled in {courses.length} courses for Fall 2026. A confirmation email has been sent to your student email.
              </p>
              <div className="bg-[#f9fafb] border-2 border-black p-4 w-full mb-6">
                <div className="space-y-2">
                  {courses.map((course, idx) => (
                    <div key={idx} className="flex justify-between text-[12px]">
                      <span className="font-['Consolas',monospace] font-bold">
                        {course.code}
                      </span>
                      <span className="font-['Inter',sans-serif]">
                        {course.units} Units
                      </span>
                    </div>
                  ))}
                  <div className="border-t-2 border-black pt-2 flex justify-between font-bold text-[14px]">
                    <span className="font-['Consolas',monospace]">TOTAL</span>
                    <span className="font-['Inter',sans-serif]">{totalUnits} Units</span>
                  </div>
                </div>
              </div>
              <Link
                to="/dashboard"
                className="w-full bg-black border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)] text-white py-4 text-center font-['Consolas',monospace] font-black text-[12px] uppercase hover:bg-gray-800 mb-3"
              >
                Return to Dashboard
              </Link>
              <button className="font-['Consolas',monospace] font-bold text-[10px] uppercase underline">
                Print Confirmation
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            Review & Register
          </h2>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="bg-[#f9fafb] border-2 border-black p-4 mb-4">
            <h3 className="font-['Consolas',monospace] font-black text-[14px] uppercase mb-2">
              Fall 2026 Semester
            </h3>
            <div className="flex items-center gap-2 text-[12px] text-[#364153]">
              <Calendar size={14} />
              <span className="font-['Inter',sans-serif]">August 25 - December 15, 2026</span>
            </div>
          </div>

          <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase border-b-2 border-black pb-1 mb-3">
            Your Schedule
          </h3>

          {/* Course Details */}
          <div className="space-y-3 mb-4">
            {courses.length === 0 ? (
              <div className="bg-[#f9fafb] border-2 border-black border-dashed p-8 text-center">
                <p className="font-['Inter',sans-serif] text-[14px] text-[#364153] mb-4">
                  No courses to review. Please add courses from the Course Planner first.
                </p>
                <Link
                  to="/course-planner"
                  className="inline-block bg-black border-2 border-black text-white px-6 py-2 font-['Consolas',monospace] font-bold text-[10px] uppercase hover:bg-gray-800"
                >
                  Go to Course Planner
                </Link>
              </div>
            ) : (
              courses.map((course, idx) => (
              <div key={idx} className="bg-white border-2 border-black p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-['Consolas',monospace] font-bold text-[14px] uppercase">
                      {course.code}
                    </div>
                    <div className="font-['Inter',sans-serif] text-[12px] text-[#364153]">
                      {course.name}
                    </div>
                  </div>
                  <div className="bg-black text-white px-2 py-1">
                    <span className="font-['Consolas',monospace] font-bold text-[10px]">
                      {course.units} Units
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px]">
                    <Clock size={12} className="text-[#6a7282]" />
                    <span className="font-['Inter',sans-serif]">{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <MapPin size={12} className="text-[#6a7282]" />
                    <span className="font-['Inter',sans-serif]">{course.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <User size={12} className="text-[#6a7282]" />
                    <span className="font-['Inter',sans-serif]">{course.instructor}</span>
                  </div>
                </div>
              </div>
              ))
            )}
          </div>

          {/* Summary */}
          <div className="bg-[#f3f4f6] border-[3px] border-black p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-['Consolas',monospace] font-black text-[12px] uppercase">
                Total Units:
              </span>
              <span className="font-['Consolas',monospace] font-black text-[20px]">
                {totalUnits}
              </span>
            </div>
            <div className="border-t-2 border-black pt-2">
              <div className="flex justify-between text-[11px] mb-1">
                <span className="font-['Inter',sans-serif]">Tuition & Fees:</span>
                <span className="font-['Inter',sans-serif] font-bold">$2,100.00</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="font-['Inter',sans-serif]">Financial Aid Applied:</span>
                <span className="font-['Inter',sans-serif] font-bold text-[#10b981]">-$1,500.00</span>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-[#fffbf0] border-2 border-[#f59e0b] p-3 mb-4">
            <p className="font-['Inter',sans-serif] text-[11px]">
              <strong>Important:</strong> By clicking "Finalize and Enroll," you confirm your enrollment in these courses. Changes after the add/drop deadline may result in fees.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleFinalize}
              disabled={courses.length === 0}
              className="w-full bg-black border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)] text-white py-4 text-center font-['Consolas',monospace] font-black text-[12px] uppercase hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Finalize and Enroll
            </button>
            <Link
              to="/semester-builder"
              className="block text-center font-['Consolas',monospace] font-bold text-[10px] uppercase underline"
            >
              Back to Semester Builder
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
