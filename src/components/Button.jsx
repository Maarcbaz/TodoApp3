import React from 'react';

const Button = ({ icon, func, styles }) => {
	return (
		<button
			onClick={func}
			className={`bg-black ${styles} p-1 rounded-full text-white`}>
			{icon}
		</button>
	);
};

export default Button;
