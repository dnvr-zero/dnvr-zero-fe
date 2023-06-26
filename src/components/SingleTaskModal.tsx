import '../styles/SingleTaskModal.css';
import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { SingleTaskModalProps } from '../model';

const SingleTaskModal: React.FC<SingleTaskModalProps> = ({
	show,
	onHide,
	_id,
	name,
	description,
	points,
	createdby,
}) => {
	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header className="modal-header">
				<Modal.Title>
					<strong>{name}</strong>
				</Modal.Title>
				<p>{points}</p>
				<p>Created By: {createdby}</p>
			</Modal.Header>
			<Modal.Body className="text-center">
				<p>{description}</p>
			</Modal.Body>
			<Button className="single-task-modal-button">Sign-Up For Task</Button>
			<Button className="single-task-modal-button">Go to Task Details</Button>
		</Modal>
	);
};

export default SingleTaskModal;
