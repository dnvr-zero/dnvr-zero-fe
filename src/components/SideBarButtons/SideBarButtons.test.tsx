import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBarButtons from './SideBarButtons';

describe('SideBarButtons', () => {
	test('renders all buttons', () => {
		render(
			<Router>
				<SideBarButtons />
			</Router>
		);

		const playerProfileButton = screen.getByRole('button', {
			name: 'Player Profile',
		});
		const tasksButton = screen.getByRole('button', { name: 'Tasks' });
		const eventsButton = screen.getByRole('button', { name: 'Events' });
		const playersButton = screen.getByRole('button', { name: 'Players' });
		const teamsButton = screen.getByRole('button', { name: 'Teams' });
		const learnButton = screen.getByRole('button', {
            name: 'Learn How To Play',
		});
        const fakeButton = screen.queryByRole('button', { name: 'Fake Button' });

		expect(playerProfileButton).toBeInTheDocument();
		expect(tasksButton).toBeInTheDocument();
		expect(eventsButton).toBeInTheDocument();
		expect(playersButton).toBeInTheDocument();
		expect(teamsButton).toBeInTheDocument();
		expect(learnButton).toBeInTheDocument();
        expect(fakeButton).not.toBeInTheDocument();
	});

	test('opens GameInfoModal when Learn How To Play button is clicked', () => {
		render(
			<Router>
				<SideBarButtons />
			</Router>
		);

		const learnButton = screen.getByTestId('learn-button');
		expect(learnButton).toBeInTheDocument();
		fireEvent.click(learnButton);

		const modalTitle = screen.getByText(/Learn How To Play/i, {
			selector: '.modal-title',
		});
		expect(modalTitle).toBeInTheDocument();
	});
});
