import React, { createContext, useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

// Create Contexts
const Csubmit = createContext();
const Ctodo = createContext();
const CtodoChange = createContext();
const CsetTodo = createContext();
const CDel = createContext();
const Ctodos = createContext();
const Ccomplete = createContext();
const Cedit = createContext();

// Create Hooks
export const Usubmit = () => useContext(Csubmit);
export const Utodo = () => useContext(Ctodo);
export const UtodoChange = () => useContext(CtodoChange);
export const UsetTodo = () => useContext(CsetTodo);
export const Utodos = () => useContext(Ctodos);
export const UDel = () => useContext(CDel);
export const Ucomplete = () => useContext(Ccomplete);
export const Uedit = () => useContext(Cedit);

const AppContext = ({ children }) => {
	const [todo, setTodo] = useState({ name: '', done: false, id: null });
	const [todos, setTodos] = useState(() => {
		const savedTodos = localStorage.getItem('todos');
		return savedTodos ? JSON.parse(savedTodos) : [];
	});
	const [editing, setEditing] = useState(false);

	function handleTodoChange(e) {
		setTodo({ ...todo, name: e.target.value });
	}

	function handlesubmit(event) {
		event.preventDefault();
		if (editing) {
			// If in edit mode, update the existing todo
			setTodos((prevTodos) =>
				prevTodos.map((t) => (t.id === todo.id ? { ...t, name: todo.name } : t))
			);
			setEditing(false);
		} else {
			// If not editing, create a new todo
			setTodos([...todos, { ...todo, id: nanoid() }]);
		}
		setTodo({ name: '', done: false, id: null });
	}

	function handleDel(item) {
		setTodos(todos.filter((todo) => todo.id !== item.id));
	}

	function handleComplete(item) {
		setTodos(
			todos.map((todo) =>
				todo.id === item.id ? { ...todo, done: !todo.done } : todo
			)
		);
	}

	function handleEdit(item) {
		setTodo(item);
		setEditing(true);
	}

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<Csubmit.Provider value={handlesubmit}>
			<Ctodo.Provider value={todo}>
				<CtodoChange.Provider value={handleTodoChange}>
					<CsetTodo.Provider value={setTodo}>
						<Ctodos.Provider value={todos}>
							<CDel.Provider value={handleDel}>
								<Ccomplete.Provider value={handleComplete}>
									<Cedit.Provider value={handleEdit}>{children}</Cedit.Provider>
								</Ccomplete.Provider>
							</CDel.Provider>
						</Ctodos.Provider>
					</CsetTodo.Provider>
				</CtodoChange.Provider>
			</Ctodo.Provider>
		</Csubmit.Provider>
	);
};

export default AppContext;
