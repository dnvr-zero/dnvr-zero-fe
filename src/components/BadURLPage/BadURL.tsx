import { Button } from 'react-bootstrap';
import './BadURL.css';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface BadURLProps {}

const BadURL: React.FunctionComponent<BadURLProps> = () => {
	return (
		<div className="badURL-contaner">
			<div className='bad'>
				<h2>That's a bad URL for sure, eh.</h2>
				<Link to="/tasks">
					<Button className='badURL-button'>Return to Tasks</Button>
				</Link>
			</div>
		</div>
	);
};

export default BadURL;
