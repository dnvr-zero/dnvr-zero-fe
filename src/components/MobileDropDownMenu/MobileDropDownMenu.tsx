import './MobileDropDownMenu.css';
import * as React from 'react';
import { Container, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import SideBarButtons from '../SideBarButtons/SideBarButtons';

interface MobileDropDownMenuProps {}

const MobileDropDownMenu: React.FC<MobileDropDownMenuProps> = () => {
	const [show, setShow] = React.useState(false);

	return (
		<>
			<Container className="d-flex justify-content-center my-3">
				<FaBars
					size={30}
					className="hamburger-menu d-lg-none"
					onClick={() => setShow(true)}
				/>
				<h2 className="h2-text-on-main-page">
					DNVR-<i>zero</i>
				</h2>
			</Container>
			<Offcanvas show={show} onHide={() => setShow(false)} responsive="lg">
				<Offcanvas.Header closeButton className="offcanvas-header-container">
					<Offcanvas.Title className="offcanvas-title-text">
						DNVR-<i>zero</i>
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
