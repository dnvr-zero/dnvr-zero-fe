import './SinglePlayer.css';
import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Players } from '../../model';
import { faker } from '@faker-js/faker';

const SinglePlayer: React.FC<Players> = ({
	_id,
	level,
	name,
	score,
	email,
}) => {
	const generateFakerAvatar = () => faker.image.avatar();
	return (
		<Card id={_id} className="single-player-card">
			<Card.Img
				variant="top"
				src={generateFakerAvatar()}
				className="player-image"
			/>
			<Card.Body>
				<div className="card-text">
					<Card.Title className="card-name">{name}</Card.Title>
					<Card.Text>
						<b>Player Score:</b> {parseFloat(score).toLocaleString()}
					</Card.Text>
					<Card.Text>
						<b>Player Level:</b> {level}
					</Card.Text>
					<Card.Text>
						<span className="player-email">
							<b>Player Email:</b> {email}
						</span>
					</Card.Text>
				</div>
				<Button className="single-player-button">View {name}'s Profile</Button>
			</Card.Body>
		</Card>
	);
};

export default SinglePlayer;
