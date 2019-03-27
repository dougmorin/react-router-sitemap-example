import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import TestSection from './components/TestSection';
import TestSection2 from './components/TestSection2';
import TestSection3 from './components/TestSection3';

export default (
	<Switch>
		<Route exact path='/' component={TestSection} />
		<Route path='/about' component={TestSection2} />
		<Route path='/projects'>
			<Route path=':projectName'>
				<Route path='view' />
			</Route>
		</Route>
		<Route path='/contacts' component={TestSection3} />
		<Route path='/auth' component={TestSection3}/>
		<Redirect from='/home' to='/' />
		<Route path='*' component={TestSection3}/>
	</Switch>
);