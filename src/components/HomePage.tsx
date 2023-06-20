import * as React from 'react';
import NewTasksOnHomePage from './NewTasksOnHomePage';
import TaskHolder from './TaskHolder';
import { Container } from 'react-bootstrap';

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
