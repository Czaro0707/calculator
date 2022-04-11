import { observer } from "mobx-react";
import { useContext } from "react";

import { CalculatorContext } from "../stores/CalculatorProvider";

const Button = ({ button }) => {
  const { makeVisualScreen, mathOperations } = useContext(CalculatorContext);
  let className = null;

  if (button === "DEL") {
    className = "button--del";
  } else if (button === "RESET") {
    className = "button--reset";
  } else if (button === "=") {
    className = "button--equal";
  } else {
    className = "button--normal";
  }

  className += " button";

  return (
    <div
      className={className}
      onClick={() => {
        mathOperations(button);
        makeVisualScreen(button);
      }}
    >
      {button}
    </div>
  );
};

export default observer(Button);
