import React from "react";
import { useForm } from "../context/FormContext";
import { Button } from "./inputComponents";
import "../styles/confirmPayment.scss";

const ConfirmPayment = () => {
  const { dispatch } = useForm();

  const updateStep = () => {
    setTimeout(() => {
      dispatch({ type: "setStep", payload: "completed" });
    }, 1000);
  };

  return (
    <div className="confirm-card-section">
      <div className="confirm-card">
        <div className="confirm-card-heading">
          <div className="confirm-card-heading-inner">
            <span className="heading-text">Item Name</span>
            <span className="heading-text"> &#8358; Price</span>
          </div>
        </div>
        <div className="confirm-card-details-container">
          <div className="confirm-card-details ">
            <span className="font-color normal-font">
              Data science and usability
            </span>
            <span className="font-color bold-font"> 50,000.00 </span>
          </div>
          <div className="confirm-card-details ">
            <span className="font-color normal-font">Shipping</span>
            <span className="font-color bold-font"> 0.00 </span>
          </div>
        </div>
        <div className="hor-line"></div>
        <div className="total-box-outer">
          <div className="total-box-inner">
            <span>Total</span>
            <span className="font-color bold-font">50,000.00</span>
          </div>
        </div>
      </div>

      <div className="btn-flex form-container">
        <Button
          type="submit"
          className="next-btn btn"
          onClick={() => updateStep()}
        >
          <span className="btn-value">Pay</span>
        </Button>
        <Button
          className="cancel-btn btn"
          type="button"
          onClick={() =>
            dispatch({
              type: "clearSession",
              payload: "personal info",
            })
          }
        >
          <span className="btn-value">Cancel Payment</span>
        </Button>
      </div>
    </div>
  );
};

export default ConfirmPayment;
