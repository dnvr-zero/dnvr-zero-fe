import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';
import { BrowserRouter } from 'react-router-dom';

describe('LoginPage', () => {
	test('renders login form with disabled fields and submit button', () => {
		render(
			<BrowserRouter>
				<LoginPage />
			</BrowserRouter>
		);

		expect(screen.getByText('Already Have An Account?')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Enter email')).toBeDisabled();
		expect(screen.getByPlaceholderText('Enter Password')).toBeDisabled();
		expect(screen.getByRole('button', { name: 'Login' })).toBeDisabled();
	});

	test('renders OAuth buttons and link to create account', () => {
		render(
			<BrowserRouter>
				<LoginPage />
			</BrowserRouter>
		);

		expect(screen.getByTestId('googleOAuthButton')).toBeInTheDocument();

		expect(screen.getByTestId('gitHubOAuthButton')).toBeInTheDocument();

		expect(screen.queryByTestId('facebookOAuthButton')).not.toBeInTheDocument();

		expect(
			screen.getByText("Don't have an account? No worries!")
		).toBeInTheDocument();

		expect(
			screen.getByRole('button', { name: 'Login as Guest' })
		).toBeInTheDocument();

		expect(
			screen.getByRole('button', { name: 'Create Account' })
		).toBeInTheDocument();
	});

	test('navigates to /player-profile when clicking "Login with Google" button', () => {
		render(
			<BrowserRouter>
				<LoginPage />
			</BrowserRouter>
		);

		fireEvent.click(screen.getByTestId('googleOAuthButton'));

		expect(window.location.pathname).toBe('/player-profile');
	});

	// NEED TO RE-WORK THIS TO TEST THE GITHUB OAUTH PROCESS
	// test.only('navigates to /player-profile when clicking "Login with GitHub button', () => {
	// 	render(
	// 		<BrowserRouter>
	// 			<LoginPage />
	// 		</BrowserRouter>
	// 	);

	// 	fireEvent.click(screen.getByTestId('gitHubOAuthButton'));

	// 	expect(window.location.pathname).toBe('/player-profile');
	// });

	test('navigates to /TASKS when clicking "Login as Guest" button', () => {
		render(
			<BrowserRouter>
				<LoginPage />
			</BrowserRouter>
		);

		fireEvent.click(screen.getByRole('button', { name: 'Login as Guest' }));

		expect(window.location.pathname).toBe('/tasks');
		expect(window.location.pathname).not.toBe('/task');
	});

	test('navigates to /player-signup when clicking "Create Account" button', () => {
		render(
			<BrowserRouter>
				<LoginPage />
			</BrowserRouter>
		);

		fireEvent.click(screen.getByRole('button', { name: 'Create Account' }));

		expect(window.location.pathname).toBe('/player-signup');
		expect(window.location.pathname).not.toBe('/players-signup');
	});
});
