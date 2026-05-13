import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Menu, ArrowLeft, Home, ArrowRight } from 'lucide-react';

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we can go forward by attempting to access navigation state
    const checkForwardNavigation = () => {
      // Unfortunately, there's no direct way to check if forward navigation is available
      // We'll keep track of this through session storage
      const forwardAvailable = sessionStorage.getItem('canGoForward') === 'true';
      setCanGoForward(forwardAvailable);
    };

    checkForwardNavigation();

    // Listen for navigation changes
    const handlePopState = () => {
      checkForwardNavigation();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleGoBack = () => {
    sessionStorage.setItem('canGoForward', 'true');
    navigate(-1);
    setIsOpen(false);
  };

  const handleGoForward = () => {
    if (canGoForward) {
      sessionStorage.setItem('canGoForward', 'false');
      navigate(1);
      setIsOpen(false);
    }
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-0"
      >
        <Menu size={24} strokeWidth={2.5} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Popup */}
          <div className="absolute left-0 top-12 bg-white border-[3px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.15)] z-50 min-w-[200px]">
            <button
              onClick={handleGoBack}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#f3f4f6] border-b-2 border-black"
            >
              <ArrowLeft size={18} strokeWidth={2} />
              <span className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
                Go Back
              </span>
            </button>

            <button
              onClick={handleGoToDashboard}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#f3f4f6] border-b-2 border-black"
            >
              <Home size={18} strokeWidth={2} />
              <span className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
                Go to Dashboard
              </span>
            </button>

            <button
              onClick={handleGoForward}
              disabled={!canGoForward}
              className={`w-full px-4 py-3 flex items-center gap-3 ${
                canGoForward ? 'hover:bg-[#f3f4f6]' : 'opacity-40 cursor-not-allowed'
              }`}
            >
              <ArrowRight size={18} strokeWidth={2} />
              <span className="font-['Consolas',monospace] font-bold text-[12px] uppercase">
                Go Forward
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
