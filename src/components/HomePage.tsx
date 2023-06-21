import * as React from 'react';
import TaskHolder from './TaskHolder';
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

                <TaskHolder tasks={tasks} />
		</Container>
	);
};

export default HomePage;
