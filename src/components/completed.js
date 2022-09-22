import React from "react";
import "../styles/complete.scss";
import TickLogo from "../assets/svg/Vector.svg";
import { useForm } from "../context/FormContext";

const Completed = () => {
  const { dispatch } = useForm();
  const updateStep = () => {
    setTimeout(() => {
      dispatch({ type: "setStep", payload: "personal info" });
    }, 1000);
  };
  return (
    <div>
      <div className="completed-container">
        <div className="inner-body">
          <div className="circle-tick">
            <span className="tick-logo">
              <img src={TickLogo} alt="" />
            </span>
          </div>
          <div className="completed-details">
            <h1>Purchase Completed</h1>
            <p>
              Please check your email for details concerning this transaction
            </p>
            <p className="return-home" onClick={() => updateStep()}>
              Return Home
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
