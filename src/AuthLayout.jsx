import "./AuthLayout.css";

// eslint-disable-next-line react/prop-types
const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="background-image"></div>
      <div className="auth-content">{children}</div>
    </div>
  );
};

export default AuthLayout;
