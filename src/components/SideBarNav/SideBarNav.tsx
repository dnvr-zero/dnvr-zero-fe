import './SideBarNav.css'
import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import SideBarButtons from '../SideBarButtons/SideBarButtons';
import { Link } from 'react-router-dom';

interface SideBarNavProps {}

const SideBarNav: React.FC<SideBarNavProps> = () => {
	return (
		<Navbar className="navbar">
			<Navbar.Brand className="navbar-title">
				<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
					DNVR-<i>zero</i>
				</Link>
			</Navbar.Brand>
			<SideBarButtons />
		</Navbar>
	);
};

export default SideBarNav;
