import * as React from 'react';
import SideBarNav from './components/SideBarNav';
import MobileDropDownMenu from './components/MobileDropDownMenu';
import HomePage from './components/HomePage';
import { Row, Col } from 'react-bootstrap';
import { fetchTaskData } from './apiCalls';

interface Tasks {
	_id: string;
	name: string;
	description: string;
	points: number | string;
	createdby: string;
}

const App: React.FC = () => {
	const [showMobileNav, setShowMobileNav] = React.useState<boolean>(false);
	const [loading, setLoading] = React.useState<boolean>(false);
	const [tasks, setTasks] = React.useState<Tasks[] | null>(null);

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

	React.useEffect(() => {
		setLoading(true);
		fetchTaskData()
			.then((tasks) => setTasks(tasks))
			.finally(() => setLoading(false));
	}, []);
console.log('TASKS: ', tasks);


    if (tasks === null) {
		// Render loading state or placeholder
		return <div className='fs-4 fw-bold'>LOADING...</div>;
	}

	return (
		<>
			{showMobileNav ? (
				<Row>
					<Col>
						<MobileDropDownMenu />
						<HomePage tasks={tasks}/>
					</Col>
				</Row>
			) : (
				<Row className="d-flex align-items-stretch mx-0">
					<Col xs={2} className="sidebar-column">
						<SideBarNav />
					</Col>
					<Col xs={10} className="d-flex flex-column p-5">
						<HomePage tasks={tasks}/>
					</Col>
				</Row>
            )}
		</>
	);
};

export default App;
