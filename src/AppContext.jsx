// C represent create
// U represent use

import React, { createContext, useContext, useState } from 'react';
import Todoitem from './components/Todoitem';

// create contexts
const Csubmit = createContext();
const Ctodo = createContext();
const CtodoChange = createContext();
const CsetTodo = createContext();
const Ctodos = createContext();
const CDelTodo = createContext();
const CComplTodo = createContext();

// use context
export const Usubmit = () => {
	return useContext(Csubmit);
};

export const Utodo = () => {
	return useContext(Ctodo);
};

export const UtodoChange = () => {
	return useContext(CtodoChange);
};

export const UsetTodo = () => {
	return useContext(CsetTodo);
};
export const Utodos = () => {
	return useContext(Ctodos);
};
export const UDelTodo = () => {
	return useContext(CDelTodo);
};
export const UComplTodo = () => {
	return useContext(CComplTodo);
};
const AppContext = ({ children }) => {
	const [todo, setTodo] = useState({ name: '', done: false });
	const [todos, setTodos] = useState([]);
	function handleTodoChange(e) {
		setTodo({ ...todo, name: e.target.value });
	}
	function handlesubmit(event) {
		event.preventDefault();
		setTodos([...todos, todo]);
		setTodo({ name: '', done: false });
	}
	function handleCompleted(items) {
		const newTodo = todos.map((todo) =>
			todo.name === items ? { ...todo, done: !todo.done } : todo
		);
		setTodos(newTodo);
	}

	function handleDelete(item) {
		console.log('This item has been deleted item', item.name);
		const newTodo = todos.filter((todo) => {
			todo !== item.name;
		});
		setTodos(newTodo);
	}

	return (
		<div>
			<Csubmit.Provider value={handlesubmit}>
				<Ctodo.Provider value={todo}>
					<CtodoChange.Provider value={handleTodoChange}>
						<CsetTodo.Provider value={setTodo}>
							<Ctodos.Provider value={todos}>
								<CComplTodo.Provider value={handleCompleted}>
									<CDelTodo.Provider value={handleDelete}>
										{children}
									</CDelTodo.Provider>
								</CComplTodo.Provider>
							</Ctodos.Provider>
						</CsetTodo.Provider>
					</CtodoChange.Provider>
				</Ctodo.Provider>
			</Csubmit.Provider>
		</div>
	);
};

export default AppContext;
