import { useState } from "react";
import "./form.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful");
  };

  return (
    <div className="form-container">
      <h2>Sign up to Homeverse</h2>
      <button className="google-btn">Sign up with Google</button>
      <p>or sign up with email</p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account? <a href="/">Sign in</a>
      </p>
    </div>
  );
};

export default Signup;
