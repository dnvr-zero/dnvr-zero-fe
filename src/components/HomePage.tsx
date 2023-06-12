import '../styles/HomePage.css';
import * as React from 'react';
import { Card } from 'react-bootstrap';
import GameInfoCard from './GameInfoCard';
import NewTasksOnHomePage from './NewTasksOnHomePage';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
	return (
		<div className="homepage-container">
			<GameInfoCard />
            <NewTasksOnHomePage />
		</div>
	);
};

export default HomePage;
