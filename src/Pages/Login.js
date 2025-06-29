import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="transparent-container">
      <div className="glass-card">
        <div className="brand-header">
          <h1 className="brand-name">eezix®</h1>
          <p className="welcome-text">Welcome to Eezix</p>
        </div>

        <div className="terms-notice">
          <p>
            By signing in, you agree to our Terms of Use and to receive eezix emails & updates and 
            acknowledge that you read our Privacy Policy. This site is protected by reCAPTCHA 
            Enterprise and the Google Privacy Policy And Terms of Use apply.
          </p>
        </div>

        <div className="divider"></div>

        <h2 className="section-title">Sign In</h2>
        <p className="section-subtitle">New to Eezix? <a href="/Signup" className="accent-link">Create an account.</a></p>

        <form onSubmit={handleSubmit} className="transparent-form">
          <div className="input-group">
            <label className="input-label">Email address</label>
            <input
              type="email"
              className="glass-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              className="glass-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label className="option-checkbox">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="/forgot-password" className="accent-link">Forgot password?</a>
          </div>

          <button type="submit" className="primary-btn">Login</button>
        </form>

        <div className="saved-account">
          <p>Sign in as: <span className="saved-email">aka jissmonpoulosemo@gmail.com</span></p>
        </div>

        <div className="social-divider">
          <span className="divider-text">or continue with</span>
        </div>

        <button className="social-btn facebook-btn">
          <svg className="social-icon" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
          </svg>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;