import React, { useState, useEffect } from "react";
import "../styles/profile.scss";
import { InputComponent, SelectComponent, Button } from "./inputComponents";
import { statesLGA } from "../utils/statesLGA";
import { Formik, Form } from "formik";
import { yupProfileValidation } from "../utils/utils";
import { useForm } from "../context/FormContext";

const Profile = () => {
  const [selectedState, setSelectedState] = useState("");
  const { dispatch } = useForm();
  useEffect(() => {
    dispatch({ type: "setStep", payload: "personal info" });
  }, [dispatch]);
  return (
    <>
      <div className="form-container">
        <Formik
          validateOnMount
          initialValues={{
            state: "",
            name: "",
            email: "",
            address1: "",
            address2: "",
            lga: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting();
              dispatch({ type: "setStep", payload: "billing info" });
              dispatch({ type: "setEnteredData", payload: values });
            }, 1000);
          }}
          validationSchema={yupProfileValidation}
        >
          {({ setFieldValue, isValid }) => {
            return (
              <Form>
                <InputComponent
                  label="Name"
                  placeholder="Opara Linus Ahmed"
                  type="text"
                  name="name"
                 
                  
                ></InputComponent>
                <InputComponent
                  label="Email Address"
                  placeholder="OparaLinusAhmed@devmail.com"
                  type="email"
                  name="email"
                  asterisk="*"
                >
                  <span className="email-redirect">
                    The purchase reciept would be sent to this address
                  </span>
                </InputComponent>
                <InputComponent
                  label="Address 1"
                  name="address1"
                  placeholder="Please input your primary address"
                  type="text"
                 
                />
                <InputComponent
                  label="Address 2"
                  name="address2"
                  placeholder="Please input your secondary address"
                  type="text"
                />
                <div className="select-input-flex">
                  <SelectComponent
                    label="Local Government"
                    className="lga"
                    name="lga"
                 
                  >
                    {selectedState.length > 0 &&
                      statesLGA[selectedState].map((lga, id) => {
                        return <option key={id}>{lga}</option>;
                      })}
                  </SelectComponent>

                  <SelectComponent
                    label="State"
                    name="state"
                    className="state-input"
                    value={selectedState}
                    onChange={(e) => {
                      setFieldValue("state", e.target.value);
                      setSelectedState(e.target.value);
                    }}
                    asterisk="*"
                  >
                    <option disabled>Plase select your state</option>
                    {Object.keys(statesLGA).map((state) => {
                      return <option key={state}>{state}</option>;
                    })}
                  </SelectComponent>
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
    </>
  );
};

export default Profile;
