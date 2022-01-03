import SignIn from './pages/sign-in-page';
import SignUp from './pages/sign-up-page';
import {Route, Switch, Redirect} from 'react-router-dom'
import MainPage from './pages/dashboard-main-page';
import Individual from './pages/individual';
import Listings from './pages/listings';
import TourAgents from './pages/tour-agents';
import ToursCompleted from './pages/tours-completed';
import Finance from './pages/finance';
import Cancelled from './pages/cancelled';
import LoanApplication from './pages/loan-application';
import LoanApproval from './pages/loan-approval';
import PushNotifications from './pages/push-notifications';
import PaidListing from './pages/paid-listing';

function App() {
  return (
    <Switch>
      <Route exact path = "/sign-up" component = {SignUp}/>
      <Route exact path = "/sign-in" component = {SignIn}/>
      <Route exact path = "/">
        <Redirect to = "/dashboard"/>
      </Route>
      <Route exact path = "/dashboard" component = {MainPage}/>
      <Route exact path = "/individual" component = {Individual}/>
      <Route exact path = "/listings" component = {Listings}/>
      <Route exact path = "/tour-agents" component = {TourAgents}/>
      <Route exact path = "/tours-completed" component = {ToursCompleted}/>
      <Route exact path = "/cancelled" component = {Cancelled}/>
      <Route exact path = "/finance" component = {Finance}/>
      <Route exact path = "/loan-application" component = {LoanApplication}/>
      <Route exact path = "/loan-approval" component = {LoanApproval}/>
      <Route exact path = "/push-notifications" component = {PushNotifications}/>
      <Route exact path = "/paid-listing" component = {PaidListing}/>
    </Switch>
  );
}

export default App;
