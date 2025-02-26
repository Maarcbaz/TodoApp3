import React from 'react';
import { Utodos } from '../AppContext';

const Footer = () => {
	const total = Utodos();
	// const totalTodo = total.length;
	return (
		// reusable styles are imported from the index.css file [footer,footertext]
		<footer className="footer">
			<h4 className="footertext">Total:</h4>
			<h4 className="footertext">Active:</h4>
			<h4 className="footertext">Completed:</h4>
		</footer>
	);
};

export default Footer;
