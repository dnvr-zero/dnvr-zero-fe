import * as React from 'react';
import SideBarNav from './components/SideBarNav';
import MobileDropDownMenu from './components/MobileDropDownMenu';
import { Row, Col } from 'react-bootstrap';
import { fetchTaskData, fetchPlayersData } from './apiCalls';
import LoginPage from './components/LoginPage';
import { Routes, Route } from 'react-router-dom';
import TaskHolder from './components/TaskHolder';
import PlayerProfile from './components/PlayerProfile';
import LoadingSpinner from './components/LoadingSpinner';
import PlayerSignUp from './components/PlayerSignUp';
import { Tasks } from './model';

// interface Players {
//     _id: string;
//     level: number;
//     name: string;
//     score: number;
// }

const App: React.FC = () => {
	const [showMobileNav, setShowMobileNav] = React.useState<boolean>(false);
	const [tasks, setTasks] = React.useState<Tasks[] | null>(null);
	const [loading, setLoading] = React.useState<boolean>(false);
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
			.then((tasks) => setTasks(tasks.data))
			.finally(() => setLoading(false));
	}, []);

	// React.useEffect(() => {
	// 	setLoading(true);
	//     fetchPlayersData()
	// 		.then((players) => setPlayers(players))
	// 		.finally(() => setLoading(false));
	// }, []);
	// console.log('PLAYERS: ', players);

	///////////////////////////////////////////////////////////////////////////
	// FUTURE ===> CREATE CUSTOM HOOK FOR THE GITHUB OAUTH
	const [nameNode, setNameNode] = React.useState('');
	const [profilePicture, setProfilePicture] = React.useState('');

	const urlParams = new URLSearchParams(window.location.search);
	const token = urlParams.get('token');

	React.useEffect(() => {
		fetch('https://api.github.com/user', {
			headers: {
				Accept: 'application/vnd.github.v3+json',
				Authorization: 'token ' + token,
			},
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res, "res")
				const profilePictureUrl = res.avatar_url;
				setProfilePicture(profilePictureUrl);

				const name = res.name;
				setNameNode(name);
			});
	}, [token]);
	///////////////////////////////////////////////////////////////////////////

	return (
		<>
			{loading ? (
				<LoadingSpinner />
			) : (
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/player-signup" element={<PlayerSignUp />} />
					<Route
						path="/tasks"
						element={
							showMobileNav ? (
								<Row>
									<Col>
										<MobileDropDownMenu />
										<TaskHolder tasks={tasks} />
									</Col>
								</Row>
							) : (
								<Row className="sidebar-row">
									<Col xs={2} className="sidebar-column">
										<SideBarNav />
									</Col>
									<Col xs={10} className="column p-5">
										<TaskHolder tasks={tasks} />
									</Col>
								</Row>
							)
						}
					/>
					)
					<Route
						path={`/player-profile`}
						element={
							showMobileNav ? (
								<Row>
									<Col>
										<MobileDropDownMenu />
										<PlayerProfile
											nameNode={nameNode}
											profilePicture={profilePicture}
										/>
									</Col>
								</Row>
							) : (
								<Row className="sidebar-row">
									<Col xs={2} className="sidebar-column">
										<SideBarNav />
									</Col>
									<Col xs={10} className="column p-5">
										<PlayerProfile
											nameNode={nameNode}
											profilePicture={profilePicture}
										/>
									</Col>
								</Row>
							)
						}
					/>
				</Routes>
			)}
		</>
	);
};

export default App;
