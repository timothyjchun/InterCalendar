import "../styles/pages/LoginPage.scss";

const LoginPage = () => {
  return (
    <>
      <div className="login-scaffold">
        <h1>Log In</h1>

        <p className="email-title">Email Address</p>
        <form action="">
          <div className="email-form">
            <input type="text" name="" id="" />
            <div className="email input-line" />
          </div>

          <p className="password-title">Password</p>
          <div className="password-form">
            <input type="text" name="" id="" />
            <div className="password input-line" />
          </div>

          <button className="submit-button">Log In</button>
        </form>
      </div>

      <div className="background">
        <svg
          className="circle one"
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="39" cy="39" r="39" fill="#F8F6E3" />
        </svg>
        <svg
          className="circle two"
          width="155"
          height="155"
          viewBox="0 0 155 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="77.5" cy="77.5" r="77.5" fill="#F8F6E3" />
        </svg>
      </div>
    </>
  );
};

export default LoginPage;
