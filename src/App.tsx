import * as React from 'react';
import SideBarNav from './components/SideBarNav';
import MobileDropDownMenu from './components/MobileDropDownMenu';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchTaskData, fetchPlayersData } from './apiCalls';
import WelcomPage from './components/WelcomePage';
import { Routes, Route } from 'react-router-dom';
import TaskHolder from './components/TaskHolder';
import PlayerProfile from './components/PlayerProfile';
import LoadingSpinner from './components/LoadingSpinner';

interface Tasks {
	_id: string;
	name: string;
	description: string;
	points: number | string;
	createdby: string;
}

interface Players {}

const App: React.FC = () => {
	const [showMobileNav, setShowMobileNav] = React.useState<boolean>(false);
	const [loading, setLoading] = React.useState<boolean>(false);
	const [tasks, setTasks] = React.useState<Tasks[] | null>(null);
	// const [players, setPlayers] = React.useState<Players[] | null>(null);

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
	// console.log('TASKS: ', tasks);

	// React.useEffect(() => {
	// 	setLoading(true);
	//     fetchPlayersData()
	// 		.then((players) => setPlayers(players))
	// 		.finally(() => setLoading(false));
	// }, []);
	// console.log('PLAYERS: ', players);

	if (tasks === null) {
		// Render loading state or placeholder
		return (
				<LoadingSpinner />
		);
	}

	return (
		<>
			<Routes>
				<Route path="/" element={<WelcomPage />} />
				<Route
					path="/tasks"
					element={
						showMobileNav ? (
							<Row>
								<Col>
									<MobileDropDownMenu />
									<Container>
										<TaskHolder tasks={tasks} />
									</Container>
								</Col>
							</Row>
						) : (
							<Row className="d-flex align-items-stretch mx-0">
								<Col xs={2} className="sidebar-column">
									<SideBarNav />
								</Col>
								<Col xs={10} className="d-flex flex-column p-5">
									<Container>
										<TaskHolder tasks={tasks} />
									</Container>
								</Col>
							</Row>
						)
					}
				/>
				<Route
					path="/player-profile"
					element={
						showMobileNav ? (
							<Row>
								<Col>
									<MobileDropDownMenu />
									<Container>
										<PlayerProfile />
									</Container>
								</Col>
							</Row>
						) : (
							<Row className="d-flex align-items-stretch mx-0">
								<Col xs={2} className="sidebar-column">
									<SideBarNav />
								</Col>
								<Col xs={10} className="d-flex flex-column p-5">
									<Container>
										<PlayerProfile />
									</Container>
								</Col>
							</Row>
						)
					}
				/>
			</Routes>
		</>
	);
};

export default App;
