import * as React from 'react';
import { Modal } from 'react-bootstrap';
import { GameInfoModalProps } from '../../model';

const GameInfoModal: React.FC<GameInfoModalProps> = ({ show, onHide }) => {
	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title>
					Learn How To Play{' '}
					<strong>
						DNVR-<i>zero</i>
					</strong>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					<b>#1.</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					<br></br>
					<br></br>
					<b>#2.</b> Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat.
					<br></br>
					<br></br>
					<b>#3.</b> Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
					<br></br>
					<br></br>
					<b>#4.</b> Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</Modal.Body>
		</Modal>
	);
};

export default GameInfoModal;
