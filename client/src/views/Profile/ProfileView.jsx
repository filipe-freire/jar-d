import React, { Component } from 'react';
import Layout from '../../components/Layout';

export class ProfileView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const user = this.props.user;
    return (
      <>
        {(this.state.loaded && (
          <Layout headerTitle={`${user.name}'s Profile`}>
            <div className="container">
              <h2>Welcome to your Dashboard</h2>
            </div>
          </Layout>
        )) || <p>Loading...</p>}
      </>
    );
  }
}

export default ProfileView;
