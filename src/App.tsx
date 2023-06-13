import * as React from 'react';
import SideBarNav from './components/SideBarNav';
import MobileDropDownMenu from './components/MobileDropDownMenu';
import HomePage from './components/HomePage';
import { Row, Col } from 'react-bootstrap';

interface AppProps {}

const App: React.FC<AppProps> = () => {
	const [showMobileNav, setShowMobileNav] = React.useState<boolean>(false);

	React.useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleResize = () => {
		const mobileNav = window.innerWidth < 850;
		setShowMobileNav(mobileNav);
	};

	return (
		<>
			{showMobileNav ? (
				<Row>
					<Col>
						<MobileDropDownMenu />
						<HomePage />
					</Col>
				</Row>
			) : (
				<Row className="d-flex align-items-stretch">
					<Col xs={2}>
						<SideBarNav />
					</Col>
					<Col xs={10} className="d-flex flex-column p-5">
						<HomePage />
					</Col>
				</Row>
			)}
		</>
	);
};

export default App;
