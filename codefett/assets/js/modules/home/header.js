import React from 'react'
import NavbarHeader from '../navbar/navbar-header.js'
import NavbarMobile from '../navbar/navbar-mobile';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header">

        <div className="homepage-hero-module">
            <div className="header-cover"></div>

            <NavbarHeader />
            <NavbarMobile />

            <div className="container content">
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2 text-center">
                  <div className="row">
                    <h1> CODE, TEST, LEARN, TEACH. </h1>
                    <p> Create your course or be a student. Automated programming platform.</p>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-lg-offset-4">
                      <button className="btn btn-primary">GET STARTED NOW!</button>
                    </div>
                  </div>
                  <div className="row">
                    <icon className="icon icon-circle-down"/>
                  </div>
                </div>
              </div>
            </div>

        </div>

      </div>
    )
  }
}

