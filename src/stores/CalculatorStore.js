import { observable, action, makeObservable } from "mobx";

export default class CalculatorStore {
  data = {
    screen: {
      valueOnScreen: 0,
      valueSummary: 0,
      operationPressed: null,
      valuePressed: null,
      changeScreen: false,
    },
    themes: {
      value: 1,
    },
  };

  constructor() {
    makeObservable(this, {
      data: observable,
      changeTheme: action,
      mathOperations: action,
      makeVisualScreen: action,
    });
  }

  makeVisualScreen = (buttonPressed) => {
    const buttonMakeNumber = Number(buttonPressed);

    if (this.data.screen.valueOnScreen.length > 12) return;
    if (
      this.data.screen.valueOnScreen === 0 &&
      Number.isInteger(buttonMakeNumber) &&
      buttonMakeNumber !== 0
    ) {
      this.data.screen.valueOnScreen = buttonPressed;
    } else if (
      (this.data.screen.valueOnScreen !== 0 &&
        Number.isInteger(buttonMakeNumber)) ||
      buttonPressed === "."
    ) {
      this.data.screen.valueOnScreen += buttonPressed;
    }
  };

  changeTheme = (e) => {
    if (e.target.lastElementChild === null) {
      e.target.classList.remove(`button${this.data.themes.value}`);

      this.data.themes.value++;
      if (this.data.themes.value === 4) {
        this.data.themes.value = 1;
      }

      e.target.classList.add(`button${this.data.themes.value}`);
    } else {
      e.target.lastElementChild.classList.remove(
        `button${this.data.themes.value}`
      );

      this.data.themes.value++;
      if (this.data.themes.value === 4) {
        this.data.themes.value = 1;
      }

      e.target.lastElementChild.classList.add(
        `button${this.data.themes.value}`
      );
    }

    if (this.data.themes.value === 2) {
      document.documentElement.style.setProperty(
        "--wrapper-background",
        "hsl(0, 0%, 90%)"
      );
      document.documentElement.style.setProperty(
        "--background-normal-button",
        "hsl(45, 7%, 89%)"
      );
      document.documentElement.style.setProperty(
        "--text-normal-button",
        "hsl(60, 10%, 19%)"
      );
      document.documentElement.style.setProperty(
        "--box-shadow-normal-button",
        "hsl(35, 11%, 61%)"
      );
      document.documentElement.style.setProperty(
        "--text-normal-hover-button",
        "#fff"
      );
      document.documentElement.style.setProperty(
        "--background-equal-button",
        "hsl(25, 98%, 40%)"
      );
      document.documentElement.style.setProperty("--text-equal-button", "#fff");
      document.documentElement.style.setProperty(
        "--box-shadow-equal-button",
        "hsl(25, 99%, 27%)"
      );
      document.documentElement.style.setProperty(
        "--background-del-reset-button",
        "hsl(185, 42%, 37%)"
      );
      document.documentElement.style.setProperty(
        "--text-del-reset-button",
        "#fff"
      );
      document.documentElement.style.setProperty(
        "--box-shadow-del-reset-button",
        "hsl(185, 58%, 25%)"
      );
      document.documentElement.style.setProperty(
        "--screen-background",
        "hsl(0, 0%, 93%)"
      );
      document.documentElement.style.setProperty(
        "--screen-toggle-background",
        "hsl(0, 5%, 81%)"
      );
      document.documentElement.style.setProperty(
        "--text-screen",
        "hsl(60, 10%, 19%)"
      );
    } else if (this.data.themes.value === 3) {
      document.documentElement.style.setProperty(
        "--wrapper-background",
        "hsl(268, 75%, 9%)"
      );
      document.documentElement.style.setProperty(
        "--background-normal-button",
        "hsl(268, 47%, 21%)"
      );
      document.documentElement.style.setProperty(
        "--text-normal-button",
        "hsl(52, 100%, 62%)"
      );
      document.documentElement.style.setProperty(
        "--box-shadow-normal-button",
        "hsl(290, 70%, 36%)"
      );
      document.documentElement.style.setProperty(
        "--text-normal-hover-button",
        "#f0f"
      );
      document.documentElement.style.setProperty(
        "--background-equal-button",
        "hsl(176, 100%, 44%)"
      );
      document.documentElement.style.setProperty(
        "--text-equal-button",
        "hsl(198, 20%, 13%)"
      );
      document.documentElement.style.setProperty(
        "--box-shadow-equal-button",
        "hsl(177, 92%, 70%)"
      );
      document.documentElement.style.setProperty(
        "--background-del-reset-button",
        "hsl(281, 89%, 26%)"
      );
      document.documentElement.style.setProperty(
        "--text-del-reset-button",
        "hsl(52, 100%, 62%)"
      );
      document.documentElement.style.setProperty(
        "--box-shadow-del-reset-button",
        "hsl(290, 70%, 36%)"
      );
      document.documentElement.style.setProperty(
        "--screen-background",
        "hsl(268, 71%, 12%)"
      );
      document.documentElement.style.setProperty(
        "--screen-toggle-background",
        "hsl(268, 71%, 12%)"
      );
      document.documentElement.style.setProperty(
        "--text-screen",
        "hsl(52, 100%, 62%)"
      );
    } else if (this.data.themes.value === 1) {
      document.documentElement.style.setProperty(
        "--wrapper-background",
        "hsl(222, 26%, 31%)"
      );
      document.documentElement.style.setProperty(
        "--background-normal-button",
        "hsl(30, 25%, 89%)"
      );
      document.documentElement.style.setProperty(
        "--text-normal-button",
        "hsl(221, 14%, 31%)"
      );
      document.documentElement.style.setProperty(
        "--box-shadow-normal-button",
        "hsl(28, 16%, 65%)"
      );
      document.documentElement.style.setProperty(
        "--text-normal-hover-button",
        "rgb(221, 197, 166)"
      );
      document.documentElement.style.setProperty(
        "--background-equal-button",
        "hsl(6, 63%, 50%)"
      );
      document.documentElement.style.setProperty("--text-equal-button", "#fff");
      document.documentElement.style.setProperty(
        "--box-shadow-equal-button",
        "hsl(6, 70%, 34%)"
      );
      document.documentElement.style.setProperty(
        "--background-del-reset-button",
        "hsl(225, 21%, 49%)"
      );
      document.documentElement.style.setProperty(
        "--text-del-reset-button",
        "#fff"
      );
      document.documentElement.style.setProperty(
        "--box-shadow-del-reset-button",
        "hsl(224, 28%, 35%)"
      );
      document.documentElement.style.setProperty(
        "--screen-background",
        "hsl(224, 36%, 15%)"
      );
      document.documentElement.style.setProperty(
        "--screen-toggle-background",
        "hsl(223, 31%, 20%)"
      );
      document.documentElement.style.setProperty("--text-screen", "#fff");
    }
  };

  mathOperations = (valuePressed) => {
    if (this.data.screen.changeScreen) {
      this.data.screen.valueOnScreen = 0;
      this.data.screen.changeScreen = false;
    }

    switch (valuePressed) {
      case "+":
        this.data.screen.operationPressed = "+";
        this.data.screen.valueSummary = Number(this.data.screen.valueOnScreen);
        this.data.screen.valuePressed = null;
        this.data.screen.changeScreen = true;
        break;
      case "-":
        this.data.screen.operationPressed = "-";
        this.data.screen.valueSummary = Number(this.data.screen.valueOnScreen);
        this.data.screen.valuePressed = null;
        this.data.screen.changeScreen = true;
        break;
      case "x":
        this.data.screen.operationPressed = "*";
        this.data.screen.valueSummary = Number(this.data.screen.valueOnScreen);
        this.data.screen.valuePressed = null;
        this.data.screen.changeScreen = true;
        break;
      case "/":
        this.data.screen.operationPressed = "/";
        this.data.screen.valueSummary = Number(this.data.screen.valueOnScreen);
        this.data.screen.valuePressed = null;
        this.data.screen.changeScreen = true;
        break;
      case "=":
        switch (this.data.screen.operationPressed) {
          case "+":
            this.data.screen.valueSummary =
              this.data.screen.valueSummary +
              Number(this.data.screen.valueOnScreen);
            break;
          case "-":
            this.data.screen.valueSummary =
              this.data.screen.valueSummary -
              Number(this.data.screen.valueOnScreen);
            break;
          case "*":
            this.data.screen.valueSummary =
              this.data.screen.valueSummary *
              Number(this.data.screen.valueOnScreen);
            break;
          case "/":
            this.data.screen.valueSummary =
              this.data.screen.valueSummary /
              Number(this.data.screen.valueOnScreen);
            break;
          default:
            break;
        }

        this.data.screen.valueOnScreen = this.data.screen.valueSummary;
        break;
      case "RESET":
        this.data.screen.valueOnScreen = 0;
        this.data.screen.valueSummary = 0;
        break;
      case "DEL":
        let newString = this.data.screen.valueOnScreen.toString();

        newString = newString.substring(0, newString.length - 1);

        this.data.screen.valueOnScreen = newString;

        if (this.data.screen.valueOnScreen.length === 0) {
          this.data.screen.valueOnScreen = 0;
        }
        break;

      default:
        this.data.screen.valuePressed = valuePressed;
        break;
    }
  };
}
