import React from 'react';
import Todoitem from './Todoitem';
import { Utodos } from '../AppContext';

const TodoList = () => {
	return (
		<div className="md:pt-4">
			<Todoitem />
		</div>
	);
};

export default TodoList;
hello ai,am having an interview project which is to create a todo app. i have done this previously before, but finding it hard to create again, altough am using
react context and previous one were made with props :). i need you to create add this functionality delete, done, sorted(based on done and undone) the done should be 
sorted to the down. the completed should be crossed. please explain this concept very well pls. i need to understand what am copying. here are the codes 

[todo item]
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
[context]
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

[form]
import { Usubmit, Utodo, UtodoChange } from '../AppContext';
import TodoList from './todoList';

const Form = () => {
	const handleSubmit = Usubmit();
	const handleTodoChange = UtodoChange();
	const todo = Utodo();
	return (
		<div className="flex justify-center">
			<div className="formContainer">
				<form className="form" onSubmit={handleSubmit}>
					<div className="relative">
						<input
							type="text"
							placeholder="Add a task..."
							className="input"
							required
							value={todo.name}
							onChange={handleTodoChange}
						/>
					</div>
				</form>
				<TodoList />
			</div>
		</div>
	);
};

export default Form;
[todolist]
import React from 'react';
import Todoitem from './Todoitem';
import { Utodos } from '../AppContext';

const TodoList = () => {
	return (
		<div className="md:pt-4">
			<Todoitem />
		</div>
	);
};

export default TodoList;
[here is also an error i get from the console whenever i save my code]