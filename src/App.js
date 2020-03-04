import React from 'react';
import { withAppInstall } from './components/AppInstall';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Components
import Navigation from './components/Navigation';

// Services
import { debug } from './services/browser';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MediaRecorder from './pages/MediaRecorder';
import DefaultCameraInput from './pages/DefaultCameraInput';
import Sandbox from './pages/Sandbox';

const App = props => {
  return (
    <Router basename="/react-pwa">
      <div className="App">
        <Navigation />
        {debug()}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/default-camera-input" component={DefaultCameraInput} />
          <Route path="/media-recorder-capture" component={MediaRecorder} />
          <Route path="/sandbox" component={Sandbox} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default withAppInstall(App);
