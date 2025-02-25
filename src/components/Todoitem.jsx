import React from 'react';
import Button from './Button';
import { MdDelete, MdDone } from 'react-icons/md';

const Todoitem = ({ todo }) => {
	return (
		<div className="rounded-full w-[250px] mt-4 bg-red-800 text-white">
			<div className="flex items-center justify-between py-2 px-4">
				<div>{todo}</div>
				<div className="flex items-center gap-2">
					<Button icon={<MdDone />} />
					<Button icon={<MdDelete />} />
				</div>
			</div>
		</div>
	);
};

export default Todoitem;
