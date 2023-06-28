import './InProgressTaskModal.css';
import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { SingleTaskModalProps } from '../../model';
// import { Link } from 'react-router-dom';

interface InProgressTaskModalProps {
	show: boolean;
	onHide: () => void;
}

const InProgressTaskModal: React.FC<InProgressTaskModalProps> = ({
	show,
	onHide,
}) => {
	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header className="in-progress-modal-header">
				<Modal.Title>
					<strong>Task Name</strong>
				</Modal.Title>
				<p>Points: 45</p>
				<p>Created By: Terry McTavish</p>
			</Modal.Header>
			<Modal.Body className="text-center">
				<p>
					Task Description: Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat.{' '}
				</p>
			</Modal.Body>
			<div className="in-progress-modal-button-container">
				<Button className="in-progress-task-modal-button">Update Task</Button>
				{/* <Link
					to="/tasks/task-details"
					style={{ textDecoration: 'none', color: 'inherit' }}
				> */}
				{/* </Link> */}
			</div>
		</Modal>
	);
};

export default InProgressTaskModal;
