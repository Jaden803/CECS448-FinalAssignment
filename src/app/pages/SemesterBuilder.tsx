import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { User, GripVertical, X, AlertTriangle, Send, ArrowRight } from 'lucide-react';
import { NavigationMenu } from '../components/NavigationMenu';

interface Course {
  id: string;
  code: string;
  units: number;
  schedule: string;
}

export default function SemesterBuilder() {
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
  const hasConflict = courses.some(
    (course, idx) =>
      courses.findIndex(
        (c, i) =>
          i !== idx &&
          c.schedule.includes('MWF') &&
          course.schedule.includes('MWF') &&
          c.schedule.includes('10:')
      ) !== -1
  );

  const removeCourse = (id: string) => {
    const updatedCourses = courses.filter((c) => c.id !== id);
    setCourses(updatedCourses);
    // Update sessionStorage
    sessionStorage.setItem('semesterCourses', JSON.stringify(updatedCourses));
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] bg-white border-[3px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="bg-[#f3f4f6] border-b-[3px] border-black px-4 py-3 flex items-center justify-between">
          <NavigationMenu />
          <h2 className="font-['Consolas',monospace] font-bold text-[10px] tracking-[1px] uppercase">
            Semester Builder
          </h2>
          <button className="p-0">
            <User size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Your Semester Plan Header */}
          <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase border-b-2 border-black pb-1 mb-3">
            Your Semester Plan
          </h3>

          {/* Course List */}
          <div className="space-y-2 mb-4">
            {courses.length === 0 ? (
              <div className="bg-[#f9fafb] border-2 border-black border-dashed p-8 text-center">
                <p className="font-['Inter',sans-serif] text-[14px] text-[#364153] mb-4">
                  No courses added yet. Start by adding courses from the Course Planner.
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
              <div key={course.id}>
                {idx === 1 && hasConflict ? (
                  <>
                    {/* Course with conflict */}
                    <div className="bg-white border-2 border-black border-dashed p-3.5">
                      <div className="flex items-center gap-3">
                        <GripVertical size={16} className="text-[#99a1af]" strokeWidth={1.33} />
                        <div className="flex-1">
                          <div className="font-['Consolas',monospace] font-bold text-[14px] uppercase">
                            {course.code}
                          </div>
                          <div className="font-['Consolas',monospace] font-bold text-[10px] text-[#6a7282] uppercase">
                            {course.units} Units • {course.schedule}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Conflict Warning */}
                    <div className="flex items-center gap-2 mt-1">
                      <AlertTriangle size={14} strokeWidth={1.17} />
                      <div className="bg-[#f3f4f6] border border-black px-1.5 py-px">
                        <span className="font-['Consolas',monospace] font-black text-[9px] text-[#c10007] tracking-[-0.225px] uppercase">
                          Schedule conflict detected
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="bg-white border-2 border-black p-3.5 flex items-center gap-3">
                    <GripVertical size={16} className="text-[#99a1af] cursor-move" strokeWidth={1.33} />
                    <div className="flex-1">
                      <div className="font-['Consolas',monospace] font-bold text-[14px] uppercase">
                        {course.code}
                      </div>
                      <div className="font-['Consolas',monospace] font-bold text-[10px] text-[#6a7282] uppercase">
                        {course.units} Units • {course.schedule}
                      </div>
                    </div>
                    <button
                      onClick={() => removeCourse(course.id)}
                      className="p-1 hover:bg-[#f3f4f6]"
                    >
                      <X size={16} strokeWidth={1.33} />
                    </button>
                  </div>
                )}
              </div>
              ))
            )}
          </div>

          {/* Total Units Summary */}
          <div className="bg-white border-[3px] border-black mb-4">
            <div className="p-4 border-b-2 border-black flex justify-between items-center">
              <span className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase">
                Total Semester Units:
              </span>
              <span className="font-['Consolas',monospace] font-black text-[18px] underline">
                {totalUnits}
              </span>
            </div>
            {totalUnits > 15 && (
              <div className="bg-[#f3f4f6] border border-black p-2 m-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle size={16} className="mt-0.5" strokeWidth={1.33} />
                  <p className="font-['Inter',sans-serif] text-[10px]">
                    <strong>Warning:</strong> Taking more than 15 units may be too heavy for your
                    first semester. Consider reducing your load.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              to="/advisor-sharing"
              className="block bg-white border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.1)] py-3.5 text-center font-['Consolas',monospace] font-black text-[12px] uppercase hover:bg-[#f9fafb] relative"
            >
              Share with Advisor
              <Send size={16} className="absolute right-4 top-1/2 -translate-y-1/2" strokeWidth={1.33} />
            </Link>
            <Link to="/semester-review" className="block w-full bg-black border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)] text-white py-3.5 text-center font-['Consolas',monospace] font-black text-[12px] uppercase hover:bg-gray-800 relative">
              Review & Register
              <ArrowRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2" strokeWidth={1.33} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
