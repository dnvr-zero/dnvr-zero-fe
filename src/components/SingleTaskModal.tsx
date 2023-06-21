import '../styles/SingleTaskModal.css';
import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface SingleTaskModalProps {
	show: boolean;
	onHide: () => void;
    _id: string;
	name: string;
	description: string;
	points: number | string;
	createdby: string;
}

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
				<p>
					{description}
				</p>
			</Modal.Body>
			<Button className="single-task-modal-button">Go to Task Details</Button>
		</Modal>
	);
};

export default SingleTaskModal;
