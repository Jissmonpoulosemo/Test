import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="signup-container">
      <div className="left-panel">
        <h1>Welcome to <span>Eezix</span></h1>
      </div>
      <div className="right-panel">
        <h2>Sign Up</h2>
        <p className="login-text">Already have an account? <a href="/Login">Login</a></p>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>👁️</span>
          </div>
          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>👁️</span>
          </div>
          <button type="submit">Sign Up ➜</button>
        </form>

        <div className="or-divider">OR</div>
        <div className="social-signin">
          <button className="google">G</button>
          <button className="facebook">f</button>
        </div>
        <p className="terms">
          By signing up, you agree to our <a href="/">Terms</a> and <a href="/">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default Signup;
