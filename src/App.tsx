import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import SnackBar from "./components/snackbars";
import PageNotFound from "./pages/404";
import Home from "./pages/home";
import NonAuthWrapper from "./route_protectors/non-auth-wrapper";
import AboutUs from "./pages/about-us";
import Team from "./pages/the-team";
import ContactUs from "./pages/contact-us";
import UserGuide from "./pages/user-guide";
import Login from "./pages/(onboarding)/login";
import LecturersRoutes from "./route_protectors/lecturer-routes";
import AdminRoutes from "./route_protectors/admin-routes";
import StudentRoutes from "./route_protectors/students-routes";
import LecturerDashboard from "./pages/(lecturer)/lecturer-dashboard";
import AttendanceAnalytics from "./pages/(lecturer)/attendance-analytics";
import AttendanceHistory from "./pages/(lecturer)/attendance-history";
import CourseRegistration from "./pages/(lecturer)/register-course";
import AdminDashboard from "./pages/(admin)/admin-dashboard";
import AddLecturer from "./pages/(admin)/add-lecturer";
import HardwareSettings from "./pages/(admin)/hardware-settings";
import StudentRegistration from "./pages/(admin)/register-student";
import StudentDashboard from "./pages/(student)/student-dashboard";
import StudentAttendanceHistory from "./pages/(student)/attendance-history";
import RequireAuth from "./route_protectors/require-auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NonAuthWrapper />}>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-our-system" element={<AboutUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/user-guide" element={<UserGuide />} />
          </Route>
          <Route path="/login" element={<Login />} />

          <Route element={<RequireAuth />}>
            <Route element={<LecturersRoutes />}>
              <Route
                path="/lecturer-dashboard"
                element={<LecturerDashboard />}
              />
              <Route
                path="/lecturer-analytics"
                element={<AttendanceAnalytics />}
              />
              <Route
                path="/lecturer-attendance-history"
                element={<AttendanceHistory />}
              />
              <Route
                path="/lecturer-course-registration"
                element={<CourseRegistration />}
              />
            </Route>
            <Route element={<AdminRoutes />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin-add-lecturer" element={<AddLecturer />} />
              <Route
                path="/admin-hardware-settings"
                element={<HardwareSettings />}
              />
              <Route
                path="/admin-student-registration"
                element={<StudentRegistration />}
              />
            </Route>
            <Route element={<StudentRoutes />}>
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route
                path="/student-attendance-history"
                element={<StudentAttendanceHistory />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {<SnackBar />}
    </>
  );
}

export default App;
