import React from 'react';

const Button = ({ icon, func }) => {
	return (
		<button onClick={func} className="bg-black p-1 rounded-full text-white">
			{icon}
		</button>
	);
};

export default Button;
