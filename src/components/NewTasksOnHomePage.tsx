import { Container, Card, Button } from 'react-bootstrap';
import '../styles/NewTasksOnHomePage.css';
import * as React from 'react';

interface NewTasksOnHomePageProps {}

const NewTasksOnHomePage: React.FC<NewTasksOnHomePageProps> = (props) => {
	return (
		<>
			<div className="new-task-title-container">
				<h1>NEW TASKS!!!</h1>
			</div>
			<Container className="d-flex flex-column align-items-center">
				<Card className="new-task-cards text-center">
					<Card.Header className="new-task-header-text">Task Title</Card.Header>
					<Card.Body>
						<p className="task-description-text">
							{' '}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.{' '}
						</p>
						<footer className="blockquote-footer">
							Terry "Good Times" Graferty <i>(2 days ago)</i>
						</footer>
						<Button className="new-task-button">Go To Task</Button>
					</Card.Body>
				</Card>
				<Card className="new-task-cards text-center">
					<Card.Header className="new-task-header-text">Task Title</Card.Header>
					<Card.Body>
						<p className="task-description-text">
							{' '}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.{' '}
						</p>
						<footer className="blockquote-footer">
							Terry "Good Times" Graferty <i>(2 days ago)</i>
						</footer>
						<Button className="new-task-button">Go To Task</Button>
					</Card.Body>
				</Card>
				<Card className="new-task-cards text-center">
					<Card.Header className="new-task-header-text">Task Title</Card.Header>
					<Card.Body>
						<p className="task-description-text">
							{' '}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.{' '}
						</p>
						<footer className="blockquote-footer">
							Terry "Good Times" Graferty <i>(2 days ago)</i>
						</footer>
						<Button className="new-task-button">Go To Task</Button>
					</Card.Body>
				</Card>
			</Container>
		</>
	);
};

export default NewTasksOnHomePage;
