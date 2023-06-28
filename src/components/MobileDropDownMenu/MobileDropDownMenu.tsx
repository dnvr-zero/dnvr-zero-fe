import './MobileDropDownMenu.css';
import * as React from 'react';
import { Container, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import SideBarButtons from '../SideBarButtons/SideBarButtons';
import { Link } from 'react-router-dom';

interface MobileDropDownMenuProps {}

const MobileDropDownMenu: React.FC<MobileDropDownMenuProps> = () => {
	const [show, setShow] = React.useState(false);

	return (
		<>
			<Container className="d-flex align-items-center justify-content-center my-3">
				<FaBars
					size={30}
					className="hamburger-menu d-lg-none"
					onClick={() => setShow(true)}
				/>
				<Link
					to="/"
					style={{ textDecoration: 'none' }}
					className="h2-text-on-main-page"
				>
					DNVR-<i>zero</i>
				</Link>
			</Container>
			<Offcanvas show={show} onHide={() => setShow(false)} responsive="lg">
				<Offcanvas.Header closeButton className="offcanvas-header-container">
					<Offcanvas.Title className="offcanvas-title-text">
						<Link
							to="/"
							style={{ textDecoration: 'none', color: 'inherit' }}
							// className="h2-text-on-main-page"
						>
							DNVR-<i>zero</i>
						</Link>
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body className="d-flex flex-column align-items-center">
					<SideBarButtons />
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default MobileDropDownMenu;
