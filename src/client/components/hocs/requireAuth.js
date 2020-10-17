import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <div>Loading...</div>;
        default:
          /*user singed in*/
          return (
            <ChildComponent
              {...this
                .props} /*passes any props passed to the HOC to the Child Component */
            />
          );
      }
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(mapStateToProps)(RequireAuth);
};
