import React from 'react';
import { render, screen } from '@testing-library/react';
import AllPlayersPage from './AllPlayersPage';
import { Players } from '../../model';

// Mocked player data for testing
const mockPlayers: Players[] = [
	{
		_id: '1',
		level: 'Beginner',
		name: 'John Jacob Jingleheimer Schmidt',
		score: 100,
		email: 'johnnyboy@example.com',
	},
	{
		_id: '2',
		level: 'Intermediate',
		name: 'Plain Jane Jenkins',
		score: 200,
		email: 'janesays@example.com',
	},
];

describe('AllPlayersPage', () => {
	test('renders players correctly', () => {
		render(<AllPlayersPage players={mockPlayers} />);

		const singlePlayers = screen.getAllByTestId('single-player');

		expect(singlePlayers).toHaveLength(2);
		expect(singlePlayers).not.toHaveLength(3);
	});

	test("check if players' names are rendered", () => {
		render(<AllPlayersPage players={mockPlayers} />);

		const playerOneName = screen.getByText('John Jacob Jingleheimer Schmidt');
		const playerOneLevel = screen.getByText('Beginner');
		const playerOneScore = screen.getByText(100);
		const playerOneEmail = screen.getByText('johnnyboy@example.com');

		const playerTwoName = screen.queryByText('Plain Jane Jenkins');
        const playerTwoLevel = screen.queryByText('Intermediate');
		const playerTwoScore = screen.queryByText(200);
		const playerTwoEmail = screen.queryByText('janesays@example.com');
		
        const playerThreeName = screen.queryByText('Bill Blasky');
        const playerThreeLevel = screen.queryByText('Master');
		const playerThreeScore = screen.queryByText(89743259875);
		const playerThreeEmail = screen.queryByText('billblaskyblasts@example.com');

		expect(playerOneName).toBeInTheDocument();
		expect(playerOneLevel).toBeInTheDocument();
		expect(playerOneScore).toBeInTheDocument();
		expect(playerOneEmail).toBeInTheDocument();

		expect(playerTwoName).toBeInTheDocument();
		expect(playerTwoLevel).toBeInTheDocument();
		expect(playerTwoScore).toBeInTheDocument();
		expect(playerTwoEmail).toBeInTheDocument();

        expect(playerThreeName).not.toBeInTheDocument();
		expect(playerThreeLevel).not.toBeInTheDocument();
		expect(playerThreeScore).not.toBeInTheDocument();
		expect(playerThreeEmail).not.toBeInTheDocument();
	});

	test('renders "Players" title', () => {
		render(<AllPlayersPage players={mockPlayers} />);

        const singlePlayers = screen.getByText('Players')
        const singlePlayas = screen.queryByText('Playas')

		expect(singlePlayers).toBeInTheDocument();
		expect(singlePlayas).not.toBeInTheDocument();
	});
});
