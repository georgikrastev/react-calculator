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

	calculate = (number1, number2, operation) => {
		let total;

		if (operation === "+") {
			total = parseFloat(number1) + parseFloat(number2);
		}

		if (operation === "-") {
			total = parseFloat(number1) - parseFloat(number2);
		}

		if (operation === "×") {
			total = parseFloat(number1) * parseFloat(number2);
		}

		if (operation === "÷") {
			total = parseFloat(number1) / parseFloat(number2);
		}

		return total.toFixed(2).replace(/[.]0{2,}|[0]$/g, "");
	};

	handleOperation = buttonValue => {
		const { total, temp, operation } = {
			...this.state
		};

		const newOperation = buttonValue === "=" ? operation : buttonValue;

		if (this.state.temp) {
			const newTotal = !this.state.total
				? this.state.temp
				: this.calculate(total, temp, operation);

			this.setState({
				total: newTotal,
				temp: null,
				operation: newOperation
			});
		} else {
			this.setState({ operation: newOperation });
		}
	};

	handleClick = buttonValue => {
		if (isNaN(buttonValue)) {
			// Reset calculator
			if (buttonValue === "C") {
				this.setState({
					total: null,
					temp: null,
					operation: null
				});

				return;
			}

			// Handle floating point
			if (buttonValue === ".") {
				if (this.state.temp) {
					if (!this.state.temp.includes(".")) {
						this.setState({
							temp: this.state.temp + buttonValue
						});
					}
				} else {
					this.setState({
						temp: "0."
					});
				}

				return;
			}

			// Reverse positive to negative and vice versa
			if (buttonValue === "+/-") {
				const temp = this.state.temp;

				if (temp) {
					const newTemp = parseFloat(temp) > 0 ? `-${temp}` : Math.abs(temp);

					this.setState({
						temp: newTemp
					});
				}

				return;
			}

			// Make percentage
			if (buttonValue === "%") {
				const temp = this.state.temp;

				if (temp) {
					this.setState({
						temp: (temp / 100).toFixed(2).replace(/[.]0{2,}|[0]$/g, "")
					});
				}

				return;
			}

			// Handle addition/substraction/multiplication/division
			this.handleOperation(buttonValue);
		} else {
			// Set number on display
			const newTemp = this.state.temp ? this.state.temp + buttonValue : buttonValue;

			this.setState({
				temp: newTemp
			});
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
