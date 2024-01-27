import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./base/dashboard/Dashboard'));



const Buttons = lazy(() => import('./base/basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./base/basic-ui/Dropdowns'));
const Typography = lazy(() => import('./base/basic-ui/Typography'));


const BasicElements = lazy(() => import('./base/form-elements/BasicElements'));

const BasicTable = lazy(() => import('./base/tables/BasicTable'));



const Mdi = lazy(() => import('./base/icons/Mdi'));


const ChartJs = lazy(() => import('./base/charts/ChartJs'));

const Error404 = lazy(() => import('./base/error-pages/Error404'));
const Error500 = lazy(() => import('./base/error-pages/Error500'));

const Login = lazy(() => import('./base/user-pages/Login'));
const Register1 = lazy(() => import('./base/user-pages/Register'));
const Lockscreen = lazy(() => import('./base/user-pages/Lockscreen'));

const BlankPage = lazy(() => import('./base/general-pages/BlankPage'));

const Records = lazy(()=> import('./modules/transaction/records'));




class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />


          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />


          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />


          <Route path="/icons/mdi" component={ Mdi } />


          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/general-pages/blank-page" component={ BlankPage } />

          <Route path="/transaction/records" component={Records} />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;