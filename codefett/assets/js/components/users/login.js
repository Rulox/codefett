import React from 'react'
import {ajaxRequest} from '../../utils/utils.js'
import Loader from '../loader.js'
import {Link} from 'react-router'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  state = {
    loading: false
  }

  login(e) {
    e.preventDefault()

    if (this.state.loading) {
      return;
    }
    
    this.refs.errors.innerHTML = null
    this.setState({loading: true})

    let data = JSON.stringify({
      email: this.refs.user.value,
      password: this.refs.password.value
    })

    ajaxRequest(
      '/users/login/',
      {
        method: 'POST',
        data: data
      },
      (data)=>{
        // On login success
        window.location.href = '/'
      },
      (data) => {
        // On login fail
        this.setState({loading: false})
        this.refs.errors.innerHTML = JSON.parse(data.responseText).message
      }
    )
  }

  render() {
      return (
        <div className="container">
          <div className="login-container">
            <div className="login col-sm-4 col-sm-offset-4">
              <div className="text-center">
                <div className="cf-panel login-form">
                  <div className="panel-header">
                    <Link to="/">
                      <img className="img img-resonsive logo" src="/static/images/logo_small.png"/>
                    </Link>
                    <br/>
                  </div>
                  <div className="panel-body text-center wrapper">

                    <form>

                       <input ref="user" type="text" required placeholder="Email"/>
                       <input ref="password" type="password" required placeholder="Password"/>

                      <button className="btn btn-primary" onClick={this.login}>LOGIN</button>
                    </form>
                    Don't you have an account? <Link to="register">Sign up.</Link>

                    <div className="errors" ref="errors">
                      {this.state.loading ? <Loader insite={true} /> : null}
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}