import { FormProvider } from "./context/FormContext";
import MainComponent from "./main";

function App() {
  return (
    <div className="App">
      <FormProvider>
        <MainComponent />
      </FormProvider>
    </div>
  );
}

export default App;
