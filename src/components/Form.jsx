// import { Usubmit } from '../contexts/Usecontext';

// const handleSubmit = Usubmit();

import TodoList from './todoList';

const Form = () => {
	return (
		<div className="flex justify-center">
			<div className="mt-8 border overflow-x-auto md:h-[350px] flex flex-col items-center border-solid pt-10 lg:h-[450px] max-sm:w-[300px] w-[400px] max-md:h-[320px] border-borderClr rounded-3xl bg-formBG backdrop-blur-0 ">
				<form className="form">
					<div className="relative">
						<input type="text" placeholder="Add a task..." className="input" />
					</div>
				</form>
				<TodoList />
			</div>
		</div>
	);
};

export default Form;
