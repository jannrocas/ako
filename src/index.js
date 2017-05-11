import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';
import '../semantic/dist/semantic.min.css';
import './static/css/style.css';
const AppContainer = () => (
	<Router>
		<App />
	</Router>
);

window.onload = () => {
	render(<AppContainer />, document.getElementById('root'));
};
