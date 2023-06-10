import '../styles/MobileDropDownMenu.css';
import * as React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

interface MobileDropDownMenuProps {}

const MobileDropDownMenu: React.FC<MobileDropDownMenuProps> = (
	props
) => {
	return (
		<div className="mobile-dropdown-container d-flex flex-column align-items-center justify-content-center">
			<Navbar collapseOnSelect variant="dark">
				<Navbar.Toggle aria-controls="dropdown-menu-toggle" />
				<Navbar.Collapse id="dropdown-menu-toggle">
					<Nav className="me-auto">
						<NavDropdown title="DNVR-zero" id="collapsible-nav-dropdown">
							<NavDropdown.Item href="home">Home</NavDropdown.Item>
							<NavDropdown.Item href="player-profile">
								Player Profile
							</NavDropdown.Item>
							<NavDropdown.Item href="tasks">Tasks</NavDropdown.Item>
							<NavDropdown.Item href="events">Events</NavDropdown.Item>
							<NavDropdown.Item href="players">Players</NavDropdown.Item>
							<NavDropdown.Item href="teams">Teams</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="about">About</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default MobileDropDownMenu;
