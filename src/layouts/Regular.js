import React from 'react';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import { Route, Switch } from 'react-router-dom';

//import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import Footer from 'components/Footer/Footer.js';
//import Sidebar from 'components/Sidebar/Sidebar.js';
//import FixedPlugin from 'components/FixedPlugin/FixedPlugin.js';
import NormalNavbar from 'components/Navbars/NormalNavbar.js';

import routes from 'publicRoutes.js';

var ps;

class RegulerLay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			backgroundColor: 'black',
			activeColor: 'info',
		};
		this.mainPanel = React.createRef();
	}
	componentDidMount() {
		if (navigator.platform.indexOf('Win') > -1) {
			ps = new PerfectScrollbar(this.mainPanel.current);
			document.body.classList.toggle('perfect-scrollbar-on');
		}
	}
	componentWillUnmount() {
		if (navigator.platform.indexOf('Win') > -1) {
			ps.destroy();
			document.body.classList.toggle('perfect-scrollbar-on');
		}
	}
	componentDidUpdate(e) {
		if (e.history.action === 'PUSH') {
			this.mainPanel.current.scrollTop = 0;
			document.scrollingElement.scrollTop = 0;
		}
	}
	handleActiveClick = (color) => {
		this.setState({ activeColor: color });
	};
	handleBgClick = (color) => {
		this.setState({ backgroundColor: color });
	};
	render() {
		return (
			<div className="wrapper">
				<div
					className="main-panel"
					style={{
						width: '100%',
						height: '100%',
					}}
					ref={this.mainPanel}
				>
					<NormalNavbar {...this.props} />
					<Switch>
						{routes.map((prop, key) => {
							return (
								<Route
									path={prop.layout + prop.path}
									component={prop.component}
									key={key}
								/>
							);
						})}
					</Switch>
					<Footer fluid />
				</div>
				{/* <FixedPlugin
					bgColor={this.state.backgroundColor}
					activeColor={this.state.activeColor}
					handleActiveClick={this.handleActiveClick}
					handleBgClick={this.handleBgClick}
				/> */}
			</div>
		);
	}
}

export default RegulerLay;
