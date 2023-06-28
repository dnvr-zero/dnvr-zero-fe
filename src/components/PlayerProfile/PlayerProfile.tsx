import * as React from 'react';
import './PlayerProfile.css';
import { Container, Image, Button, Tab, Tabs } from 'react-bootstrap';
import { PlayerProfileProps } from '../../model';
import InProgressTaskModal from '../InProgressTaskModal/InProgressTaskModal';

const PlayerProfile: React.FC<PlayerProfileProps> = ({
	name,
	profilePicture,
}) => {
	const [showInProgressTaskModal, setShowInProgressTaskModal] =
		React.useState<boolean>(false);

	return (
		<div className="player-profile-div">
			<h1 className="player-profile-title-text">Welcome, {name}</h1>
			<Container className="player-container">
				<Image src={profilePicture} roundedCircle className="profile-image" />
				<div className="text-container">
					<h6>
						<b className="profile-link">Tasks Completed:</b> 187
					</h6>
					<h6>
						<b>Points Earned:</b> 2,123
					</h6>
				</div>
			</Container>
			<div className="current-task-div">
				<div className="player-task-container">
					<div className="tabs-div">
						<Tabs
							defaultActiveKey="profile"
							id="justify-tab-example"
							className="tabs-container"
							justify
						>
							<Tab eventKey="profile" title="In-Progress: 8">
								<Container className="task-tab-container">
									<div>
										<Button
											className="in-progress-task-button-container"
											onClick={() => setShowInProgressTaskModal(true)}
										>
											<h3 className="in-progress-task-title">
												In-Progress Task Name
											</h3>
										</Button>
										<InProgressTaskModal
											show={showInProgressTaskModal}
											onHide={() => setShowInProgressTaskModal(false)}
											// key={1}
											// _id={1}
											// name='Jerry Task'
											// description='Some Description'
											// points='87'
											// createdby='Jerry'
										/>
									</div>
								</Container>
							</Tab>
							<Tab eventKey="home" title="Interested: 3">
								<Container className="task-tab-container">
									<div>
										<Button className="interested-task-button-container">
											<h3 className="interested-task-title">
												Interested Task Name
											</h3>
										</Button>
										<Button className="interested-task-button-container">
											<h3 className="interested-task-title">
												Interested Task Name
											</h3>
										</Button>
										<Button className="interested-task-button-container">
											<h3 className="interested-task-title">
												Interested Task Name
											</h3>
										</Button>
									</div>
								</Container>
							</Tab>
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayerProfile;
