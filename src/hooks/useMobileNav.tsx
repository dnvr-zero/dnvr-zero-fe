import { useState, useEffect, useCallback } from 'react';

const useMobileNav = () => {
	const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

	const handleResize = useCallback(() => {
		const mobileNav = window.innerWidth < 850;
		setShowMobileNav(mobileNav);
	}, []);
    
	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return showMobileNav;
};

export default useMobileNav;