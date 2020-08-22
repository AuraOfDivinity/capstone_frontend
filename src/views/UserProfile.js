import React from 'react';

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	FormGroup,
	Form,
	Input,
	Row,
	Col,
} from 'reactstrap';

class UserProfile extends React.Component {
	render() {
		return (
			<>
				<div className="content">
					<Row>
						<Col md="4">
							<Card className="card-user">
								<div className="image">
									<img
										alt="..."
										src={require('assets/img/damir-bosnjak.jpg')}
									/>
								</div>
								<CardBody>
									<div className="author">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className="avatar border-gray"
												src={require('assets/img/mike.jpg')}
											/>
											<h5 className="title">Jane Doe</h5>
										</a>
									</div>

									<br></br>

									<hr />
									<div className="button-container">
										<Row>
											<Col>
												<Button
													className="btn-round"
													color="primary"
													type="submit"
												>
													Update Profile Picture
												</Button>
											</Col>
										</Row>
									</div>
									<hr />
									<br></br>
								</CardBody>
							</Card>
						</Col>

						<Col md="8">
							<Card className="card-user">
								<CardHeader>
									<CardTitle tag="h5">Edit Profile</CardTitle>
								</CardHeader>
								<CardBody>
									<Form>
										<Row>
											<Col className="pr-1" md="6">
												<FormGroup>
													<label>Company/Institute</label>
													<Input
														defaultValue="Soho Institute"
														disabled
														placeholder="Company"
														type="text"
													/>
												</FormGroup>
											</Col>
											<Col className="pl-1" md="6">
												<FormGroup>
													<label>Username</label>
													<Input
														defaultValue="Jane123"
														placeholder="Username"
														type="text"
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col className="pr-1" md="6">
												<FormGroup>
													<label htmlFor="exampleInputEmail1">Email</label>
													<Input placeholder="Email" type="email" />
												</FormGroup>
											</Col>
											<Col className="pl-1" md="6">
												<FormGroup>
													<label>Password</label>
													<Input
														defaultValue="Jane123"
														placeholder="Password"
														type="password"
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col className="pr-1" md="6">
												<FormGroup>
													<label>First Name</label>
													<Input
														defaultValue="Jane"
														placeholder="First Name"
														type="text"
													/>
												</FormGroup>
											</Col>
											<Col className="pl-1" md="6">
												<FormGroup>
													<label>Last Name</label>
													<Input
														defaultValue="Doe"
														placeholder="Last Name"
														type="text"
													/>
												</FormGroup>
											</Col>
										</Row>

										<Row>
											<Col md="12">
												<FormGroup>
													<label>About Me</label>
													<Input type="textarea" />
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<div className="update ml-auto mr-auto">
												<Button
													className="btn-round"
													color="primary"
													type="submit"
												>
													Update Profile
												</Button>
											</div>
										</Row>
									</Form>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</>
		);
	}
}

export default UserProfile;
