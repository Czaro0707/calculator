import React from "react";

import { observer } from "mobx-react";
import { useContext } from "react";

import { CalculatorContext } from "../stores/CalculatorProvider";

const Themes = () => {
  const { changeTheme } = useContext(CalculatorContext);

  return (
    <div className="wrapper">
      <div className="calc">calc</div>
      <section className="themes">
        <div className="themes__title">theme</div>
        <div className="themes__options">
          <div className="themes__options__number">
            <div className="themes__options__number__first">1</div>
            <div className="themes__options__number__second">2</div>
            <div className="themes__options__number__third">3</div>
          </div>
          <div
            className="themes__options__button"
            onClick={(e) => {
              changeTheme(e);
            }}
          >
            <div className="themes__options__button__circle"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default observer(Themes);
