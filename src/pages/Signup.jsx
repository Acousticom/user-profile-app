import React from "react";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center gap-3">
          {/* <img src={image} alt="" className="w-80 sDevices:hidden" /> */}
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
