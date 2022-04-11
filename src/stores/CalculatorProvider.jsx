import { createContext } from "react";

import CalculatorStore from "./CalculatorStore";

export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => (
  <CalculatorContext.Provider value={new CalculatorStore()}>
    {children}
  </CalculatorContext.Provider>
);

export default CalculatorProvider;
