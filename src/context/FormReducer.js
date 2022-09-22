export function formReducer(state, { type, payload }) {
  switch (type) {
    case "setStep": {
      sessionStorage.setItem("current-step", payload);
      return {
        ...state,
        currentStep: payload,
      };
    }
    case "setEnteredData": {
      sessionStorage.setItem("entered-data", payload);

      return {
        ...state,
        enteredData: payload,
      };
    }
    case "clearSession": {
      sessionStorage.clear();

      return {
        ...state,
        currentStep: payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
