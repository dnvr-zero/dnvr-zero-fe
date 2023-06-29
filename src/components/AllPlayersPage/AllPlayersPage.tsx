import './AllPlayersPage.css';
import * as React from 'react';
import { AllPlayersPageProps, Players } from '../../model';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import { Container } from 'react-bootstrap';

const AllPlayersPage: React.FunctionComponent<AllPlayersPageProps> = ({
	players,
}) => {
	return (
		<div className="all-players-container">
			<h1 className="players-title-text">Players</h1>
			{players?.map((player: Players) => (
				<SinglePlayer
					key={player._id}
					_id={player._id}
					level={player.level}
					name={player.name}
					score={player.score}
					email={player.email}
				/>
			))}
		</div>
	);
};

export default AllPlayersPage;
