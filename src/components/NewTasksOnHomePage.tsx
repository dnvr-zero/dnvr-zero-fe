import { Container, Card, Button } from 'react-bootstrap';
import '../styles/NewTasksOnHomePage.css';
import * as React from 'react';

interface NewTasksOnHomePageProps {}

const NewTasksOnHomePage: React.FC<NewTasksOnHomePageProps> = (props) => {
	return (
		<div className="new-task-container">
			<h1 className="new-task-title-text">NEW TASKS</h1>
			<Container className="card-container">
				<Card className="new-task-cards">
					<Card.Header className="new-task-header-text">
						Climb a Tree
					</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<footer className="blockquote-footer mt-2">
							Terry "Good Times" Graferty <i>(1 day ago)</i>
						</footer>
						<Button className="new-task-button">
							Go To <b>Climb a Tree</b> Task
						</Button>
					</Card.Body>
				</Card>
				<Card className="new-task-cards">
					<Card.Header className="new-task-header-text">
						Climb a Tree
					</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<footer className="blockquote-footer mt-2">
							Terry "Good Times" Graferty <i>(1 day ago)</i>
						</footer>
						<Button className="new-task-button">
							Go To <b>Climb a Tree</b> Task
						</Button>
					</Card.Body>
				</Card>
				<Card className="new-task-cards">
					<Card.Header className="new-task-header-text">
						Climb a Tree
					</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<footer className="blockquote-footer mt-2">
							Terry "Good Times" Graferty <i>(1 day ago)</i>
						</footer>
						<Button className="new-task-button">
							Go To <b>Climb a Tree</b> Task
						</Button>
					</Card.Body>
				</Card>
				<Card className="new-task-cards">
					<Card.Header className="new-task-header-text">
						Climb a Tree
					</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<footer className="blockquote-footer mt-2">
							Terry "Good Times" Graferty <i>(1 day ago)</i>
						</footer>
						<Button className="new-task-button">
							Go To <b>Climb a Tree</b> Task
						</Button>
					</Card.Body>
				</Card>
				<Card className="new-task-cards">
					<Card.Header className="new-task-header-text">
						Climb a Tree
					</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<footer className="blockquote-footer mt-2">
							Terry "Good Times" Graferty <i>(1 day ago)</i>
						</footer>
						<Button className="new-task-button">
							Go To <b>Climb a Tree</b> Task
						</Button>
					</Card.Body>
				</Card>
				
			</Container>
		</div>
	);
};

export default NewTasksOnHomePage;
