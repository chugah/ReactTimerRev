import React, { Component } from 'react';

class CountdownForm extends Component {
	onSubmit(e) {
		e.preventDefault();
		var strSeconds = this.refs.seconds.value;
				
		if (strSeconds.match(/^[0-9]*$/)) {
			this.refs.seconds.value = '';
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		}
	}
	render() {
		return (
			<div>
				<section className="countdown">
					<form ref="form" onSubmit={this.onSubmit.bind(this)}>
						<input type="text" ref="seconds" placeholder="Enter time in seconds"/>
						<button>Start</button>
					</form>
				</section>
			</div>
		);
	}
}

export default CountdownForm;