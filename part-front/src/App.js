import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header'
import Register from './components/User/Register'
import Login from './components/User/Login'
import CartYoucoder from './components/User/CartYoucoder';
// import RegisterA from './components/Admin/RegisterA'
import Dashboard from './components/Admin/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
      <Router>
        <div className='image'>
        <Header title = 'Cart Youcoders' />
        <div className= 'container '>
          <Switch>
            <Route exact path='/registerUser' component={Register} />
            <Route path='/Login' component={Login} />
            <Route path='/cartYoucoder' component={CartYoucoder} />
            <Route path='/registerAdmin' component={Dashboard} />
            {/* <Dashboard /> */}
          </Switch>
        </div>
        </div>
    </Router>

  );
}

export default App;
