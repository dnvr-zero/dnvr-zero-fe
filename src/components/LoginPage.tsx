import * as React from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';

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
						href="https://github.com/login/oauth/authorize?client_id=c820624d21ec78915700&redirect_uri=http://localhost:8080/oauth/redirect"
					>
						Login with <FaGithub className="icon" />
					</Button>
				</ButtonGroup>
			</Container>
		</div>
	);
};

export default LoginPage;
