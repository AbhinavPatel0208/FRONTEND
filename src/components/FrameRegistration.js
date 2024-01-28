import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameRegistration.css";

const FrameRegistration = () => {
  const navigate = useNavigate();

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  return (
    <form className="frame-registration">
      <div className="sign-in-text">
        <h1 className="sign-in1">Sign In</h1>
        <div className="sign-in-to">Sign in to your account</div>
      </div>
      <div className="forgot-password">
        <button className="white-button-google1">
          <div className="white2">
            <div className="button8" />
          </div>
          <img className="google-icon-1" alt="" src="/googleicon-1@2x.png" />
          <div className="sign-in-with">Sign in with Google</div>
        </button>
        <div className="white-button-google2">
          <div className="white3">
            <div className="button9" />
          </div>
          <img className="apple-1-icon" alt="" src="/apple-1@2x.png" />
          <input
            className="sign-in-with1"
            placeholder="Sign in with Apple"
            type="text"
          />
        </div>
      </div>
      <div className="second-frame">
        <div className="card">
          <div className="card1" />
        </div>
        <div className="password-input">
          <div className="email-address">Email address</div>
          <div className="primary-button">
            <div className="input-field">
              <div className="input-field1" />
            </div>
            <input
              className="johndoegmailcom"
              placeholder="johndoe@gmail.com"
              type="text"
            />
          </div>
        </div>
        <div className="first-card">
          <div className="password">Password</div>
          <div className="password-field">
            <div className="input" />
            <input className="input1" placeholder="••••••••" type="text" />
            <div className="primary-button-component" />
          </div>
        </div>
        <div className="sign-in-button1">
          <div className="forgot-password1">Forgot password?</div>
        </div>
        <button className="forgotpasswordbtn">
          <div className="button-primary">
            <div className="button-primary1" onClick={onButtonPrimaryClick} />
          </div>
          <b className="sign-in2">Sign In</b>
        </button>
      </div>
      <div className="passwordinputfield">
        <div className="dont-have-an-container">
          <span className="dont-have-an">{`Don’t have an account? `}</span>
          <span className="register-here">Register here</span>
        </div>
      </div>
    </form>
  );
};

export default FrameRegistration;
