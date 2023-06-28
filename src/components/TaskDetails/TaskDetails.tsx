import React from 'react';
import {
	OverlayTrigger,
	Card,
	Tooltip,
	Button,
	ButtonGroup,
} from 'react-bootstrap';
import './TaskDetails.css';
import { Link } from 'react-router-dom';

const TaskDetails: React.FC = () => {
	const renderInProgress = (props: any) => (
		<Tooltip id="toolTip" {...props}>
			Add to "In-Progress"
		</Tooltip>
	);

	const renderInterest = (props: any) => (
		<Tooltip id="toolTip" {...props}>
			Add to "Interested"
		</Tooltip>
	);

	return (
		<div className="task-details-container">
			{/* <h1 className="task-details-title-text">TASK NAME Details</h1> */}
			<Card className="main-card">
				<Card.Body>
					<div className="card-div">
						<div className="card-text-div">
							<Card.Title className="card-title">
								Seat Creation And Insertion Phase 2: Implementation
							</Card.Title>
							<div className="created-and-task-text-div">
								<Card.Text>
									<b>Created By:</b> <span className='bold'>Tony Fritz</span>
								</Card.Text>
								<Card.Text>
									<b>Task Points:</b> 250
								</Card.Text>
							</div>
							<div className="in-progress-and-completed-div">
								<h6 className='completed-in-progress-text'>
									<b>Completed:</b> 45
								</h6>
								<h6>|</h6>
								<h6 className='completed-in-progress-text'>
									<b>In-Progress:</b> 187
								</h6>
							</div>
							<Card.Text className="task-description">
								"The quality of any urban environment can be measured by whether
								there are convenient, comfortable places for pedestrians to
								sit." Collect materials for seating system you invented (perhaps
								in Seat Creation And Insertion Phase 1) and install your system
								around the city.
							</Card.Text>
						</div>
					</div>
				</Card.Body>
				<ButtonGroup className="button-container">
					<OverlayTrigger
						placement="bottom"
						delay={{ show: 200, hide: 200 }}
						overlay={renderInProgress}
					>
						{/* <Link to="/tasks/task-details"> */}
							<Button id="button-one">I'll do this task</Button>
						{/* </Link> */}
					</OverlayTrigger>
					<OverlayTrigger
						placement="bottom"
						delay={{ show: 200, hide: 200 }}
						overlay={renderInterest}
					>
						<Button id="button-two">I'm Interested</Button>
					</OverlayTrigger>
				</ButtonGroup>
			</Card>
		</div>
	);
};

export default TaskDetails;
