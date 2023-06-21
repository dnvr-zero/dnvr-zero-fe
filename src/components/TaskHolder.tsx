import '../styles/TaskHolder.css';
import * as React from 'react';
import SingleTask from './SingleTask';
import { Container } from 'react-bootstrap';

interface TaskHolderProps {
	tasks: {
		_id: string;
		name: string;
		description: string;
		points: number | string;
		createdby: string;
	}[] | null;
}

const TaskHolder: React.FC<TaskHolderProps> = ({ tasks }) => {
	return (
		<div className="task-holder-container">
			<h1 className="task-title-text">TASKS</h1>
			<Container className="single-task-main-container">
				{tasks &&
					tasks.map((task) => (
						<SingleTask
							key={task._id}
							_id={task._id}
							name={task.name}
							description={task.description}
							points={task.points}
							createdby={task.createdby}
						/>
					))}
			</Container>
		</div>
	);
};

export default TaskHolder;
