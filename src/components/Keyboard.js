import React, { Component } from "react";
import Button from "./Button";

class Keyboard extends Component {
	render() {
		return (
			<div className="calculator__keyboard">
				<div className="row">
					<Button handleClick={this.props.handleClick} type="grey" name="C" />

					<Button handleClick={this.props.handleClick} type="grey" name="+/-" />

					<Button handleClick={this.props.handleClick} type="grey" name="%" />

					<Button handleClick={this.props.handleClick} type="orange" name="÷" />
				</div>

				<div className="row">
					<Button handleClick={this.props.handleClick} name="7" />

					<Button handleClick={this.props.handleClick} name="8" />

					<Button handleClick={this.props.handleClick} name="9" />

					<Button handleClick={this.props.handleClick} type="orange" name="×" />
				</div>

				<div className="row">
					<Button handleClick={this.props.handleClick} name="4" />
					
					<Button handleClick={this.props.handleClick} name="5" />
					
					<Button handleClick={this.props.handleClick} name="6" />
					
					<Button handleClick={this.props.handleClick} type="orange" name="-" />
				</div>

				<div className="row">
					<Button handleClick={this.props.handleClick} name="1" />
					
					<Button handleClick={this.props.handleClick} name="2" />
					
					<Button handleClick={this.props.handleClick} name="3" />
					
					<Button handleClick={this.props.handleClick} type="orange" name="+" />
				</div>

				<div className="row">
					<Button handleClick={this.props.handleClick} type="lg" name="0" />
					
					<Button handleClick={this.props.handleClick} name="." />

					<Button handleClick={this.props.handleClick} type="orange" name="=" />
				</div>
			</div>
		);
	}
}

export default Keyboard;
