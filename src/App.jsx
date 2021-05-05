import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { login } from 'utils/fetch';
import { setAuthToken } from 'utils/storage';

import './App.css';

import { V1Page } from './pages';

const App = () => {
  useEffect(() => {
    login({
      email: 'ilham@rakamin.com',
      password: 'ilham123',
    })
      .then((res) => {
        console.log('Berhasil login');
        setAuthToken(res.auth_token);
      })
      .catch((err) => {
        console.log(err, 'error login');
      });
  }, []);

  return (
    <Switch>
      <Route exact path="/v1" component={V1Page} />
      <Route path="/" render={() => <Redirect to="/v1" />} />
    </Switch>
  );
};

export default App;
