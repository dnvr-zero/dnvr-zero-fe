import './TaskHolder.css';
import * as React from 'react';
import SingleTask from '../SingleTask/SingleTask';
import { Container, Form, Dropdown } from 'react-bootstrap';
import { TaskHolderProps } from '../../model';

const TaskHolder: React.FC<TaskHolderProps> = ({ tasks }) => {
	const [searchTerm, setSearchTerm] = React.useState('');
	const [sortOption, setSortOption] = React.useState('');

	const filteredTasks = tasks
		? tasks.filter((task) =>
				task.name.toLowerCase().includes(searchTerm.toLowerCase())
		  )
		: [];

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const sortedTasks = filteredTasks
		? [...filteredTasks].sort((taskA, taskB) => {
				switch (sortOption) {
					// case 'Date':
					// 	return taskA.name.localeCompare(taskB.name);

					case 'PointsAscending':
						return (
							parseInt(taskA.points.split(' ')[0]) -
							parseInt(taskB.points.split(' ')[0])
						);
					case 'PointsDescending':
						return (
							parseInt(taskB.points.split(' ')[0]) -
							parseInt(taskA.points.split(' ')[0])
						);

					default:
						return 0;
				}
		  })
		: [];

	console.log('SORTED TASKS: ', sortedTasks);

	const handleSortChange = (eventKey: any) => {
		console.log('eventKey type: ', typeof eventKey);

		setSortOption(eventKey.toString());
	};
	return (
		<Container className="task-holder-container">
			<h1 className="task-title-text">Tasks</h1>
			<div className="search-and-dropdown">
				<Form className="search-form">
					<Form.Control
						type="text"
						placeholder="Search for a Task by Name"
						value={searchTerm}
						onChange={handleSearchChange}
					/>
				</Form>

				<Dropdown>
					<Dropdown.Toggle
						className="sort-dropdown"
						variant="secondary"
						id="sort-dropdown-toggle"
					>
						{/* Sort by {sortOption || '...'} */}
						Sort by Points
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{/* <Dropdown.Item
							eventKey="Date"
							onClick={() => handleSortChange('Date')}
						>
							Date
						</Dropdown.Item> */}
						<Dropdown.Item
							eventKey="PointsAscending"
							onClick={() => handleSortChange('PointsAscending')} // Check if it works when "Tasks" data is back up!
						>
							Points (ascending)
						</Dropdown.Item>
						<Dropdown.Item
							eventKey="PointsDescending"
							onClick={() => handleSortChange('PointsDescending')} // Check if it works when "Tasks" data is back up!
						>
							Points (descending)
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
			<Container className="single-task-main-container">
				{sortedTasks.map((task) => (
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
		</Container>
	);
};

export default TaskHolder;
