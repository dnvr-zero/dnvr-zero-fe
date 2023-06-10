import * as React from 'react';
import '../styles/SideBarNav.css';
import { Container, Navbar } from 'react-bootstrap';
import SideBarButtons from './SideBarButtons';

interface SideBarNavProps {}

const SideBarNav: React.FC<SideBarNavProps> = (props) => {
	return (
		<div className='vertical-div'>
			<Navbar collapseOnSelect expand="lg" variant="dark" className='navbar'>
				<Container className='navbar-content'> 
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
