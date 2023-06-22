import * as React from 'react';
import '../styles/PlayerProfile.css';
import { Container, Image, Button } from 'react-bootstrap';

interface PlayerProfileProps {}

const PlayerProfile: React.FC<PlayerProfileProps> = (props) => {
	return (
		<div className="player-profile-div">
			<h1 className="player-profile-title-text">Welcome, Jacky-Boy!</h1>
			<Container className="player-container">
				<Image
					src="https://i.pinimg.com/originals/f1/49/6f/f1496f42d653cba9cdb771190d1ec616.jpg"
					roundedCircle
					className="profile-image"
				/>
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
				<h3 className="current-task-text">Current Tasks</h3>
				<Container className="player-task-container">
					<div className="task-and-button-div">
						<h3>Task Description</h3>{' '}
						<Button className="update-button">Update</Button>
					</div>
					<div className="task-and-button-div">
						<h3>Task Description</h3>{' '}
						<Button className="update-button">Update</Button>
					</div>
					<div className="task-and-button-div">
						<h3>Task Description</h3>{' '}
						<Button className="update-button">Update</Button>
					</div>
					<div className="task-and-button-div">
						<h3>Task Description</h3>{' '}
						<Button className="update-button">Update</Button>
					</div>
					<div className="task-and-button-div">
						<h3>Task Description</h3>{' '}
						<Button className="update-button">Update</Button>
					</div>
					<div className="task-and-button-div">
						<h3>Task Description</h3>{' '}
						<Button className="update-button">Update</Button>
					</div>
					<div className="task-and-button-div">
						<h3>Task Description</h3>{' '}
						<Button className="update-button">Update</Button>
					</div>
					<div className="task-and-button-div">
						<h3>Task Description</h3>{' '}
						<Button className="update-button">Update</Button>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default PlayerProfile;
