import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { loginUser } from '../state/actions/authAction';
import { connect } from 'react-redux';
import NotificationAlert from 'react-notification-alert';

import {
	Card,
	FormGroup,
	Label,
	Input,
	FormText,
	Button,
	CardBody,
	CardHeader,
	CardTitle,
	Row,
	Col,
} from 'reactstrap';

import Main from '../assets/img/Main.jpg';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}
	notificationAlert = React.createRef();

	componentWillReceiveProps(nextProps) {
		if (nextProps.error?.msg) {
			let options = {};
			options = {
				place: 'br',
				message: (
					<div>
						<div>{nextProps.error?.msg}</div>
					</div>
				),
				type: 'danger',
				icon: 'nc-icon nc-bell-55',
				autoDismiss: 7,
			};
			this.notificationAlert.current.notificationAlert(options);
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.loginUser(this.state, this.props.history);
	};

	onChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<>
				<div
					className="content"
					style={{
						background: `url(${Main})`,

						backgroundSize: 'cover',
						height: '100%',
						overflow: 'hidden',
					}}
				>
					<NotificationAlert ref={this.notificationAlert} />

					<Row>
						<Col lg="4" md="5" sm="12" style={{ margin: '7% auto' }}>
							<Card className="card-user">
								<div className="author">
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										<img
											alt="..."
											className="avatar border-gray"
											src={require('assets/img/propic.png')}
										/>
									</a>
								</div>

								<CardHeader className="text-center">
									<CardTitle tag="h3">Sign in</CardTitle>
								</CardHeader>

								<CardBody>
									<form onSubmit={this.handleSubmit}>
										<FormGroup>
											<Label for="exampleEmail">Email address</Label>
											<Input
												type="email"
												name="email"
												id="exampleEmail"
												placeholder="Enter email"
												onChange={this.onChange}
											/>
											<FormText color="muted">
												We'll never share your email with anyone else.
											</FormText>
										</FormGroup>
										<FormGroup>
											<Label for="examplePassword">Password</Label>
											<Input
												type="password"
												name="password"
												id="examplePassword"
												placeholder="Password"
												onChange={this.onChange}
											/>
										</FormGroup>

										<br></br>
										<FormGroup check>
											<FormText>
												Don't have an account?
												<Link to={{ pathname: '/RegulerLay/registerNew' }}>
													Register here!
												</Link>
											</FormText>
										</FormGroup>

										<br></br>

										<Button color="primary" size="lg" block type="submit">
											Login
										</Button>
									</form>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	error: state.error,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
