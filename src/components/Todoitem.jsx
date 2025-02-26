import React from 'react';
import Button from './Button';
import { MdDelete, MdDone } from 'react-icons/md';
import { Ucomplete, UDel, Utodos } from '../AppContext';

const Todoitem = () => {
	const todos = Utodos();
	const del = UDel();
	const complete = Ucomplete();

	// Create a sorted copy of todos: incomplete first, then complete

	const sortedTodos = todos.sort((a, b) => a.done - b.done); // sorts based on true/false

	return (
		<>
			{sortedTodos.map((todo) => (
				<div
					key={todo.id}
					className="rounded-full w-[250px] mt-4 bg-formBG backdrop-blur-0 text-black border border-borderClr">
					<div className="flex items-center justify-between py-2 px-4">
						<div className={`${todo.done && 'line-through opacity-75'}`}>
							{todo.name}
						</div>
						<div className="flex items-center gap-2">
							<Button
								styles={`${
									todo.done
										? 'bg-black border-transparent'
										: 'border border-black bg-transparent'
								}`}
								func={() => complete(todo)}
								icon={<MdDone />}
							/>
							<Button func={() => del(todo)} icon={<MdDelete />} />
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Todoitem;
