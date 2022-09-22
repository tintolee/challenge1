import React from "react";
import { useForm } from "../context/FormContext";

export const steps = ["personal info", "billing info", "confirm payment"];
const Heading = () => {
  const { state } = useForm();

  return (
    <div>
      <div className="top-header">
        <p>Complete your Purchase</p>
      </div>
      <div className="stages-info">
        {steps.map((step, id) => {
          return (
            <span
              className={state.currentStep === step ? "current-stage" : null}
              key={id}
            >
              {step}
              {state.currentStep === step && (
                <div className="horizontal-stage-indicator"></div>
              )}
            </span>
          );
        })}
      </div>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default Heading;
