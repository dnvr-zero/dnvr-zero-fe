import * as React from 'react';
import './LoadingSpinner.css';
import oval from '../../images/oval.svg';

interface LoadingSpinnerProps {
}

const LoadingSpinner: React.FunctionComponent<LoadingSpinnerProps> = (props) => {
    return (
		<>
			<div className="loading-container">
				<img className="loading-image" src={oval} alt="loading" />
			</div>
		</>
	);
};

export default LoadingSpinner;
