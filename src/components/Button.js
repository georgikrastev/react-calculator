import React, { Component } from "react";

class Button extends Component {
	clickHandler = () => {
		this.props.handleClick(this.props.name);
	};

	render() {
		return (
			<button className={this.props.type} onClick={this.clickHandler}>
				{this.props.name}
			</button>
		);
	}
}

export default Button;
