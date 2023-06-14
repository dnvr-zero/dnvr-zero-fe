import * as React from 'react';
import NewTasksOnHomePage from './NewTasksOnHomePage';
import { Container } from 'react-bootstrap';
import TaskHolder from './TaskHolder';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
	return (
		<Container>
			{/* <NewTasksOnHomePage /> */}
            <TaskHolder />
		</Container>
	);
};

export default HomePage;
