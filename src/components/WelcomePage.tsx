import * as React from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import '../styles/WelcomePage.css';

interface WelcomPageProps {}

const WelcomPage: React.FunctionComponent<WelcomPageProps> = (props) => {
	return (
		<Container className="welcome-container">
			<h1>
				Welcome to DNVR-<i>zero</i>
			</h1>
			<ButtonGroup className='button-group'>
				<Button className="welcome-button">Login with <FcGoogle /></Button>
				<Button className="welcome-button">Login with <FaGithub /></Button>
			</ButtonGroup>
		</Container>
	);
};

export default WelcomPage;
