import '../styles/SideBarNav.css';
import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import SideBarButtons from './SideBarButtons';

interface SideBarNavProps {}

const SideBarNav: React.FC<SideBarNavProps> = () => {
	return (
		<div className="vertical-div">
			<Navbar collapseOnSelect variant="dark" className="navbar">
				<Container>
					<Navbar.Brand href="home">
						DNVR-<i>zero</i>
					</Navbar.Brand>
				</Container>
				<SideBarButtons />
			</Navbar>
		</div>
	);
};

export default SideBarNav;
