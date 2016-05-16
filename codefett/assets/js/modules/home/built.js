import React from 'react'

export default class Built extends React.Component {
  render() {
    return (
      <div className="built-with">
        <div className="container">
          <div className="col-sm-12 text-center">
            <h4>BUILT WITH <span className="icon-heart icon-red"></span> USING</h4>
  
              <img className="built-item" src="/static/images/django.png"/>
              <img className="built-item" src="/static/images/react.png"/>
              <img className="built-item" src="/static/images/docker.png"/>
  
          </div>
        </div>
      </div>
    )
  }
  
}
