import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { ArrowLeft, Home, Menu, X } from 'lucide-react';

export function HeaderNavigation() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/dashboard');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full">
        {/* Left: Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleGoBack}
            className="p-1 hover:bg-white/50 rounded"
            title="Go Back"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            onClick={handleGoHome}
            className="p-1 hover:bg-white/50 rounded"
            title="Go to Dashboard"
          >
            <Home size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Center: Student Info */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="font-['Consolas',monospace] font-bold text-[12px] text-white">
              JS
            </span>
          </div>
          <span className="font-['Inter',sans-serif] font-bold text-[12px]">
            Jane Student
          </span>
        </div>

        {/* Right: Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-1 hover:bg-white/50 rounded"
          title="Menu"
        >
          <Menu size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-[280px] bg-white border-l-[3px] border-black shadow-[-8px_0px_0px_rgba(0,0,0,0.15)] z-50">
            {/* Menu Header */}
            <div className="bg-[#f3f4f6] border-b-[3px] border-black px-4 py-3 flex items-center justify-between">
              <h3 className="font-['Consolas',monospace] font-black text-[12px] uppercase">
                Menu
              </h3>
              <button
                onClick={closeMenu}
                className="p-1 hover:bg-white/50 rounded"
              >
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="p-4">
              {/* Dashboard */}
              <div className="mb-4">
                <h4 className="font-['Consolas',monospace] font-black text-[10px] uppercase text-[#6a7282] mb-2">
                  Dashboard
                </h4>
                <Link
                  to="/dashboard"
                  onClick={closeMenu}
                  className="block px-3 py-2 hover:bg-[#f3f4f6] border-2 border-transparent hover:border-black font-['Inter',sans-serif] text-[12px]"
                >
                  Home
                </Link>
                <Link
                  to="/notifications"
                  onClick={closeMenu}
                  className="block px-3 py-2 hover:bg-[#f3f4f6] border-2 border-transparent hover:border-black font-['Inter',sans-serif] text-[12px]"
                >
                  Notifications
                </Link>
              </div>

              {/* Academics */}
              <div className="mb-4">
                <h4 className="font-['Consolas',monospace] font-black text-[10px] uppercase text-[#6a7282] mb-2">
                  Academics
                </h4>
                <Link
                  to="/degree-requirements"
                  onClick={closeMenu}
                  className="block px-3 py-2 hover:bg-[#f3f4f6] border-2 border-transparent hover:border-black font-['Inter',sans-serif] text-[12px]"
                >
                  Degree Requirements
                </Link>
                <Link
                  to="/course-planner"
                  onClick={closeMenu}
                  className="block px-3 py-2 hover:bg-[#f3f4f6] border-2 border-transparent hover:border-black font-['Inter',sans-serif] text-[12px]"
                >
                  Course Planner
                </Link>
                <Link
                  to="/semester-builder"
                  onClick={closeMenu}
                  className="block px-3 py-2 hover:bg-[#f3f4f6] border-2 border-transparent hover:border-black font-['Inter',sans-serif] text-[12px]"
                >
                  Semester Builder
                </Link>
                <Link
                  to="/semester-review"
                  onClick={closeMenu}
                  className="block px-3 py-2 hover:bg-[#f3f4f6] border-2 border-transparent hover:border-black font-['Inter',sans-serif] text-[12px]"
                >
                  Review & Register
                </Link>
                <Link
                  to="/advisor-sharing"
                  onClick={closeMenu}
                  className="block px-3 py-2 hover:bg-[#f3f4f6] border-2 border-transparent hover:border-black font-['Inter',sans-serif] text-[12px]"
                >
                  Contact Advisor
                </Link>
                <Link
                  to="/tutoring-services"
                  onClick={closeMenu}
                  className="block px-3 py-2 hover:bg-[#f3f4f6] border-2 border-transparent hover:border-black font-['Inter',sans-serif] text-[12px]"
                >
                  Tutoring Services
                </Link>
              </div>

              {/* Finance */}
              <div className="mb-4">
                <h4 className="font-['Consolas',monospace] font-black text-[10px] uppercase text-[#6a7282] mb-2">
                  Finance
                </h4>
                <Link
                  to="/past-due-alert"
                  onClick={closeMenu}
                  className="block px-3 py-2 hover:bg-[#f3f4f6] border-2 border-transparent hover:border-black font-['Inter',sans-serif] text-[12px]"
                >
                  Balance & Payments
                </Link>
                <Link
                  to="/payment-options"
                  onClick={closeMenu}
                  className="block px-3 py-2 hover:bg-[#f3f4f6] border-2 border-transparent hover:border-black font-['Inter',sans-serif] text-[12px]"
                >
                  Payment Options
                </Link>
                <Link
                  to="/financial-aid-faq"
                  onClick={closeMenu}
                  className="block px-3 py-2 hover:bg-[#f3f4f6] border-2 border-transparent hover:border-black font-['Inter',sans-serif] text-[12px]"
                >
                  Financial Aid
                </Link>
              </div>

              {/* Help */}
              <div className="mb-4">
                <h4 className="font-['Consolas',monospace] font-black text-[10px] uppercase text-[#6a7282] mb-2">
                  Help
                </h4>
                <Link
                  to="/glossary"
                  onClick={closeMenu}
                  className="block px-3 py-2 hover:bg-[#f3f4f6] border-2 border-transparent hover:border-black font-['Inter',sans-serif] text-[12px]"
                >
                  Glossary & Help
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
