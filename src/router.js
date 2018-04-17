import 'normalize.css';
import 'styles/App.styl';

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home';
import Schedule from './components/Schedule';
import Speakers from './components/speakers';
import Sponsors from './components/sponsors';
import About from './components/about';
import Loading from 'stores/loading';

const startLoading = () => {
  Loading.dispatch({type: 'LOADING'});

  setTimeout(() => {
    window.scrollTo(0, 0);
    Loading.dispatch({type: 'HIDE'});
    setTimeout(() => {
      Loading.dispatch({type: 'NOLOADING'});
    }, 700)
  }, 900)
}

const postponeUpdate = () => {

}
const router = () => {
  return (
    <Router history={browserHistory} onUpdate={postponeUpdate}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='schedule' component={Schedule}/>
        <Route path='speakers' component={Speakers} onEnter={startLoading}/>
        <Route path='partners' component={Sponsors} onEnter={startLoading}/>
        <Route path='about' component={About} onEnter={startLoading}/>
      </Route>
    </Router>
  )
}

export default router;
