import React, { Component } from "react";
import "./Calculator.css";
import Display from "./Display";
import Keyboard from "./Keyboard";

class Calculator extends Component {
	state = {
		total: null,
		temp: null,
		operation: null
	};

	handleClick = buttonValue => {
		if (isNaN(buttonValue) && buttonValue !== ",") {
		} else {
		}
	};

	render() {
		return (
			<div className="calculator">
				<Display calculatorValue={this.state.temp || this.state.total || 0} />

				<Keyboard handleClick={this.handleClick} />
			</div>
		);
	}
}

export default Calculator;
