import '../styles/SingleTask.css';
import * as React from 'react';
import { Container, Button } from 'react-bootstrap';
import SingleTaskModal from './SingleTaskModal';

interface SingleTaskProps {}

const SingleTask: React.FunctionComponent<SingleTaskProps> = (props) => {
	const [showSingleTaskModal, setShowSingleTaskModal] =
		React.useState<boolean>(false);

	return (
		<Container className="single-task-container">
			<Button
				className="single-task-button-container"
				id="learnButton"
				onClick={() => setShowSingleTaskModal(true)}
			>
				<h3 className="single-task-title">Climb a tree</h3>
				<h4 className="points-total">Points: 15</h4>
				<h4 className="completed-and-progress-text">
					16 Completed | 62 in Progress
				</h4>
			</Button>
			<SingleTaskModal
				show={showSingleTaskModal}
				onHide={() => setShowSingleTaskModal(false)}
			/>
		</Container>
	);
};

export default SingleTask;
