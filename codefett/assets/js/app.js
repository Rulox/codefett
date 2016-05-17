import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Loader from './components/loader.js'
import Home from './modules/home/home.js'
import Login from './components/modals/login.js'
import { ajaxRequest } from './utils/utils'

class App extends React.Component {
  constructor(props) {
    super(props)
    // Load the shared data.
    ajaxRequest(
      '/shared/',
      {},
      (data)=>{
        this.setState({loading: false, data: data})
      }
    )
  }

  state = {
    loading: true
  }

  render() {

    if (this.state.loading) {
      return (<Loader />)
    } else {
      return (
        <Router history={browserHistory}>
          <Route path="/" component={Home}/>
          <Route path="/login" component={Login} />
          {/*
          <Route path="dashboard" component={Users}>
              <Route path="/user/:userId" component={User}/>
            </Route>
          */}
        </Router>
      )
    }
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))