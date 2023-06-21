import '../styles/SideBarNav.css';
import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import SideBarButtons from './SideBarButtons';

interface SideBarNavProps {}

const SideBarNav: React.FC<SideBarNavProps> = () => {
	return (
		<Navbar className="navbar">
			<Navbar.Brand href="home" className="navbar-title">
				DNVR-<i>zero</i>
			</Navbar.Brand>
			<SideBarButtons />
		</Navbar>
	);
};

export default SideBarNav;
