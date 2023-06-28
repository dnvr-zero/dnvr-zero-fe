import * as React from 'react';
import './PlayerProfile.css';
import { Container, Image, Button, Tab, Tabs } from 'react-bootstrap';
import { PlayerProfileProps } from '../../model';

const PlayerProfile: React.FC<PlayerProfileProps> = ({
	name,
	profilePicture,
}) => {
	return (
		<div className="player-profile-div">
			<h1 className="player-profile-title-text">Welcome, {name}</h1>
			<Container className="player-container">
				<Image src={profilePicture} roundedCircle className="profile-image" />
				<div className="text-container">
					<h6>
						<b>Tasks in Progress:</b> 7
					</h6>
					<h6>
						<b>Tasks Completed:</b> 187
					</h6>
					<h6>
						<b>Points Earned:</b> 2,123
					</h6>
				</div>
			</Container>
			<div className="current-task-div">
				<div className="player-task-container">
					<div className='tabs-div'>
						<Tabs
							defaultActiveKey="profile"
							id="justify-tab-example"
							className="tabs-container"
							justify
						>
							<Tab eventKey="home" title="In-Progress">
								Tab content for Home
							</Tab>
							<Tab eventKey="profile" title="Interested">
								Tab content for Profile
							</Tab>
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayerProfile;
