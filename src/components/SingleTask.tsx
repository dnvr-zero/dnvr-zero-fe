import '../styles/SingleTask.css';
import * as React from 'react';
import { Container, Button } from 'react-bootstrap';
import SingleTaskModal from './SingleTaskModal';
import { Tasks } from '../model';

const SingleTask: React.FC<Tasks> = ({
	_id,
	name,
	description,
	points,
	createdby,
}) => {
	const [showSingleTaskModal, setShowSingleTaskModal] =
		React.useState<boolean>(false);

	return (
		<Container className="single-task-container">
			<Button
				className="single-task-button-container"
				id="learnButton"
				onClick={() => setShowSingleTaskModal(true)}
			>
				<h3 className="single-task-title">{name}</h3>
				<h4 className="points-total">{points}</h4>
				<h4 className="completed-and-progress-text">
					WIP: 16 Completed | 62 in Progress
				</h4>
			</Button>
			<SingleTaskModal
				show={showSingleTaskModal}
				onHide={() => setShowSingleTaskModal(false)}
				key={_id}
				_id={_id}
				name={name}
				description={description}
				points={points}
				createdby={createdby}
			/>
		</Container>
	);
};

export default SingleTask;
