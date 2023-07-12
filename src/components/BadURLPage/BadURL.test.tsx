import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BadURL from './BadURL';

describe('BadURL', () => {
	const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
		window.history.pushState({}, 'Test page', route);

		return render(<MemoryRouter>{ui}</MemoryRouter>);
	};

	const clickButtonAndAssertURL = (buttonText: string, expectedURL: string) => {
		renderWithRouter(<BadURL />, { route: '/tasks' });

		const button = screen.getByText(buttonText);
		fireEvent.click(button);

		expect(window.location.pathname).toBe(expectedURL);
	};

	it('renders the error message correctly', () => {
		renderWithRouter(<BadURL />, { route: '/bad-url' });

		const errorMessage = screen.getByText("That's a bad URL for sure, eh.");
		const errorMessageAlt = screen.queryByText(
			"That's some good stuff for sure, eh."
		);

		expect(errorMessage).toBeInTheDocument();
		expect(errorMessageAlt).not.toBeInTheDocument();
	});

	it('navigates to the "/tasks" page when "Return to Tasks" button is clicked', () => {
		clickButtonAndAssertURL('Return to Tasks', '/tasks');
	});
});
