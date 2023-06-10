import '../styles/HomePage.css';
import * as React from 'react';
import { Card } from 'react-bootstrap';
import GameInfoCard from './GameInfoCard';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
	return (
		<div className='homepage-container'>
			<GameInfoCard />
		</div>
	);
};

export default HomePage;
