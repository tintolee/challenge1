import { useContext, useReducer, createContext } from "react";
import { formReducer } from "./FormReducer";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, {
    currentStep: sessionStorage.getItem("current-step")
      ? sessionStorage.getItem("current-step")
      : "personal info",
    enteredData: sessionStorage.getItem("entered-data")
      ? sessionStorage.getItem("entered-data")
      : {},
  });

  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used within a FormContext");
  }
  return context;
}

export { FormProvider, useForm };
