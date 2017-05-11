import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = props => (
	<div className="app-container">
		<header></header>
		<div className="app-content">{props.children}</div>
		<footer>
			<p class="copy">&copy; jannrocas</p>
		</footer>
	</div>
);

export default Layout;
