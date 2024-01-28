import FrameSignIn from "../components/FrameSignIn";
import FrameRegistration from "../components/FrameRegistration";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="right-side" />
      <FrameSignIn />
      <img className="subtract-icon" alt="" />
      <FrameRegistration />
    </div>
  );
};

export default SignIn;
