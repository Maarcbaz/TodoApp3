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
							onChange={handleTodoChange}
							placeholder="Add a task..."
							className="input"
							required
							value={todo}
						/>
					</div>
				</form>
				<TodoList />
			</div>
		</div>
	);
};

export default Form;
