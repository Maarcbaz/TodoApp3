import React, { createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';

// C represents Create
const Csubmit = createContext();
const Ctodo = createContext();
const CtodoChange = createContext();
const CsetTodo = createContext();
const CDel = createContext();
const Ctodos = createContext();
const Ccomplete = createContext();

// U represents Usecontext
// this are arrow functions with return :)
export const Usubmit = () => useContext(Csubmit);
export const Utodo = () => useContext(Ctodo);
export const UtodoChange = () => useContext(CtodoChange);
export const UsetTodo = () => useContext(CsetTodo);
export const Utodos = () => useContext(Ctodos);
export const UDel = () => useContext(CDel);
export const Ucomplete = () => useContext(Ccomplete);

const AppContext = ({ children }) => {
	const [todo, setTodo] = useState({ name: '', done: false, id: nanoid() });
	const [todos, setTodos] = useState([]);

	function handleTodoChange(e) {
		setTodo({ ...todo, name: e.target.value, id: nanoid() });
	}

	function handlesubmit(event) {
		event.preventDefault();
		setTodos([...todos, todo]);
		setTodo({ name: '', done: false, id: nanoid() });
	}

	function handleDel(item) {
		// todo todo based on name
		const newTodos = todos.filter((todo) => todo.id !== item.id);
		setTodos(newTodos);
	}

	function handleComplete(item) {
		const newTodos = todos.map((todo) =>
			todo.id === item.id ? { ...todo, done: !todo.done } : todo
		);
		setTodos(newTodos);
	}

	return (
		<div>
			<Csubmit.Provider value={handlesubmit}>
				<Ctodo.Provider value={todo}>
					<CtodoChange.Provider value={handleTodoChange}>
						<CsetTodo.Provider value={setTodo}>
							<Ctodos.Provider value={todos}>
								<CDel.Provider value={handleDel}>
									<Ccomplete.Provider value={handleComplete}>
										{children}
									</Ccomplete.Provider>
								</CDel.Provider>
							</Ctodos.Provider>
						</CsetTodo.Provider>
					</CtodoChange.Provider>
				</Ctodo.Provider>
			</Csubmit.Provider>
		</div>
	);
};

export default AppContext;
