import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Landing from './modules/Landing'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'

render((
  <Router history={browserHistory}>
  	<Route path="/" component={Landing}/>
    <Route path="/app" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/app/repos" component={Repos}>
        <Route path="/app/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/app/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
