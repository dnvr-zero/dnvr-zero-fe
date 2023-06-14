import '../styles/TaskHolder.css';
import * as React from 'react';
import SingleTask from './SingleTask';
import { Container } from 'react-bootstrap';

interface TaskHolderProps {}

const TaskHolder: React.FC<TaskHolderProps> = () => {
	return (
		<div className="d-flex flex-column align-items-center">
			<h1>Tasks</h1>
			<Container className="single-task-main-container">
				<SingleTask />
				<SingleTask />
				<SingleTask />
				<SingleTask />
				<SingleTask />
				<SingleTask />
				<SingleTask />
				<SingleTask />
			</Container>
		</div>
	);
};

export default TaskHolder;
