import * as React from 'react';
import { Container, Button, ButtonGroup, Form } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './LoginPage.css';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
	return (
		<div className="login-div">
			<Container className="login-container">
				<h1 className="title-text">
					Welcome to DNVR-<i>zero</i>
				</h1>
				<Form className="login-form-holder">
					<Form.Label>Already Have An Account?</Form.Label>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Enter email" disabled />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						{/* <Form.Label>Password</Form.Label> */}
						<Form.Control
							type="password"
							placeholder="Enter Password"
							disabled
						/>
					</Form.Group>
					<Button type="submit" id="submitButton" disabled>
						Login
					</Button>
				</Form>
				<ButtonGroup className="button-group">
					<p>OR</p>
					<div className="oauth-buttons-div">
						{/* <Button id="welcomeButtonOne">
						Login with <FcGoogle className="icon" />
					</Button> */}
						<Link to="/player-profile">
							<Button data-testid="googleOAuthButton" id="googleOAuthButton">
								Login with <FcGoogle className="google-icon" />
							</Button>
						</Link>
						<Button
							data-testid="gitHubOAuthButton"
							id="gitHubOAuthButton"
							// href="http://localhost:8000/auth"
							href="https://dnvr-zero-be.vercel.app/auth"
						>
							Login with <FaGithub className="github-icon" />
						</Button>
					</div>

					<div className="guest-and-new-user-div-parent">
						<p>Don't have an account? No worries!</p>
						<div className="guest-and-new-user-div-child">
							<Link to="/tasks" style={{ textDecoration: 'none' }}>
								<Button id="guestLogin">Login as Guest</Button>
							</Link>
							<Link to="/player-signup" style={{ textDecoration: 'none' }}>
								<Button id="createNewUser">Create Account</Button>
							</Link>
						</div>
					</div>
				</ButtonGroup>
			</Container>
		</div>
	);
};

export default LoginPage;
