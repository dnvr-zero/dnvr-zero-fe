import './CompletedTaskModal.css';
import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { SingleTaskModalProps } from '../../model';

interface CompletedTaskModalProps {
	show: boolean;
	onHide: () => void;
}

const CompletedTaskModal: React.FC<CompletedTaskModalProps> = ({
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
			<Modal.Header className="completed-modal-header">
				<Modal.Title>
					<strong>COMPLETED Task Name</strong>
				</Modal.Title>
				<p className='points'>Points: 45</p>
				<p>Created By: Terry McTavish</p>
				<p className='date-completed'><b>Date Completed:</b> October 30th, 2022</p>
			</Modal.Header>
			<Modal.Body className="text-center">
				<p>
					Task Description: Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat.{' '}
				</p>
			</Modal.Body>
			{/* <div className="completed-modal-button-container">
				<Link
					to="/player-profile"
					style={{ textDecoration: 'none', color: 'inherit' }}
				>
				<Button className="interested-task-modal-button">Return to Profile</Button>
				</Link>
			</div> */}
		</Modal>
	);
};

export default CompletedTaskModal;
