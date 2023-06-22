import * as React from 'react';
import '../styles/PlayerProfile.css';
import { Container, Image, Col, Button } from 'react-bootstrap';

interface PlayerProfileProps {}

const PlayerProfile: React.FC<PlayerProfileProps> = (props) => {
	return (
		<div className="player-profile-div">
			<h1 className="player-profile-title-text">Welcome, Jacky-Boy!</h1>
			<Container className="player-container">
				<Image
					src="https://media.licdn.com/dms/image/D4E35AQGaj64FvdMTwQ/profile-framedphoto-shrink_400_400/0/1675969208903?e=1687993200&v=beta&t=_K8-Tf76Z3_Y3qvGwod6mJCQjeasH59RL7qk0IL57jc"
					roundedCircle
					className="profile-image"
				/>
				<h3>Tasks Completed: 187</h3>
				<h3>Points Earned: 2,123</h3>
			</Container>
			<Container className="player-task-container">
				<div className="task-and-button-div">
					<h2>Task Description</h2>{' '}
					<Button className="update-button">Update</Button>
				</div>
				<div className="task-and-button-div">
					<h2>Task Description</h2>{' '}
					<Button className="update-button">Update</Button>
				</div>
				<div className="task-and-button-div">
					<h2>Task Description</h2>{' '}
					<Button className="update-button">Update</Button>
				</div>
				<div className="task-and-button-div">
					<h2>Task Description</h2>{' '}
					<Button className="update-button">Update</Button>
				</div>
				<div className="task-and-button-div">
					<h2>Task Description</h2>{' '}
					<Button className="update-button">Update</Button>
				</div>
				<div className="task-and-button-div">
					<h2>Task Description</h2>{' '}
					<Button className="update-button">Update</Button>
				</div>
				<div className="task-and-button-div">
					<h2>Task Description</h2>{' '}
					<Button className="update-button">Update</Button>
				</div>
				<div className="task-and-button-div">
					<h2>Task Description</h2>{' '}
					<Button className="update-button">Update</Button>
				</div>
				<div className="task-and-button-div">
					<h2>Task Description</h2>{' '}
					<Button className="update-button">Update</Button>
				</div>
				<div className="task-and-button-div">
					<h2>Task Description</h2>{' '}
					<Button className="update-button">Update</Button>
				</div>
			</Container>
		</div>
	);
};

export default PlayerProfile;
