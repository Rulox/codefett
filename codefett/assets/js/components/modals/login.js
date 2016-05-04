import React from "react"

export default class Login extends React.Component {
  render() {
    return (
      <div className="login" style={{height: document.documentElement.clientHeight }}>
          <div className="container text-center">
            <div className="cf-panel login-form">
              <div className="panel-header">
                <img className="img img-resonsive" src="/static/images/logo_small.png"/>
              </div>

              <div className="panel-body text-center">

                <form>
                  <fieldset className="form-group has-feedback">
                    <input type="text" className="form-control" id="email" placeholder="Email"/>
                    <i className="glyphicon glyphicon-user form-control-feedback"></i>
                  </fieldset>
                  <fieldset className="form-group has-feedback">
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                    <i className="glyphicon glyphicon-lock form-control-feedback"></i>
                  </fieldset>
                  <button className="btn btn-primary">LOGIN</button>
                </form>
                <hr/>
                Don't you have an account? <a href="#">Sign up.</a>

              </div>
          </div>
        </div>
      </div>
    )
  }
}