import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import Timer from 'Timer';
import Countdown from 'Countdown';

export default (
	<Route path="/" component={Main}>
		<Route  path="countdown" component={Countdown} />
		<IndexRoute component={Timer} />		
	</Route>
);