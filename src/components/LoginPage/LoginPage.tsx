import * as React from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './LoginPage.css';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
	return (
		<div className="login-div">
			<Container className="login-container">
				<h1>
					Welcome to DNVR-<i>zero</i>
				</h1>
				<ButtonGroup className="button-group">
					{/* <Button id="welcomeButtonOne">
						Login with <FcGoogle className="icon" />
					</Button> */}
					<Link to="/player-profile">
						<Button id="loginButtonOne">
							Login with <FcGoogle className="icon" />
						</Button>
					</Link>
					<Button
						id="loginButtonTwo"
						href="https://dnvr-zero-be.vercel.app/auth"
					>
						Login with <FaGithub className="icon" />
					</Button>
				</ButtonGroup>
			</Container>
		</div>
	);
};

export default LoginPage;
