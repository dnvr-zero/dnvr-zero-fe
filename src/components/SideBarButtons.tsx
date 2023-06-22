import '../styles/SideBarButtons.css';
import * as React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import GameInfoModal from './GameInfoModal';
import { Link } from 'react-router-dom';

interface SideBarButtonsProps {}

const SideBarButtons: React.FC<SideBarButtonsProps> = () => {
	const [showModal, setShowModal] = React.useState<boolean>(false);

	return (
		<ButtonGroup vertical className="nav-button-container">
			<Button id="playerProfileButton">
				<Link
					to="/player-profile"
					style={{ textDecoration: 'none', color: 'inherit' }}
				>
					Player Profile
				</Link>
			</Button>
			<Button id="tasksButton">
				<Link to="/tasks" style={{ textDecoration: 'none', color: 'inherit' }}>
					Tasks
				</Link>
			</Button>
			<Button id="eventsButton">Events</Button>
			<Button id="playersButton">Players</Button>
			<Button id="teamsButton">Teams</Button>
			<Button id="learnButton" onClick={() => setShowModal(true)}>
				Learn How To Play
			</Button>
			<GameInfoModal show={showModal} onHide={() => setShowModal(false)} />
		</ButtonGroup>
	);
};

export default SideBarButtons;
