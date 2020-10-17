import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

//exporting the component and the loadData function (if present)
//in the form of an object(key:value pair)
// to avoid overlap of different loadData function imports in Routes

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
};
