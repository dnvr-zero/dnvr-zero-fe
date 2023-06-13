import * as React from 'react';
import NewTasksOnHomePage from './NewTasksOnHomePage';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
	return (
		<>
			<NewTasksOnHomePage />
		</>
	);
};

export default HomePage;
