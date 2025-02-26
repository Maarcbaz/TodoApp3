import React from 'react';
import { Utodos } from '../AppContext';

const Footer = () => {
	const total = Utodos();
	const totalTodo = total.length;
	const completed = total.filter((todo) => todo.done).length;
	const active = total.filter((todo) => !todo.done).length;
	return (
		// reusable styles are imported from the index.css file [footer,footertext]
		<footer className="footer">
			<h4 className="footertext">Total: {totalTodo}</h4>
			<h4 className="footertext">Active: {active}</h4>
			<h4 className="footertext">Completed: {completed}</h4>
		</footer>
	);
};

export default Footer;
