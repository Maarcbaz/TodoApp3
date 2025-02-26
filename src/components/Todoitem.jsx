import React from 'react';
import Button from './Button';
import { MdDelete, MdDone } from 'react-icons/md';
import { UComplTodo, UDelTodo, Utodo, Utodos } from '../AppContext';

const Todoitem = () => {
	const complete = UComplTodo();
	const del = UDelTodo();
	const todos = Utodos();

	return (
		<>
			{todos.map((todo, index) => (
				<div
					key={index}
					className="rounded-full w-[250px] mt-4 bg-formBG backdrop-blur-0 text-black border border-borderClr">
					<div className="flex items-center justify-between py-2 px-4">
						<div>{todo.name}</div>
						<div className="flex items-center gap-2">
							<Button func={complete} icon={<MdDone />} />
							<Button func={() => del(todo)} icon={<MdDelete />} />
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Todoitem;
