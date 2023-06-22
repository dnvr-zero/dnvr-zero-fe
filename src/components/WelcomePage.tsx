import * as React from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/WelcomePage.css';

interface WelcomPageProps {}

const WelcomPage: React.FC<WelcomPageProps> = (props) => {
	return (
		<div className="welcome-div">
			<Container className="welcome-container">
				<h1>
					Welcome to DNVR-<i>zero</i>
				</h1>
				<ButtonGroup className="button-group">
					{/* <Button id="welcomeButtonOne">
						Login with <FcGoogle className="icon" />
					</Button> */}
					<Link to="/player-profile">
						<Button id="welcomeButtonOne">
							Login with <FcGoogle className="icon" />
						</Button>
					</Link>
					{/* <Button id="welcomeButtonTwo">
					Login with <FaGithub />
				</Button> */}
					<Link to="/player-signup">
						<Button id="welcomeButtonTwo">
							Login with <FaGithub className="icon" />
						</Button>
					</Link>
				</ButtonGroup>
			</Container>
		</div>
	);
};

export default WelcomPage;
