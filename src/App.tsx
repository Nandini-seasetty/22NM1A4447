import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Analytics from './pages/Analytics';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/analytics" component={Analytics} />
      </Switch>
    </Router>
  );
};

export default App;