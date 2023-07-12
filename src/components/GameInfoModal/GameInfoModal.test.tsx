import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GameInfoModal from './GameInfoModal';
import SideBarNav from '../SideBarNav/SideBarNav';
import { BrowserRouter } from 'react-router-dom';
import TaskHolder from '../TaskHolder/TaskHolder';
import { Tasks } from '../../model';

const mockTasks: Tasks[] = [
	{
		_id: '01',
		name: 'Build A Bridge',
		description: 'You wont!',
		points: '250',
		createdby: 'D-Money',
	},
];

describe('GameInfoModal', () => {
	test('should display modal when show prop is true', () => {
		render(<GameInfoModal show={true} onHide={() => {}} />);
		const modalTitle = screen.getByText(/learn how to play/i);
		expect(modalTitle).toBeInTheDocument();
	});

	test('should not display modal when show prop is false', () => {
		render(<GameInfoModal show={false} onHide={() => {}} />);
		const modalTitle = screen.queryByText(/learn how to play/i);
		expect(modalTitle).not.toBeInTheDocument();
	});

	test('should call onHide function when modal is closed', () => {
		const onHideMock = jest.fn();
		render(<GameInfoModal show={true} onHide={onHideMock} />);
		const closeButton = screen.getByRole('button', { name: /close/i });
		fireEvent.click(closeButton);
		expect(onHideMock).toHaveBeenCalledTimes(1);
	});

	test('should display the modal content after clicking the modal button', () => {
		render(
			<BrowserRouter>
				<SideBarNav />
				<TaskHolder tasks={mockTasks} />
			</BrowserRouter>
		);
		const modalButton = screen.getByRole('button', {
			name: /learn how to play/i,
		});

		expect(modalButton).toBeInTheDocument();
		// eslint-disable-next-line testing-library/no-unnecessary-act
		act(() => userEvent.click(modalButton));

		const modalContentOne = screen.getByText(/you put your left hand in!/i);
		const modalContentTwo = screen.getByText(/you put your left hand out!/i);
		const modalContentThree = screen.getByText(
			/you put your left hand in and you shake it all about!/i
		);
		const modalContentFour = screen.getByText(
			/you do the hokey-pokey and you turn yourself around!/i
		);
		const modalContentFive = screen.getByText(/that's what it's all about!/i);
		const modalContentSix = screen.queryByText(/don't do drugs/i);

		expect(modalContentOne).toBeInTheDocument();
		expect(modalContentTwo).toBeInTheDocument();
		expect(modalContentThree).toBeInTheDocument();
		expect(modalContentFour).toBeInTheDocument();
		expect(modalContentFive).toBeInTheDocument();
		expect(modalContentSix).not.toBeInTheDocument();
	});
});
