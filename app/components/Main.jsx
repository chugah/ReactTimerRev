import React, { Component } from 'react';
import Navigation from 'Navigation';

class Main extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Navigation />
				<div className="row">
					<div className="column small-centered medium-6 large-4">
						{this.props.children}
					</div>
				</div>
			</div>
		);		
	}
}

export default Main;