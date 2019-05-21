import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import coreActions from 'actions/core';
import Routes from 'routes';
export class App extends Component {
bootstrapAppData = () => {
  this.props.getPostData();
}
componentDidMount() {
  this.bootstrapAppData();
}

render() {
  return (
      <div className="wrapper">
          <main className="bodyStyles">
              <Routes />
          </main>
      </div>
  );
}
}
export default withRouter(connect(null, { ...coreActions})(App));
