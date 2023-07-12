import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
	it('renders login form with disabled fields and submit button', () => {
		render(<LoginPage />);

		expect(
			screen.getByLabelText('Already Have An Account?')
		).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Enter email')).toBeDisabled();
		expect(screen.getByPlaceholderText('Enter Password')).toBeDisabled();
		expect(screen.getByRole('button', { name: 'Login' })).toBeDisabled();
	});

	it('renders OAuth buttons and link to create account', () => {
		render(<LoginPage />);

		expect(
			screen.getByRole('button', { name: 'Login with Google' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: 'Login with GitHub' })
		).toBeInTheDocument();

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

	it('navigates to /player-profile when clicking "Login with Google" button', () => {
		render(<LoginPage />);

		fireEvent.click(screen.getByRole('button', { name: 'Login with Google' }));

		// Assert the navigation to /player-profile
		expect(window.location.pathname).toBe('/player-profile');
	});

	it('navigates to /player-signup when clicking "Create Account" button', () => {
		render(<LoginPage />);

		fireEvent.click(screen.getByRole('button', { name: 'Create Account' }));

		// Assert the navigation to /player-signup
		expect(window.location.pathname).toBe('/player-signup');
	});
});
