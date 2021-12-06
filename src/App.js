import SignIn from './pages/sign-in-page';
import SignUp from './pages/sign-up-page';
import {Route, Switch} from 'react-router-dom'
import MainPage from './pages/dashboard-main-page';
import Individual from './pages/individual';

function App() {
  return (
    <Switch>
      <Route exact path = "/sign-up" component = {SignUp}/>
      <Route exact path = "/sign-in" component = {SignIn}/>
      <Route exact path = "/" component = {MainPage}/>
      <Route exact path = "/individual" component = {Individual}/>
    </Switch>
  );
}

export default App;
