import React from 'react';
import Todoitem from './Todoitem';
import { Utodos } from '../AppContext';

const TodoList = () => {
	const todos = Utodos();
	return (
		<div className="md:pt-4">
			{todos.map((todo) => (
				<Todoitem key={todo} todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
