import { observer } from "mobx-react";
import { useContext } from "react";

import { CalculatorContext } from "../stores/CalculatorProvider";

const Screen = () => {
  const store = useContext(CalculatorContext);

  const valueOnScreen = store.data.screen.valueOnScreen;

  return (
    <div className="screen">
      <div className="screen__number">{valueOnScreen}</div>
    </div>
  );
};

export default observer(Screen);
