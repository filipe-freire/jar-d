import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { checkUser, signOut } from './services/authentication';
import './App.css';

/* ------ Views ------ */
import HomeView from './views/HomeView';
import ErrorView from './views/ErrorView';
import JarSystemInfoView from './views/JarSystemInfoView';
import AuthSignUpView from './views/Authentication/SignUpView';
import AuthSignInView from './views/Authentication/SignInView';
import ProfileView from './views/Profile/ProfileView';

/* ------ Components ------ */
import NavBar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      user: null
    };
  }

  handleSignOut = () => {
    signOut()
      .then(() => {
        this.handleUserUpdate(null);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleUserUpdate = user => {
    this.setState({
      user
    });
  };

  componentDidMount() {
    checkUser()
      .then(data => {
        const user = data.user;
        this.handleUserUpdate(user);
        this.setState({
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar user={this.state.user} onSignOut={this.handleSignOut} />
          {(this.state.loaded && (
            <Switch>
              <Route path="/" render={() => <HomeView loaded={this.state.loaded} />} exact />
              <Route path="/jarSystemInfo" component={JarSystemInfoView} />

              {/* Auth Routes */}
              <ProtectedRoute
                path="/authentication/sign-up"
                render={props => <AuthSignUpView {...props} onUserUpdate={this.handleUserUpdate} />}
                authorized={!this.state.user}
                redirect="/"
              />
              <ProtectedRoute
                path="/authentication/sign-in"
                render={props => <AuthSignInView {...props} onUserUpdate={this.handleUserUpdate} />}
                authorized={!this.state.user}
                redirect="/"
              />

              {/* User Profile */}
              <ProtectedRoute
                path="/profile"
                render={props => <ProfileView {...props} user={this.state.user} />}
                authorized={this.state.user}
                redirect="/"
              />

              {/* Error Handling */}
              <Route path="/error" component={ErrorView} />
              <Redirect from="/" to="/error" />
            </Switch>
          )) || (
            <div>
              <h1>Loading...</h1>
            </div>
          )}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
