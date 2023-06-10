import '../styles/SideBarButtons.css'
import * as React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

interface SideBarButtonsProps {}

const SideBarButtons: React.FC<SideBarButtonsProps> = (props) => {
	return (
		<ButtonGroup vertical className="nav-button-container" size='sm'>
			<Button className='side-button'>Player Profile</Button>
			<Button className='side-button'>Tasks</Button>
			<Button className='side-button'>Events</Button>
			<Button className='side-button'>Players</Button>
			<Button className='side-button'>Teams</Button>
		</ButtonGroup>
	);
};

export default SideBarButtons;
