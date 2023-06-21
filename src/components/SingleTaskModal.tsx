import '../styles/SingleTaskModal.css';
import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface SingleTaskModalProps {
	show: boolean;
	onHide: () => void;
}

const SingleTaskModal: React.FC<SingleTaskModalProps> = ({ show, onHide }) => {
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
					<strong>Climb a Tree</strong>
				</Modal.Title>
				<p>Created By: Terry "Good Times" Graferty</p>
			</Modal.Header>
			<Modal.Body className="text-center">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
			</Modal.Body>
			<Button className="single-task-modal-button">Go to Task Details</Button>
		</Modal>
	);
};

export default SingleTaskModal;
