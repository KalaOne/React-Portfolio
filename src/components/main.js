import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
	<Switch>
		{/* Exact is to land on that particular page, if not, it'll be empty page. */}
		<Route exact path="/" component={Landing} />
		{/* All the pages MUST follow a "/" or they won't be loaded correctly. */}
		<Route path="/Resume" component={Resume} />
		<Route path="/Projects" component={Projects} />
		<Route path="/Contact" component={Contact} />
	</Switch>
)

export default Main;
