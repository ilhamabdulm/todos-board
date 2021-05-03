import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import { V1Page } from './pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/v1" component={V1Page} />
      <Route path="/" render={() => <Redirect to="/v1" />} />
    </Switch>
  );
};

export default App;
