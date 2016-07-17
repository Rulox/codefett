import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, useRouterHistory  } from 'react-router'
import { createHashHistory } from 'history'
import Loader from './components/loader.js'
import Home from './modules/home/home.js'
import Login from './components/users/login.js'
import Register from './components/users/register.js'
import { ajaxRequest } from './utils/utils'

const history = useRouterHistory(createHashHistory)({ queryKey: false })

class App extends React.Component {
  constructor(props) {
    super(props)
    // Load the shared data.
    ajaxRequest(
      '/shared/',
      {},
      (data)=>{
        this.setState({loading: false, data: data})
        window._sharedData = data
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
        <Router history={history}>
          <Route path="/" component={Home}/>
          <Route path="login" component={Login} />
          <Route path="register" component={Register} />
        </Router>
      )
    }
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))