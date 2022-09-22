import React from "react";
import Billing from "./components/billing";
import Completed from "./components/completed";
import ConfirmPayment from "./components/confirmPayment";
import Heading, { steps } from "./components/heading";
import Profile from "./components/profile";
import { useForm } from "./context/FormContext";

const MainComponent = () => {
  const { state } = useForm();
  const { currentStep } = state;
  return (
    <div className="component-container">
      <div className="component-inner">
        {currentStep !== "completed" && <Heading />}
        <br />
        {currentStep === steps[0] && <Profile />}
        {currentStep === steps[1] && <Billing />}
        {currentStep === steps[2] && <ConfirmPayment />}
        {currentStep === "completed" && <Completed />}
      </div>
    </div>
  );
};

export default MainComponent;
