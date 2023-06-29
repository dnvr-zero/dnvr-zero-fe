import './PlayerSignUp.css'
import * as React from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';

interface PlayerSignUpProps {}

const PlayerSignUp: React.FC<PlayerSignUpProps> = () => {
	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0];
		// Handle the file upload logic here
	};

	return (
		<div className="form-div">
			<h1 className="player-singup-title-text">
				Sign-Up for DNVR-<i>zero</i>
			</h1>
			<Form className="p-3">
				<Row className="mb-3">
					<Form.Group controlId="formGridProfileImage">
						<Form.Label>Profile Image</Form.Label>
						<Form.Control type="file" onChange={handleFileUpload} />
					</Form.Group>
				</Row>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridFirstName">
						<Form.Label>First Name</Form.Label>
						<Form.Control placeholder="" required />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridLastName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control placeholder="" required />
					</Form.Group>
				</Row>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="" required />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridUserName">
						<Form.Label>Create Username</Form.Label>
						<Form.Control placeholder="" />
					</Form.Group>
				</Row>

				<Form.Group className="mb-3" controlId="formGridAddress1">
					<Form.Label>Address 1</Form.Label>
					<Form.Control placeholder="" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formGridAddress2">
					<Form.Label>Address 2</Form.Label>
					<Form.Control placeholder="" />
				</Form.Group>

				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>City</Form.Label>
						<Form.Control required />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridState" aria-required>
						<Form.Label>State</Form.Label>
						<Form.Select defaultValue="Select State">
							<option>Select State</option>
							<option>AL</option>
							<option>AK</option>
							<option>AZ</option>
							<option>AR</option>
							<option>CA</option>
							<option>CO</option>
							<option>CT</option>
							<option>DE</option>
							<option>FL</option>
							<option>GA</option>
							<option>HI</option>
							<option>ID</option>
							<option>IL</option>
							<option>IN</option>
							<option>IA</option>
							<option>KS</option>
							<option>KY</option>
							<option>LA</option>
							<option>ME</option>
							<option>MD</option>
							<option>MA</option>
							<option>MI</option>
							<option>MN</option>
							<option>MS</option>
							<option>MO</option>
							<option>MT</option>
							<option>NE</option>
							<option>NV</option>
							<option>NH</option>
							<option>NJ</option>
							<option>NM</option>
							<option>NY</option>
							<option>NC</option>
							<option>ND</option>
							<option>OH</option>
							<option>OK</option>
							<option>OR</option>
							<option>PA</option>
							<option>RI</option>
							<option>SC</option>
							<option>SD</option>
							<option>TN</option>
							<option>TX</option>
							<option>UT</option>
							<option>VT</option>
							<option>VA</option>
							<option>WA</option>
							<option>WV</option>
							<option>WI</option>
							<option>WY</option>
						</Form.Select>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridZip">
						<Form.Label>Zip</Form.Label>
						<Form.Control required />
					</Form.Group>
				</Row>
				<div className="button-div">
					<Button className="submit-button" variant="primary" type="submit">
						Submit
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default PlayerSignUp;
