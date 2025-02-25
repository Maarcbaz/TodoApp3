import React from 'react';

const Button = ({ icon }) => {
	return (
		<button className="bg-white p-1 rounded-full text-black">
			{icon}
		</button>
	);
};

export default Button;
