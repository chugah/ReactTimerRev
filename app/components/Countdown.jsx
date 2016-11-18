import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

var countdown_path = 'images/countdown.jpg';

class Countdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			countdownStatus: 'stopped'
		};
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.countdownStatus !== prevState.countdownStatus) {
			switch (this.state.countdownStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused': 
					clearInterval(this.timer)
					this.timer = undefined;
					break;
			}
		}
	}
	componentWillUnmount() {
		clearInterval(this.timer);
		this.timer = undefined;
	}
	startTimer() {
		this.timer = setInterval( () => {
			var newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});

			if (newCount === 0) {
				this.setState({countdownStatus: 'stopped'});
			}
		}, 1000);
	}
	handleSetCountdown(seconds) {
		this.setState ({
			count: seconds,
			countdownStatus: 'started'
		});
	}
	handleStatusChange(newStatus) {
		this.setState({countdownStatus: newStatus});
	}
	renderControlArea() {
		var { countdownStatus } = this.state;
		if (countdownStatus !== 'stopped') {
				return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange.bind(this)}/>
			} else {
				return <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)}/>
			}
	}	
	render() {
		var { count } = this.state;
		return (
			<div>
				<h1 className="page-title"><img src={countdown_path} id="countdown" alt="countdown" /></h1>
   				<Clock totalSeconds={count}/>
   				{this.renderControlArea()}
   			</div>
		);
	}
}

export default Countdown;
