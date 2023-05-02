import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div>
      <form onSubmit={handleSignUp} className="login">
        <h2>Sign Up</h2>
        <div className="loginDetails">
          <input
            type="name"
            name="name"
            id=""
            required
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="email"
            id=""
            required
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            id=""
            required
            placeholder="Enter your password"
          />
          <input
            type="password"
            name="confirm"
            id=""
            required
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit">Resister</button>
        <p>
          <span>
            Already have an Account? <Link to="/login">Log in</Link>
          </span>
        </p>
        <p className="text-error">error</p>
        <button type="submit">Continue with Google</button>
      </form>
    </div>
    );
};

export default SignUp;