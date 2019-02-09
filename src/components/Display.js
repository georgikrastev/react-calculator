import React, { Component } from "react";

class Display extends Component {
	render() {
		return <div className="calculator__display">{this.props.calculatorValue}</div>;
	}
}

export default Display;
