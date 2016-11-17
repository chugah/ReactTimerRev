import React, { Component } from 'react';

class Controls extends Component {
	onStatusChange(newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	}
	render() {
		var {countdownStatus, timerStatus} = this.props;
		var renderStartStopButton = () => {
			if (countdownStatus === 'started') {
				return <button className="control-button" id="pause" onClick={this.onStatusChange('paused')}>PAUSE</button>
			} else {
				return <button className="control-button" id="start" onClick={this.onStatusChange('started')}>START</button>
			}
		};
		return (
			<div className="controls">
				{renderStartStopButton()}
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