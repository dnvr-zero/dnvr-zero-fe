import * as React from 'react';
import SideBarNav from './components/SideBarNav';
import MobileDropDownMenu from './components/MobileDropDownMenu';

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

	return <>{showMobileNav ? <MobileDropDownMenu /> : <SideBarNav />}</>;
};

export default App;
