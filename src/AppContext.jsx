// C represent create
// U represent use

import React, { createContext, useContext, useState } from 'react';

// create contexts
const Csubmit = createContext();
const Ctodo = createContext();
const CtodoChange = createContext();
const CsetTodo = createContext();
const Ctodos = createContext();

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

const AppContext = ({ children }) => {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);
	function handleTodoChange(e) {
		setTodo(e.target.value);
	}
	function handlesubmit(event) {
		event.preventDefault();
		setTodos([...todos, todo]);
		setTodo('');
	}
	return (
		<div>
			<Csubmit.Provider value={handlesubmit}>
				<Ctodo.Provider value={todo}>
					<CtodoChange.Provider value={handleTodoChange}>
						<CsetTodo.Provider value={setTodo}>
							<Ctodos.Provider value={todos}>{children}</Ctodos.Provider>
						</CsetTodo.Provider>
					</CtodoChange.Provider>
				</Ctodo.Provider>
			</Csubmit.Provider>
		</div>
	);
};

export default AppContext;
