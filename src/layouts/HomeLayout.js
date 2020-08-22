import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactUs from "views/ContactUs";
import Pricing from "views/Pricing";
import AboutUs from "views/AboutUs";
import Navbar from "components/Navbars/navbar.component";
import Home from "views/Home";
import Footer2 from "components/Footer/Footer2";
import { PropTypes } from "prop-types";

import Plans from "views/Plans";
import PaymentForm from "views/PaymentForm";

class HomeLayout extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <>
        <div className="">
          <Navbar />
          <Switch>
            <Route
              exact
              path={`${match.path}`}
              render={(props) => <Home {...props} />}
            />
            <Route path={`${match.path}/home`} component={Home} />
            <Route path={`${match.path}/pricing`} component={Pricing} />
            <Route path={`${match.path}/contact`} component={ContactUs} />
            <Route path={`${match.path}/about`} component={AboutUs} />
            <Route path={`${match.path}/plans`} component={Plans} />
            <Route path={`${match.path}/paymentform`} component={PaymentForm} />
          </Switch>
          <Footer2 />
        </div>
      </>
    );
  }
}
HomeLayout.propTypes = {
  match: PropTypes.any.isRequired,
};

export default HomeLayout;
