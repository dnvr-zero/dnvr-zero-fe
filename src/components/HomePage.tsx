import * as React from 'react';
import TaskHolder from './TaskHolder';
// import NewTasksOnHomePage from './NewTasksOnHomePage';
import { Container } from 'react-bootstrap';

interface HomePageProps {
	tasks: {
		_id: string;
		name: string;
		description: string;
		points: number | string;
		createdby: string;
	}[] | null;
}

const HomePage: React.FC<HomePageProps> = ({ tasks }) => {
	return (
		<Container>
                {/* Need to create functionality for displaying newer tasks created, or functionality for displaying only a select list of tasks initially */}
                {/* <NewTasksOnHomePage /> */}
                <TaskHolder tasks={tasks} />
		</Container>
	);
};

export default HomePage;
