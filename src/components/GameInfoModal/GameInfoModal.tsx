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
					Learn How To Play
					<strong>
						DNVR-<i>zero</i>
					</strong>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					<b>#1.</b> You put your left hand in!
					<br></br>
					<br></br>
					<b>#2.</b> You put your left hand out!
					<br></br>
					<br></br>
					<b>#3.</b> You put your left hand in and you shake it all about!
					<br></br>
					<br></br>
					<b>#4.</b> You do the hokey-pokey and you turn yourself around!
					<br></br>
					<br></br>
					<b>#5.</b> That's what it's all about!
				</p>
			</Modal.Body>
		</Modal>
	);
};

export default GameInfoModal;
