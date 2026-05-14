import { HashRouter, Routes, Route, Navigate } from "react-router";
import Dashboard from "./pages/Dashboard";
import DegreeRequirements from "./pages/DegreeRequirements";
import CoursePlanner from "./pages/CoursePlanner";
import SemesterBuilder from "./pages/SemesterBuilder";
import Glossary from "./pages/Glossary";
import PastDueAlert from "./pages/PastDueAlert";
import ErrorRecovery from "./pages/ErrorRecovery";
import AdvisorSharing from "./pages/AdvisorSharing";
import PaymentOptions from "./pages/PaymentOptions";
import FinancialAidFAQ from "./pages/FinancialAidFAQ";
import ChooseDifferentCourse from "./pages/ChooseDifferentCourse";
import Notifications from "./pages/Notifications";
import SemesterReview from "./pages/SemesterReview";
import TutoringServices from "./pages/TutoringServices";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#f3f3f3]">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/degree-requirements" element={<DegreeRequirements />} />
          <Route path="/course-planner" element={<CoursePlanner />} />
          <Route path="/semester-builder" element={<SemesterBuilder />} />
          <Route path="/semester-review" element={<SemesterReview />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/past-due-alert" element={<PastDueAlert />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/financial-aid-faq" element={<FinancialAidFAQ />} />
          <Route path="/error-recovery" element={<ErrorRecovery />} />
          <Route
            path="/choose-different-course"
            element={<ChooseDifferentCourse />}
          />
          <Route path="/advisor-sharing" element={<AdvisorSharing />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/tutoring-services" element={<TutoringServices />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
