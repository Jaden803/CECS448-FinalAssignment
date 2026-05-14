import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronUp, ChevronDown, Info } from 'lucide-react';
import { HeaderNavigation } from '../components/HeaderNavigation';

type TabType = 'ge' | 'major' | 'electives';

export default function DegreeRequirements() {
  const [activeTab, setActiveTab] = useState<TabType>('ge');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['written-communication']));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
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
            Degree Requirements
          </h2>
        </div>

        {/* Tabs */}
        <div className="border-b-[3px] border-black flex">
          <button
            onClick={() => setActiveTab('ge')}
            className={`flex-1 py-3 font-['Consolas',monospace] font-black text-[12px] tracking-[0.6px] uppercase border-l-[3px] border-black first:border-l-0 ${
              activeTab === 'ge' ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            GE
          </button>
          <button
            onClick={() => setActiveTab('major')}
            className={`flex-1 py-3 font-['Consolas',monospace] font-black text-[12px] tracking-[0.6px] uppercase border-l-[3px] border-black ${
              activeTab === 'major' ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            Major
          </button>
          <button
            onClick={() => setActiveTab('electives')}
            className={`flex-1 py-3 font-['Consolas',monospace] font-black text-[12px] tracking-[0.6px] uppercase border-l-[3px] border-black ${
              activeTab === 'electives' ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            Electives
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Legend */}
          <div className="flex gap-2 text-[8px] mb-4">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-[#fef3c7] border-2 border-black" />
              <span className="font-['Consolas',monospace] font-bold uppercase">Remaining</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-[#fde68a] border-2 border-black" />
              <span className="font-['Consolas',monospace] font-bold uppercase">In Progress</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-[#10b981]" />
              <span className="font-['Consolas',monospace] font-bold uppercase">Completed</span>
            </div>
          </div>

          {/* Course Requirements */}
          <div className="space-y-2">
            {activeTab === 'ge' && (
              <>
                {/* Written Communication */}
                <div className="bg-white border-2 border-black">
                  <button
                    onClick={() => toggleSection('written-communication')}
                    className="w-full p-3 flex items-center justify-between hover:bg-[#fffbf0]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#fef3c7] border-2 border-black" />
                      <span className="font-['Consolas',monospace] font-bold text-[12px] tracking-[-0.3px] uppercase">
                        Written Communication
                      </span>
                    </div>
                    {expandedSections.has('written-communication') ? (
                      <ChevronUp size={16} strokeWidth={1.33} />
                    ) : (
                      <ChevronDown size={16} strokeWidth={1.33} />
                    )}
                  </button>
                  {expandedSections.has('written-communication') && (
                    <div className="bg-[#f9fafb] border-t-2 border-black p-3">
                      <div className="border-b border-black border-dashed pb-3 mb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-['Inter',sans-serif] font-bold text-[12px] mb-0.5">
                              Required Course:
                            </div>
                            <div className="font-['Inter',sans-serif] text-[12px]">
                              ENG 101 - Intro to Writing
                            </div>
                          </div>
                          <div className="border border-black px-1.5 py-0.5 flex items-center gap-1">
                            <span className="font-['Inter',sans-serif] font-bold text-[8px] uppercase">
                              3 Units
                            </span>
                            <Info size={10} strokeWidth={0.83} />
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter',sans-serif] text-[10px] text-[#364153]">
                        Focuses on critical thinking, academic research, and the writing process.
                      </p>
                    </div>
                  )}
                </div>

                {/* Critical Thinking */}
                <div className="bg-white border-2 border-black">
                  <button
                    onClick={() => toggleSection('critical-thinking')}
                    className="w-full p-3 flex items-center justify-between hover:bg-[#fffbf0]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#fde68a] border-2 border-black" />
                      <span className="font-['Consolas',monospace] font-bold text-[12px] tracking-[-0.3px] uppercase">
                        Critical Thinking
                      </span>
                    </div>
                    {expandedSections.has('critical-thinking') ? (
                      <ChevronUp size={16} strokeWidth={1.33} />
                    ) : (
                      <ChevronDown size={16} strokeWidth={1.33} />
                    )}
                  </button>
                  {expandedSections.has('critical-thinking') && (
                    <div className="bg-[#f9fafb] border-t-2 border-black p-3">
                      <div className="border-b border-black border-dashed pb-3 mb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-['Inter',sans-serif] font-bold text-[12px] mb-0.5">
                              Required Course:
                            </div>
                            <div className="font-['Inter',sans-serif] text-[12px]">
                              PHIL 101 - Intro to Logic
                            </div>
                          </div>
                          <div className="border border-black px-1.5 py-0.5 flex items-center gap-1">
                            <span className="font-['Inter',sans-serif] font-bold text-[8px] uppercase">
                              3 Units
                            </span>
                            <Info size={10} strokeWidth={0.83} />
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter',sans-serif] text-[10px] text-[#364153]">
                        Develop reasoning skills through formal and informal logic, argument analysis, and problem-solving.
                      </p>
                    </div>
                  )}
                </div>

                {/* Oral Communication */}
                <div className="bg-white border-2 border-black opacity-60">
                  <button
                    onClick={() => toggleSection('oral-communication')}
                    className="w-full p-3 flex items-center justify-between hover:bg-[#fffbf0]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#10b981]" />
                      <span className="font-['Consolas',monospace] font-bold text-[12px] tracking-[-0.3px] uppercase">
                        Oral Communication
                      </span>
                    </div>
                    {expandedSections.has('oral-communication') ? (
                      <ChevronUp size={16} strokeWidth={1.33} />
                    ) : (
                      <ChevronDown size={16} strokeWidth={1.33} />
                    )}
                  </button>
                  {expandedSections.has('oral-communication') && (
                    <div className="bg-[#f9fafb] border-t-2 border-black p-3">
                      <div className="border-b border-black border-dashed pb-3 mb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-['Inter',sans-serif] font-bold text-[12px] mb-0.5">
                              Completed Course:
                            </div>
                            <div className="font-['Inter',sans-serif] text-[12px]">
                              COMM 101 - Public Speaking
                            </div>
                          </div>
                          <div className="border border-black px-1.5 py-0.5 flex items-center gap-1">
                            <span className="font-['Inter',sans-serif] font-bold text-[8px] uppercase">
                              3 Units
                            </span>
                            <Info size={10} strokeWidth={0.83} />
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter',sans-serif] text-[10px] text-[#364153]">
                        Principles and practices of effective public speaking, including speech preparation and delivery.
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}

            {activeTab === 'major' && (
              <>
                {/* Data Structures */}
                <div className="bg-white border-2 border-black">
                  <button
                    onClick={() => toggleSection('data-structures')}
                    className="w-full p-3 flex items-center justify-between hover:bg-[#fffbf0]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#fef3c7] border-2 border-black" />
                      <span className="font-['Consolas',monospace] font-bold text-[12px] tracking-[-0.3px] uppercase">
                        Data Structures
                      </span>
                    </div>
                    {expandedSections.has('data-structures') ? (
                      <ChevronUp size={16} strokeWidth={1.33} />
                    ) : (
                      <ChevronDown size={16} strokeWidth={1.33} />
                    )}
                  </button>
                  {expandedSections.has('data-structures') && (
                    <div className="bg-[#f9fafb] border-t-2 border-black p-3">
                      <div className="border-b border-black border-dashed pb-3 mb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-['Inter',sans-serif] font-bold text-[12px] mb-0.5">
                              Required Course:
                            </div>
                            <div className="font-['Inter',sans-serif] text-[12px]">
                              CS 201 - Data Structures
                            </div>
                          </div>
                          <div className="border border-black px-1.5 py-0.5 flex items-center gap-1">
                            <span className="font-['Inter',sans-serif] font-bold text-[8px] uppercase">
                              4 Units
                            </span>
                            <Info size={10} strokeWidth={0.83} />
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter',sans-serif] text-[10px] text-[#364153]">
                        Study of fundamental data structures including arrays, linked lists, stacks, queues, trees, and graphs.
                      </p>
                    </div>
                  )}
                </div>

                {/* Algorithms */}
                <div className="bg-white border-2 border-black">
                  <button
                    onClick={() => toggleSection('algorithms')}
                    className="w-full p-3 flex items-center justify-between hover:bg-[#fffbf0]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#fde68a] border-2 border-black" />
                      <span className="font-['Consolas',monospace] font-bold text-[12px] tracking-[-0.3px] uppercase">
                        Algorithms
                      </span>
                    </div>
                    {expandedSections.has('algorithms') ? (
                      <ChevronUp size={16} strokeWidth={1.33} />
                    ) : (
                      <ChevronDown size={16} strokeWidth={1.33} />
                    )}
                  </button>
                  {expandedSections.has('algorithms') && (
                    <div className="bg-[#f9fafb] border-t-2 border-black p-3">
                      <div className="border-b border-black border-dashed pb-3 mb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-['Inter',sans-serif] font-bold text-[12px] mb-0.5">
                              Required Course:
                            </div>
                            <div className="font-['Inter',sans-serif] text-[12px]">
                              CS 301 - Algorithm Analysis
                            </div>
                          </div>
                          <div className="border border-black px-1.5 py-0.5 flex items-center gap-1">
                            <span className="font-['Inter',sans-serif] font-bold text-[8px] uppercase">
                              4 Units
                            </span>
                            <Info size={10} strokeWidth={0.83} />
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter',sans-serif] text-[10px] text-[#364153]">
                        Design and analysis of computer algorithms including sorting, searching, and graph algorithms with complexity analysis.
                      </p>
                    </div>
                  )}
                </div>

                {/* Object-Oriented Programming */}
                <div className="bg-white border-2 border-black opacity-60">
                  <button
                    onClick={() => toggleSection('oop')}
                    className="w-full p-3 flex items-center justify-between hover:bg-[#fffbf0]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#10b981]" />
                      <span className="font-['Consolas',monospace] font-bold text-[12px] tracking-[-0.3px] uppercase">
                        Object-Oriented Programming
                      </span>
                    </div>
                    {expandedSections.has('oop') ? (
                      <ChevronUp size={16} strokeWidth={1.33} />
                    ) : (
                      <ChevronDown size={16} strokeWidth={1.33} />
                    )}
                  </button>
                  {expandedSections.has('oop') && (
                    <div className="bg-[#f9fafb] border-t-2 border-black p-3">
                      <div className="border-b border-black border-dashed pb-3 mb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-['Inter',sans-serif] font-bold text-[12px] mb-0.5">
                              Completed Course:
                            </div>
                            <div className="font-['Inter',sans-serif] text-[12px]">
                              CS 150 - Object-Oriented Programming
                            </div>
                          </div>
                          <div className="border border-black px-1.5 py-0.5 flex items-center gap-1">
                            <span className="font-['Inter',sans-serif] font-bold text-[8px] uppercase">
                              4 Units
                            </span>
                            <Info size={10} strokeWidth={0.83} />
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter',sans-serif] text-[10px] text-[#364153]">
                        Introduction to object-oriented design principles including encapsulation, inheritance, and polymorphism using Java.
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}

            {activeTab === 'electives' && (
              <>
                {/* Web Development */}
                <div className="bg-white border-2 border-black">
                  <button
                    onClick={() => toggleSection('web-dev')}
                    className="w-full p-3 flex items-center justify-between hover:bg-[#fffbf0]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#fef3c7] border-2 border-black" />
                      <span className="font-['Consolas',monospace] font-bold text-[12px] tracking-[-0.3px] uppercase">
                        Web Development
                      </span>
                    </div>
                    {expandedSections.has('web-dev') ? (
                      <ChevronUp size={16} strokeWidth={1.33} />
                    ) : (
                      <ChevronDown size={16} strokeWidth={1.33} />
                    )}
                  </button>
                  {expandedSections.has('web-dev') && (
                    <div className="bg-[#f9fafb] border-t-2 border-black p-3">
                      <div className="border-b border-black border-dashed pb-3 mb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-['Inter',sans-serif] font-bold text-[12px] mb-0.5">
                              Elective Course:
                            </div>
                            <div className="font-['Inter',sans-serif] text-[12px]">
                              CS 340 - Full Stack Web Development
                            </div>
                          </div>
                          <div className="border border-black px-1.5 py-0.5 flex items-center gap-1">
                            <span className="font-['Inter',sans-serif] font-bold text-[8px] uppercase">
                              3 Units
                            </span>
                            <Info size={10} strokeWidth={0.83} />
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter',sans-serif] text-[10px] text-[#364153]">
                        Build modern web applications using front-end frameworks, back-end technologies, and databases.
                      </p>
                    </div>
                  )}
                </div>

                {/* Mobile App Development */}
                <div className="bg-white border-2 border-black">
                  <button
                    onClick={() => toggleSection('mobile-dev')}
                    className="w-full p-3 flex items-center justify-between hover:bg-[#fffbf0]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#fef3c7] border-2 border-black" />
                      <span className="font-['Consolas',monospace] font-bold text-[12px] tracking-[-0.3px] uppercase">
                        Mobile App Development
                      </span>
                    </div>
                    {expandedSections.has('mobile-dev') ? (
                      <ChevronUp size={16} strokeWidth={1.33} />
                    ) : (
                      <ChevronDown size={16} strokeWidth={1.33} />
                    )}
                  </button>
                  {expandedSections.has('mobile-dev') && (
                    <div className="bg-[#f9fafb] border-t-2 border-black p-3">
                      <div className="border-b border-black border-dashed pb-3 mb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-['Inter',sans-serif] font-bold text-[12px] mb-0.5">
                              Elective Course:
                            </div>
                            <div className="font-['Inter',sans-serif] text-[12px]">
                              CS 350 - Mobile Application Development
                            </div>
                          </div>
                          <div className="border border-black px-1.5 py-0.5 flex items-center gap-1">
                            <span className="font-['Inter',sans-serif] font-bold text-[8px] uppercase">
                              3 Units
                            </span>
                            <Info size={10} strokeWidth={0.83} />
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter',sans-serif] text-[10px] text-[#364153]">
                        Design and develop native and cross-platform mobile applications for iOS and Android devices.
                      </p>
                    </div>
                  )}
                </div>

                {/* Artificial Intelligence */}
                <div className="bg-white border-2 border-black">
                  <button
                    onClick={() => toggleSection('ai')}
                    className="w-full p-3 flex items-center justify-between hover:bg-[#fffbf0]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#fef3c7] border-2 border-black" />
                      <span className="font-['Consolas',monospace] font-bold text-[12px] tracking-[-0.3px] uppercase">
                        Artificial Intelligence
                      </span>
                    </div>
                    {expandedSections.has('ai') ? (
                      <ChevronUp size={16} strokeWidth={1.33} />
                    ) : (
                      <ChevronDown size={16} strokeWidth={1.33} />
                    )}
                  </button>
                  {expandedSections.has('ai') && (
                    <div className="bg-[#f9fafb] border-t-2 border-black p-3">
                      <div className="border-b border-black border-dashed pb-3 mb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-['Inter',sans-serif] font-bold text-[12px] mb-0.5">
                              Elective Course:
                            </div>
                            <div className="font-['Inter',sans-serif] text-[12px]">
                              CS 420 - Introduction to AI
                            </div>
                          </div>
                          <div className="border border-black px-1.5 py-0.5 flex items-center gap-1">
                            <span className="font-['Inter',sans-serif] font-bold text-[8px] uppercase">
                              3 Units
                            </span>
                            <Info size={10} strokeWidth={0.83} />
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter',sans-serif] text-[10px] text-[#364153]">
                        Explore machine learning, neural networks, natural language processing, and intelligent agent design.
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Glossary Help */}
          <div className="mt-4 bg-white border-2 border-black border-dashed p-3.5">
            <div className="flex items-start gap-2 mb-2">
              <Info size={14} className="text-[#364153] mt-0.5" strokeWidth={1.17} />
              <p className="font-['Consolas',monospace] font-bold text-[10px] text-[#364153]">
                Unsure about terms like "Prerequisite" or "Units"?
              </p>
            </div>
            <Link
              to="/glossary"
              className="font-['Consolas',monospace] font-black text-[10px] uppercase underline"
            >
              View Glossary
            </Link>
          </div>

          {/* What Should I Do Next */}
          <div className="mt-4 bg-[#dbeafe] border-[3px] border-black shadow-[4px_4px_0px_black] p-5">
            <h3 className="font-['Consolas',monospace] font-black text-[12px] tracking-[1.2px] uppercase mb-3">
              What should I do next?
            </h3>
            <p className="font-['Inter',sans-serif] text-[10px] mb-3">
              Based on your remaining requirements, you should plan your next semester's writing course.
            </p>
            <Link
              to="/course-planner"
              className="block bg-white border-2 border-black py-3.5 text-center font-['Consolas',monospace] font-black text-[12px] uppercase hover:bg-[#f9fafb] relative"
            >
              Plan My Courses
              <span className="absolute right-4 top-1/2 -translate-y-1/2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
