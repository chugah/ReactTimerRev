import React, { Component } from 'react';

class Controls extends Component {
	onStatusChange(newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	}
	renderStartStopButton() {
		var { countdownStatus, timerStatus } = this.props;
		if (countdownStatus === 'started') {
			return <button className="control-button" id="pause" onClick={this.onStatusChange('paused')}>PAUSE</button>
		} else {
			return <button className="control-button" id="start" onClick={this.onStatusChange('started')}>START</button>
		}
	}
	render() {
		//var {countdownStatus, timerStatus} = this.props;
		return (
			<div className="controls">
				{this.renderStartStopButton()}
				<button className="control-button" id="reset" onClick={this.onStatusChange('stopped')}>RESET</button>	
			</div>
		);
	}
}

Controls.propTypes = {
	countdownStatus: React.PropTypes.string.isRequired,
	onStatusChange: React.PropTypes.func.isRequired
};

export default Controls;