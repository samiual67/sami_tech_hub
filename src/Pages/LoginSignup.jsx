import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false); // false = signup, true = login

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form>
          <div className="loginsignup-fields">
            {!isLogin && <input type="text" placeholder="Your Name" />}
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit">{isLogin ? 'Login' : 'Continue'}</button>
          
          {isLogin && (
            <p className="loginsignup-forgot">
              <span>Forgot Password?</span>
            </p>
          )}
        </form>

        <p className="loginsignup-login">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up here' : 'Login here'}
          </span>
        </p>

        {!isLogin && (
          <div className="loginsignup-agree">
            <input type="checkbox" id="agree" />
            <p>By continuing, I agree to the <span>Terms of use & Privacy Policy</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;