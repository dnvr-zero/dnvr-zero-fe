import * as React from 'react';
import { Card } from 'react-bootstrap';

interface GameInfoCardProps {}

const GameInfoCard: React.FC<GameInfoCardProps> = (props) => {
	return (
		<Card className="text-center mt-4 w-75">
			<Card.Header className="info-card-header">
				<strong>
					How to play with the DNVR-<i>zero</i> community
				</strong>
			</Card.Header>
			<Card.Body>
				<Card.Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default GameInfoCard;
