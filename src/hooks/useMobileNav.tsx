import { useState, useEffect } from 'react';

const useMobileNav = () => {
	const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			const mobileNav = window.innerWidth < 850;
			setShowMobileNav(mobileNav);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return showMobileNav;
};

export default useMobileNav;
