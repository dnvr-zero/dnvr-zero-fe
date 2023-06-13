import '../styles/SideBarButtons.css';
import * as React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import GameInfoModal from './GameInfoModal';

interface SideBarButtonsProps {}

const SideBarButtons: React.FC<SideBarButtonsProps> = () => {
	const [showModal, setShowModal] = React.useState<boolean>(false);

	return (
		<ButtonGroup vertical className="nav-button-container" size="sm">
			<Button id="playerProfileButton">Player Profile</Button>
			<Button id="tasksButton">Tasks</Button>
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
