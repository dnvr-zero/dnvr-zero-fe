import * as React from 'react';
import SideBarNav from './components/SideBarNav';
import MobileDropDownMenu from './components/MobileDropDownMenu';
import HomePage from './components/HomePage';
import { Container, Row, Col } from 'react-bootstrap';

interface AppProps {}

const App: React.FC<AppProps> = (props) => {
	const [showMobileNav, setShowMobileNav] = React.useState<boolean>(false);

	React.useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleResize = () => {
		const mobileNav = window.innerWidth < 768;
		setShowMobileNav(mobileNav);
	};

	return (
		<div className="main-app-container">
			{showMobileNav ? (
				<>
					<Row>
						<Col>
							<MobileDropDownMenu />
							<HomePage />
						</Col>
					</Row>
				</>
			) : (
				<>
					<Row>
						<Col>
							<SideBarNav />
						</Col>
					</Row>
					<Row>
						<Col>
							<HomePage />
						</Col>
					</Row>
				</>
			)}
		</div>
	);
};

export default App;
