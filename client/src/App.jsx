import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

/* ------ Views ------ */
import HomeView from './views/HomeView';
import ErrorView from './views/ErrorView';
import JarSystemInfoView from './views/JarSystemInfoView';

/* ------ Components ------ */
import NavBar from './components/Navbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({
      loaded: true
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" render={() => <HomeView loaded={this.state.loaded} />} exact />
            <Route path="/jarSystemInfo" component={JarSystemInfoView} />

            {/* Error Handling */}
            <Route path="/error" component={ErrorView} />
            <Redirect from="/" to="/error" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
