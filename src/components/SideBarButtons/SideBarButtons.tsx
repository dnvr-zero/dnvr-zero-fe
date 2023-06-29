import './SideBarButtons.css';
import * as React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import GameInfoModal from '../GameInfoModal/GameInfoModal';
import { Link } from 'react-router-dom';

interface SideBarButtonsProps {}

const SideBarButtons: React.FC<SideBarButtonsProps> = () => {
	const [showModal, setShowModal] = React.useState<boolean>(false);

	return (
		<ButtonGroup vertical className="nav-button-container">
			<Link
				to="/player-profile"
				style={{ textDecoration: 'none', color: 'inherit' }}
			>
				<Button id="playerProfileButton">Player Profile</Button>
			</Link>
			<Link to="/tasks" style={{ textDecoration: 'none', color: 'inherit' }}>
				<Button id="tasksButton">Tasks</Button>
			</Link>
			<Button id="eventsButton">Events</Button>
			<Link
				to="/all-players"
				style={{ textDecoration: 'none', color: 'inherit' }}
			>
				<Button id="playersButton">Players</Button>
			</Link>
			<Button id="teamsButton">Teams</Button>
			<Button id="learnButton" onClick={() => setShowModal(true)}>
				Learn How To Play
			</Button>
			<GameInfoModal show={showModal} onHide={() => setShowModal(false)} />
		</ButtonGroup>
	);
};

export default SideBarButtons;
