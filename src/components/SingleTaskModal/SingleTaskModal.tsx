import './SingleTaskModal.css';
import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { SingleTaskModalProps } from '../../model';
import { Link } from 'react-router-dom';

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
				<Modal.Title id={_id}>
					<strong>{name}</strong>
				</Modal.Title>
				<p>{points}</p>
				<p>Created By: {createdby}</p>
			</Modal.Header>
			<Modal.Body className="text-center">
				<p>{description}</p>
			</Modal.Body>
			<div className="modal-button-container">
				<Button className="single-task-modal-button">Sign-Up For Task</Button>
				<Link
					to="/tasks/task-details"
					style={{ textDecoration: 'none', color: 'inherit' }}
				>
					<Button className="single-task-modal-button">
						Go to Task Details
					</Button>
				</Link>
			</div>
		</Modal>
	);
};

export default SingleTaskModal;
