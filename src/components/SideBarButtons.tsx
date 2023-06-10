import '../styles/SideBarButtons.css';
import * as React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

interface SideBarButtonsProps {}

const SideBarButtons: React.FC<SideBarButtonsProps> = (props) => {
	const [isActive, setIsActive] = React.useState<string | null>(null);

	const handleClick = (buttonId: string) => {
		setIsActive(buttonId === isActive ? null : buttonId);
	};

	return (
		<ButtonGroup vertical className="nav-button-container" size="sm">
			<Button
				id="playerProfileButton"
				className={isActive === 'playerProfileButton' ? 'active' : ''}
				onClick={() => handleClick('playerProfileButton')}
			>
				Player Profile
			</Button>
			<Button
				id="tasksButton"
				className={isActive === 'tasksButton' ? 'active' : ''}
				onClick={() => handleClick('tasksButton')}
			>
				Tasks
			</Button>
			<Button
				id="eventsButton"
				className={isActive === 'eventsButton' ? 'active' : ''}
				onClick={() => handleClick('eventsButton')}
			>
				Events
			</Button>
			<Button
				id="playersButton"
				className={isActive === 'playersButton' ? 'active' : ''}
				onClick={() => handleClick('playersButton')}
			>
				Players
			</Button>
			<Button
				id="teamsButton"
				className={isActive === 'teamsButton' ? 'active' : ''}
				onClick={() => handleClick('teamsButton')}
			>
				Teams
			</Button>
		</ButtonGroup>
	);
};

export default SideBarButtons;
