import "./scss/app.scss";
import Themes from "./components/Themes.jsx";
import Screen from "./components/Screen.jsx";
import Calculator from "./components/Calculator";
import CalculatorProvider from "./stores/CalculatorProvider";

function App() {
  return (
    <CalculatorProvider>
      <div className="appWrapper">
        <div className="app">
          <Themes />
          <Screen />
          <Calculator />
        </div>
      </div>
    </CalculatorProvider>
  );
}

export default App;
