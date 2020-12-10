import React from 'react';
import Login from '../login/login';
import Home from '../home/home';
import './app.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter>
      <div className='App'>
        {token ? <Redirect from='/' to='/home' /> : <Redirect from='/' to='/login' />}
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/login' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
