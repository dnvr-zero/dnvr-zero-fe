import * as React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

interface MobileDropDownMenuProps {}

const MobileDropDownMenu: React.FunctionComponent<MobileDropDownMenuProps> = (
	props
) => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Toggle aria-controls="dropdown-menu-toggle" />
					<Navbar.Collapse id="dropdown-menu-toggle">
						<Nav className="me-auto">
							<NavDropdown title="DNVR-zero" id="collasible-nav-dropdown">
								<NavDropdown.Item href="player-profile">
									Player Profile
								</NavDropdown.Item>
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
				</Container>
			</Navbar>
		</>
	);
};

export default MobileDropDownMenu;
