import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import TeacherAuth from "./pages/teacher-auth/TeacherAuth";
import StudentLogin from "./pages/StudentLogin.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        {/* Teacher Login + Registration + Forgot + Reset */}
        <Route path="/teacher-auth" element={<TeacherAuth />} />

        {/* Student Login (can extend later) */}
        <Route path="/student-login" element={<StudentLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
