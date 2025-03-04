import React from 'react';
import Button from './Button';
import { MdDelete, MdDone, MdEditDocument } from 'react-icons/md';
import { Ucomplete, UDel, Utodos, Uedit } from '../AppContext';

const Todoitem = () => {
	const todos = Utodos();
	const del = UDel();
	const complete = Ucomplete();
	const edit = Uedit();

	const sortedTodos = todos.sort((a, b) => a.done - b.done);

	return (
		<>
			{sortedTodos.map((todo) => (
				<div
					key={todo.id}
					className="rounded-full justify-between w-[250px] mt-4 bg-formBG backdrop-blur-0 text-black border border-borderClr">
					<div className="flex items-start justify-between py-2 px-4">
						<div className={`${todo.done && 'line-through opacity-75'}`}>
							<Button
								styles={`${
									todo.done
										? 'bg-black border-transparent'
										: 'border border-black bg-transparent'
								} mr-2`}
								func={() => complete(todo)}
								icon={<MdDone />}
							/>
							{todo.name}
						</div>
						<div className="flex items-center gap-2">
							<Button func={() => edit(todo)} icon={<MdEditDocument />} />
							<Button func={() => del(todo)} icon={<MdDelete />} />
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Todoitem;
