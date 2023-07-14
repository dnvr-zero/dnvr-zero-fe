import * as React from 'react';
import SideBarNav from './components/SideBarNav/SideBarNav';
import MobileDropDownMenu from './components/MobileDropDownMenu/MobileDropDownMenu';
import { Row, Col, Container } from 'react-bootstrap';
import { fetchTaskData } from './apiCalls';
// import { fetchTaskData, fetchPlayersData } from './apiCalls';
import LoginPage from './components/LoginPage/LoginPage';
import BadURL from './components/BadURLPage/BadURL';
import { Routes, Route } from 'react-router-dom';
import TaskHolder from './components/TaskHolder/TaskHolder';
import PlayerProfile from './components/PlayerProfile/PlayerProfile';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import PlayerSignUp from './components/PlayerSignUp/PlayerSignUp';
import { Tasks } from './model';
// import { Tasks, Players } from './model';
import useGitHubOAuth from './hooks/useGitHubOAuth';
import useMobileNav from './hooks/useMobileNav';
import TaskDetails from './components/TaskDetails/TaskDetails';
// import AllPlayersPage from './components/AllPlayersPage/AllPlayersPage';

const App: React.FC = () => {
	const [tasks, setTasks] = React.useState<Tasks[] | null>(null);
	// const [players, setPlayers] = React.useState<Players[] | null>(null);
	// const [loading, setLoading] = React.useState<boolean>(false);

	React.useEffect(() => {
		// setLoading(true);
		fetchTaskData()
			.then((tasks) => setTasks(tasks.data))
			.catch((error) => {
				console.error('App.tsx Failed to fetch "Tasks":', error);
			});
		// .finally(() => setLoading(false));
	}, []);

	// React.useEffect(() => {
	// 	setLoading(true);
	// 	fetchPlayersData()
	// 		.then((players) => setPlayers(players))
	// 		.finally(() => setLoading(false));
	// }, []);
	// console.log('PLAYERS: ', players);

	const userData = useGitHubOAuth();
	const showMobileNav = useMobileNav();

	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/player-signup" element={<PlayerSignUp />} />
			<Route
				path="/tasks"
				element={
					<>
						{/* {loading && <LoadingSpinner />} */}
						{showMobileNav ? (
							<Container>
								<Col>
									<MobileDropDownMenu />
									<TaskHolder tasks={tasks} />
								</Col>
							</Container>
						) : (
							<Container>
								<Row>
									<Col xs={2}>
										<SideBarNav />
									</Col>
									<Col xs={10}>
										<TaskHolder tasks={tasks} />
									</Col>
								</Row>
							</Container>
						)}
					</>
				}
			/>
			<Route
				path={`/player-profile`}
				element={
					<>
						{/* {loading && <LoadingSpinner />} */}
						{showMobileNav ? (
							<Container>
								<Row>
									<Col>
										<MobileDropDownMenu />
										<PlayerProfile
											name={userData?.name || ''}
											profilePictureUrl={userData?.profilePictureUrl || ''}
											userName={userData?.userName || ''}
										/>
									</Col>
								</Row>
							</Container>
						) : (
							<Container>
								<Row>
									<Col xs={2}>
										<SideBarNav />
									</Col>
									<Col xs={10}>
										<PlayerProfile
											name={userData?.name || ''}
											profilePictureUrl={userData?.profilePictureUrl || ''}
											userName={userData?.userName || ''}
										/>
									</Col>
								</Row>
							</Container>
						)}
					</>
				}
			/>
			<Route
				path={`/tasks/task-details`}
				element={
					<>
						{/* {loading && <LoadingSpinner />} */}
						{showMobileNav ? (
							<Row>
								<Col>
									<MobileDropDownMenu />
									<TaskDetails />
								</Col>
							</Row>
						) : (
							<Row className="sidebar-row">
								<Col xs={2} className="sidebar-column">
									<SideBarNav />
								</Col>
								<Col xs={10} className="column p-5">
									<TaskDetails />
								</Col>
							</Row>
						)}
					</>
				}
			/>
			{/* <Route
				path={`/all-players`}
				element={
					<>
						{loading && <LoadingSpinner />}
						{showMobileNav ? (
							<Row>
								<Col>
									<MobileDropDownMenu />
									<AllPlayersPage players={players}/>
								</Col>
							</Row>
						) : (
							<Row className="sidebar-row">
								<Col xs={2} className="sidebar-column">
									<SideBarNav />
								</Col>
								<Col xs={10} className="column p-5">
									<AllPlayersPage players={players}/>
								</Col>
							</Row>
						)}
					</>
				}
			/> */}
			<Route
				path="*"
				element={
					<div>
						<BadURL />
					</div>
				}
			/>
		</Routes>
	);
};

export default App;
