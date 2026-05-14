import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { AlertTriangle, Plus } from 'lucide-react';
import { HeaderNavigation } from '../components/HeaderNavigation';

interface Course {
  id: string;
  code: string;
  name: string;
  category: string;
  units: number;
  description: string;
  prerequisite?: string;
  prerequisiteMet: boolean;
}

export default function CoursePlanner() {
  const navigate = useNavigate();
  const [plannedCourses, setPlannedCourses] = useState<string[]>([]);
  const [totalUnits, setTotalUnits] = useState(0);

  const courses: Course[] = [
    {
      id: 'eng101',
      code: 'ENG 101',
      name: 'Intro to Writing',
      category: 'GE: Written Comm',
      units: 3,
      description: 'Introductory writing course focused on academic research.',
      prerequisiteMet: true,
    },
    {
      id: 'math150',
      code: 'MATH 150',
      name: 'Calculus I',
      category: 'GE: Math',
      units: 4,
      description: 'Requires completion of MATH 095 with a grade of C or better.',
      prerequisite: 'MATH 095',
      prerequisiteMet: false,
    },
    {
      id: 'hist101',
      code: 'HIST 101',
      name: 'World History',
      category: 'Major: History',
      units: 3,
      description: 'Survey of World History from 1500 to the present.',
      prerequisiteMet: true,
    },
    {
      id: 'psyc101',
      code: 'PSYC 101',
      name: 'Intro to Psychology',
      category: 'GE: Social Science',
      units: 3,
      description: 'Introduction to psychological concepts and human behavior.',
      prerequisiteMet: true,
    },
  ];

  // Load planned courses from sessionStorage on mount
  useEffect(() => {
    const savedCourses = sessionStorage.getItem('plannedCourses');
    if (savedCourses) {
      const parsed = JSON.parse(savedCourses);
      setPlannedCourses(parsed);

      // Calculate total units
      const total = parsed.reduce((sum: number, courseId: string) => {
        const course = courses.find((c) => c.id === courseId);
        return sum + (course?.units || 0);
      }, 0);
      setTotalUnits(total);
    }
  }, []);

  const addToPlan = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    if (course && course.prerequisiteMet && !plannedCourses.includes(courseId)) {
      const newPlannedCourses = [...plannedCourses, courseId];
      setPlannedCourses(newPlannedCourses);
      setTotalUnits(totalUnits + course.units);

      // Save to sessionStorage
      sessionStorage.setItem('plannedCourses', JSON.stringify(newPlannedCourses));
    }
  };

  const handleReviewPlan = () => {
    // Save the full course data to sessionStorage for SemesterBuilder
    const selectedCourses = plannedCourses.map(courseId => {
      const course = courses.find(c => c.id === courseId);
      if (!course) return null;

      // Map course codes to schedules
      const scheduleMap: Record<string, string> = {
        'ENG 101': 'MWF 10:00AM',
        'HIST 101': 'TTh 1:00PM',
        'PSYC 101': 'MWF 10:30AM', // Conflicts with ENG 101
        'MATH 150': 'TTh 9:00AM'
      };

      return {
        id: course.id,
        code: course.code,
        units: course.units,
        schedule: scheduleMap[course.code] || 'TBA'
      };
    }).filter(Boolean);

    sessionStorage.setItem('semesterCourses', JSON.stringify(selectedCourses));
    navigate('/semester-builder');
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
            Course Planner
          </h2>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Suggested Courses Header */}
          <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase border-b-2 border-black pb-1 mb-3">
            Suggested Courses
          </h3>

          {/* Course List */}
          <div className="space-y-2 mb-4">
            {/* Course 1 - Available */}
            <div className="bg-white border-2 border-black p-3.5">
              <div className="flex justify-between items-start mb-2">
                <span className="font-['Consolas',monospace] font-bold text-[14px] uppercase">
                  {courses[0].code}
                </span>
                <div className="border border-black px-1.5 py-px">
                  <span className="font-['Consolas',monospace] font-bold text-[8px] uppercase">
                    {courses[0].category}
                  </span>
                </div>
              </div>
              <p className="font-['Inter',sans-serif] text-[10px] text-[#364153] mb-2">
                {courses[0].description}
              </p>
              <button
                onClick={() => addToPlan(courses[0].id)}
                disabled={plannedCourses.includes(courses[0].id)}
                className="w-full bg-[#f3f4f6] border-2 border-black py-2.5 flex items-center justify-center gap-2 hover:bg-[#e9ebed] disabled:opacity-50"
              >
                <Plus size={14} strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-black text-[10px] uppercase">
                  {plannedCourses.includes(courses[0].id) ? 'Added' : 'Add to Plan'}
                </span>
              </button>
            </div>

            {/* Course 2 - Prerequisite Not Met */}
            <div className="bg-white border-2 border-black border-dashed p-3.5 opacity-80">
              <div className="flex justify-between items-start mb-2">
                <span className="font-['Consolas',monospace] font-bold text-[14px] uppercase">
                  {courses[1].code}
                </span>
                <div className="border border-black px-1.5 py-px">
                  <span className="font-['Consolas',monospace] font-bold text-[8px] uppercase">
                    {courses[1].category}
                  </span>
                </div>
              </div>
              <div className="bg-[#f3f4f6] border border-black p-2 mb-2">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={14} strokeWidth={1.17} />
                  <span className="font-['Consolas',monospace] font-black text-[9px] tracking-[-0.225px] uppercase">
                    Prerequisite not met
                  </span>
                </div>
                <Link
                  to="/error-recovery"
                  className="font-['Consolas',monospace] font-black text-[8px] underline uppercase inline-block"
                >
                  Why can't I take this?
                </Link>
              </div>
              <p className="font-['Inter',sans-serif] text-[10px] text-[#364153] mb-2">
                {courses[1].description}
              </p>
              <button
                disabled
                className="w-full bg-white border-2 border-black py-2.5 flex items-center justify-center gap-2 opacity-30"
              >
                <Plus size={14} strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-black text-[10px] uppercase">
                  Add to Plan
                </span>
              </button>
            </div>

            {/* Course 3 - Available */}
            <div className="bg-white border-2 border-black p-3.5">
              <div className="flex justify-between items-start mb-2">
                <span className="font-['Consolas',monospace] font-bold text-[14px] uppercase">
                  {courses[2].code}
                </span>
                <div className="border border-black px-1.5 py-px">
                  <span className="font-['Consolas',monospace] font-bold text-[8px] uppercase">
                    {courses[2].category}
                  </span>
                </div>
              </div>
              <p className="font-['Inter',sans-serif] text-[10px] text-[#364153] mb-2">
                {courses[2].description}
              </p>
              <button
                onClick={() => addToPlan(courses[2].id)}
                disabled={plannedCourses.includes(courses[2].id)}
                className="w-full bg-[#f3f4f6] border-2 border-black py-2.5 flex items-center justify-center gap-2 hover:bg-[#e9ebed] disabled:opacity-50"
              >
                <Plus size={14} strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-black text-[10px] uppercase">
                  {plannedCourses.includes(courses[2].id) ? 'Added' : 'Add to Plan'}
                </span>
              </button>
            </div>

            {/* Course 4 - Available (Will conflict with ENG 101) */}
            <div className="bg-white border-2 border-black p-3.5">
              <div className="flex justify-between items-start mb-2">
                <span className="font-['Consolas',monospace] font-bold text-[14px] uppercase">
                  {courses[3].code}
                </span>
                <div className="border border-black px-1.5 py-px">
                  <span className="font-['Consolas',monospace] font-bold text-[8px] uppercase">
                    {courses[3].category}
                  </span>
                </div>
              </div>
              <p className="font-['Inter',sans-serif] text-[10px] text-[#364153] mb-2">
                {courses[3].description}
              </p>
              <button
                onClick={() => addToPlan(courses[3].id)}
                disabled={plannedCourses.includes(courses[3].id)}
                className="w-full bg-[#f3f4f6] border-2 border-black py-2.5 flex items-center justify-center gap-2 hover:bg-[#e9ebed] disabled:opacity-50"
              >
                <Plus size={14} strokeWidth={1.17} />
                <span className="font-['Consolas',monospace] font-black text-[10px] uppercase">
                  {plannedCourses.includes(courses[3].id) ? 'Added' : 'Add to Plan'}
                </span>
              </button>
            </div>
          </div>

          {/* Total Units Summary */}
          <div className="bg-white border-[3px] border-black mb-4">
            <div className="p-4 border-b-2 border-black flex justify-between items-center">
              <span className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase">
                Total Planned Units:
              </span>
              <span className="font-['Consolas',monospace] font-black text-[18px]">{totalUnits}</span>
            </div>
            {totalUnits > 15 && (
              <div className="bg-[#f9fafb] border border-black border-dashed p-2 m-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle size={16} className="mt-0.5" strokeWidth={1.33} />
                  <p className="font-['Inter',sans-serif] text-[10px]">
                    <strong>Financial Aid Note:</strong> Taking more than 15 units may affect your
                    financial aid package. Please consult an advisor before adding more.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Review Button */}
          <button
            onClick={handleReviewPlan}
            className="w-full bg-black border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)] text-white py-4 text-center font-['Consolas',monospace] font-black text-[12px] uppercase hover:bg-gray-800 relative"
          >
            Review & Finalize Plan
            <span className="absolute right-4 top-1/2 -translate-y-1/2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
