import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

var clock_nav_path = 'images/clock-nav.jpg';
var timer_nav_path = 'images/timer-nav.jpg';
var countdown_nav_path = 'images/countdown-nav.jpg';

class Navigation extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text"><img src={clock_nav_path} className="img-nav-left" alt="clock" /></li>
						<li><IndexLink to="/" activeClassName="active-link"><img src={timer_nav_path} className="img-nav" alt="timer" /></IndexLink></li>
						<li><Link to="/countdown" activeClassName="active-link"><img src={countdown_nav_path} className="img-nav" alt="countdown" /></Link></li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li className="menu-text"><img src="https://66.media.tumblr.com/f63f02a88ec4fe663228dfcf52a16102/tumblr_nuln7bBXFT1uaabhpo1_400.gif" className="img-nav-right" alt="tick-tock" /></li>
					</ul>
				</div>
			</div>		
		);
	}
}
	
export default Navigation;