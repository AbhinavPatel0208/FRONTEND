import "./FrameSignIn.css";

const FrameSignIn = () => {
  return (
    <div className="frame-sign-in">
      <div className="frame-white-button-google">
        <h1 className="base2">BASE</h1>
      </div>
      <div className="left-side-vector">
        <img
          className="ellipse-shape-icon"
          loading="eager"
          alt=""
          src="/vector1@2x.png"
        />
        <img
          className="vectors-align-icon"
          loading="eager"
          alt=""
          src="/vector-1@2x.png"
        />
        <div className="carbonlogo-linkedin">
          <img
            className="discord-logo-icon"
            loading="eager"
            alt=""
            src="/vector-2.svg"
          />
        </div>
        <div className="carbonlogo-discord">
          <img
            className="email-address-input"
            loading="eager"
            alt=""
            src="/vector-3.svg"
          />
          <img className="input-field-rectangle" alt="" src="/vector-4.svg" />
        </div>
      </div>
      <div className="sign-in-button">
        <img className="left-side-icon" alt="" src="/left-side@2x.png" />
        <div className="white-button-google" />
        <img
          className="white-button-apple"
          loading="eager"
          alt=""
          src="/vector-7.svg"
        />
      </div>
    </div>
  );
};

export default FrameSignIn;
