import React from 'react'
import {ajaxRequest} from '../../utils/utils.js'
import Loader from '../loader.js'
import {Link} from 'react-router'

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
  }

  state = {
    loading: false
  }

  register(e) {
    e.preventDefault()

    if (this.state.loading) {
      return;
    }
    
    this.refs.errors.innerHTML = null
    this.setState({loading: true})

    let data = JSON.stringify({
      full_name: this.refs.full_name.value,
      email: this.refs.user.value,
      password1: this.refs.password1.value,
      password2: this.refs.password2.value
    })

    ajaxRequest(
      '/users/register/',
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

                      <input ref="full_name" type="text" required placeholder="Full Name"/>
                      <input ref="user" type="text" required placeholder="Email"/>
                      <input ref="password1" type="password" required placeholder="Password"/>
                      <input ref="password2" type="password" required placeholder="Repeat Password"/>

                      <button className="btn btn-primary" onClick={this.register}>REGISTER</button>
                    </form>
                    Do you have already an account? <Link to="login">Log in.</Link>

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