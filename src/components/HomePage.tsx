import * as React from 'react';
import NewTasksOnHomePage from './NewTasksOnHomePage';
import { Container } from 'react-bootstrap';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
	return (
		<Container>
			<NewTasksOnHomePage />
		</Container>
	);
};

export default HomePage;
