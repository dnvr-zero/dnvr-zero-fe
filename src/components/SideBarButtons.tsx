import '../styles/SideBarButtons.css';
import * as React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

interface SideBarButtonsProps {}

const SideBarButtons: React.FC<SideBarButtonsProps> = () => {
	return (
		<ButtonGroup vertical className="nav-button-container" size="sm">
			<Button id="playerProfileButton">Player Profile</Button>
			<Button id="tasksButton">Tasks</Button>
			<Button id="eventsButton">Events</Button>
			<Button id="playersButton">Players</Button>
			<Button id="teamsButton">Teams</Button>
		</ButtonGroup>
	);
};

export default SideBarButtons;
