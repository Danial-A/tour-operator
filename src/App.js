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
      <Route exact path = "/sign-up">
        {
          localStorage.getItem('signedIn') ?  <Redirect to = "/sign-in"/> : <SignUp/> 
        }
      </Route>
      <Route exact path = "/sign-in">
        {
          localStorage.getItem('signedIn') ? <Redirect to = "/dashboard"/> : <SignIn/> 
        }
      </Route>
      <Route exact path = "/">
        <Redirect to = "/dashboard"/>
      </Route>
      <Route exact path = "/dashboard">
        {
          localStorage.getItem('signedIn') ? <MainPage/> : <Redirect to = "/sign-in"/> 
        }
      </Route>
      <Route exact path = "/individual">
        {
          localStorage.getItem('signedIn') ? <Individual/> : <Redirect to = "/sign-in"/> 
        }
      </Route>
      <Route exact path = "/listings">
        {
          localStorage.getItem('signedIn') ? <Listings/> : <Redirect to = "/sign-in"/> 
        }
      </Route>
      <Route exact path = "/tour-agents">
        {
          localStorage.getItem('signedIn') ? <TourAgents/> : <Redirect to = "/sign-in"/> 
        }
      </Route>
      <Route exact path = "/tours-completed">
        {
          localStorage.getItem('signedIn') ? <ToursCompleted/> : <Redirect to = "/sign-in"/> 
        }
      </Route>
      <Route exact path = "/cancelled">
        {
          localStorage.getItem('signedIn') ? <Cancelled/> : <Redirect to = "/sign-in"/> 
        }
      </Route>
      <Route exact path = "/finance">
        {
          localStorage.getItem('signedIn') ? <Finance/> : <Redirect to = "/sign-in"/> 
        }
      </Route>
      <Route exact path = "/loan-application">
        {
          localStorage.getItem('signedIn') ? <LoanApplication/> : <Redirect to = "/sign-in"/> 
        }
      </Route>
      <Route exact path = "/loan-approval">
        {
          localStorage.getItem('signedIn') ? <LoanApproval/> : <Redirect to = "/sign-in"/> 
        }
      </Route>
      <Route exact path = "/push-notifications">
        {
          localStorage.getItem('signedIn') ? <PushNotifications/> : <Redirect to = "/sign-in"/> 
        }
      </Route>
      <Route exact path = "/paid-listing">
        {
          localStorage.getItem('signedIn') ? <PaidListing/> : <Redirect to = "/sign-in"/> 
        }
      </Route>
    </Switch>
  );
}

export default App;
