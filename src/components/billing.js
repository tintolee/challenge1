import React from "react";
import "../styles/billing.scss";

import { Formik, Form } from "formik";
import {
  formatExpiryDate,
  onlyAlphabets,
  onlyDigits,
  spaceCardNumber,
  yupBillingValidation,
} from "../utils/utils";
import { useForm } from "../context/FormContext";
import { InputComponent, SelectComponent, Button } from "./inputComponents";

const Billing = () => {
  const cardTypes = ["Verve", "MasterCard", "Visa"];
  const { dispatch } = useForm();

  return (
    <div>
      <div className="form-container">
        <Formik
          validateOnMount
          initialValues={{
            cardName: "",
            cardType: "Verve",
            cardDetails: "",
            cardExpiryDate: "",
            cardCVV: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting();
              dispatch({ type: "setStep", payload: "confirm payment" });
            }, 1000);
          }}
          validationSchema={yupBillingValidation}
        >
          {({ isValid }) => {
            return (
              <Form>
                <InputComponent
                  placeholder="Card Name"
                  type="text"
                  name="cardName"
                  label="Name on Card"
                  asterisk="*"
                  id="cardHolderName"
                  onInput={(e) => onlyAlphabets(e)}
                />

                <SelectComponent
                  className="select-card"
                  name="cardType"
                  label="Card Type"
                  asterisk="*"
                  placeholder="Card Type"
                >
                  <option disabled>Card Type</option>
                  {cardTypes.map((lga, id) => {
                    return <option key={id}>{lga}</option>;
                  })}
                </SelectComponent>

                <div className="card-input-flex">
                  <InputComponent
                    label="Card details"
                    asterisk="*"
                    maxLength="34"
                    name="cardDetails"
                    type="text"
                    id="cardNum"
                    onInput={(e) => {
                      onlyDigits(e);
                      spaceCardNumber(e);
                    }}
                  />
                  <InputComponent
                    placeholder="MM/YY"
                    type="text"
                    name="cardExpiryDate"
                    label="Expiry date"
                    asterisk="*"
                    maxLength="5"
                    onKeyUp={(e) => formatExpiryDate(e)}
                  />
                  <InputComponent
                    placeholder="CVV"
                    type="text"
                    maxLength="3"
                    name="cardCVV"
                    label="CVV"
                    asterisk="*"
                    onInput={(e) => onlyDigits(e)}
                    className="cvv-input"
                  />
                </div>
                <div className="btn-flex">
                  <Button
                    type="submit"
                    className={!isValid ? "disable-btn btn" : "next-btn btn"}
                    disabled={!isValid}
                  >
                    <span className="btn-value">Next</span>
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
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Billing;
