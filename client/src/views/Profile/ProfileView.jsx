import React, { Component } from 'react';

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
      <div>
        {(this.state.loaded && (
          <>
            <h1>{user.name}'s Profile</h1>
          </>
        )) || <p>Loading...</p>}
      </div>
    );
  }
}

export default ProfileView;
