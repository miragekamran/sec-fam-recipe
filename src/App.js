import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import RecipesDashboard from './Components/RecipesDashboard';
import Dashboard from './Components/Dashboard';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import RecipeForm from './Components/RecipeForm';
import ProtectedRoute from './utils/PrivateRoute';
import Logout from './Components/LogOut';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/recipeDashboard" component={RecipesDashboard} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
      <ProtectedRoute path="/recipeform" component={RecipeForm} />
      <ProtectedRoute path="/logout" component={Logout} />
      <ProtectedRoute
        path="/dashboard"
        component={Dashboard}
      />
      
    </div>
  );
}

export default App;