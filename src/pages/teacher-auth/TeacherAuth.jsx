import React, { useState } from 'react';
import './TeacherAuth.css';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const TeacherAuth = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState('login');

  const [teacherRegisterForm, setTeacherRegisterForm] = useState({
    teacherName: '',
    collegeName: '',
    teacherId: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [teacherLoginForm, setTeacherLoginForm] = useState({
    email: '',
    password: '',
  });

  const [forgotPasswordForm, setForgotPasswordForm] = useState({
    email: '',
  });

  const [resetPasswordForm, setResetPasswordForm] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (setter) => (e) => {
    setter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Nav>
       
      </Nav>

      <div className="auth-wrapper">
        
        <div className="auth-card">
             <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
          <h2>
            {mode === 'login' && 'Teacher Login'}
            {mode === 'register' && 'Teacher Registration'}
            {mode === 'forgot' && 'Forgot Password'}
            {mode === 'reset' && 'Reset Password'}
          </h2>

          {/* ---------- LOGIN ---------- */}
          {mode === 'login' && (
            <form>
              <input
                name="email"
                placeholder="Email Address"
                value={teacherLoginForm.email}
                onChange={handleChange(setTeacherLoginForm)}
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                value={teacherLoginForm.password}
                onChange={handleChange(setTeacherLoginForm)}
              />

              <button type="submit">Login</button>

              <p className="link-text" onClick={() => setMode('forgot')}>
                Forgot password?
              </p>

              <p className="switch-text">
                New teacher?
                <span onClick={() => setMode('register')}> Create Account</span>
              </p>
            </form>
          )}

          {/* ---------- REGISTER ---------- */}
          {mode === 'register' && (
            <form>
              <input
                name="teacherName"
                placeholder="Teacher Name"
                value={teacherRegisterForm.teacherName}
                onChange={handleChange(setTeacherRegisterForm)}
              />

              <input
                name="collegeName"
                placeholder="College Name"
                value={teacherRegisterForm.collegeName}
                onChange={handleChange(setTeacherRegisterForm)}
              />

              <input
                name="teacherId"
                placeholder="Teacher ID"
                value={teacherRegisterForm.teacherId}
                onChange={handleChange(setTeacherRegisterForm)}
              />

              <input
                name="email"
                placeholder="Email Address"
                value={teacherRegisterForm.email}
                onChange={handleChange(setTeacherRegisterForm)}
              />

              <input
                name="mobileNumber"
                placeholder="Mobile Number"
                value={teacherRegisterForm.mobileNumber}
                onChange={handleChange(setTeacherRegisterForm)}
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                value={teacherRegisterForm.password}
                onChange={handleChange(setTeacherRegisterForm)}
              />

              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={teacherRegisterForm.confirmPassword}
                onChange={handleChange(setTeacherRegisterForm)}
              />

              <button type="submit">Register</button>

              <p className="switch-text">
                Already registered?
                <span onClick={() => setMode('login')}> Login</span>
              </p>
            </form>
          )}

          {/* ---------- FORGOT PASSWORD ---------- */}
          {mode === 'forgot' && (
            <form>
              <input
                name="email"
                placeholder="Registered Email"
                value={forgotPasswordForm.email}
                onChange={handleChange(setForgotPasswordForm)}
              />

              <button type="submit">Send Reset Link</button>

              <p className="switch-text">
                <span onClick={() => setMode('login')}>Back to Login</span>
              </p>
            </form>
          )}

          {/* ---------- RESET PASSWORD ---------- */}
          {mode === 'reset' && (
            <form>
              <input
                name="newPassword"
                type="password"
                placeholder="New Password"
                value={resetPasswordForm.newPassword}
                onChange={handleChange(setResetPasswordForm)}
              />

              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={resetPasswordForm.confirmPassword}
                onChange={handleChange(setResetPasswordForm)}
              />

              <button type="submit">Reset Password</button>
            </form>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default TeacherAuth;
