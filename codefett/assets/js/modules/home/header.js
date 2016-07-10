import React from 'react'
import NavbarHeader from '../navbar/navbar-header'
import NavbarMobile from '../navbar/navbar-mobile'
import Navbar from '../navbar/navbar'
import {Link} from 'react-router'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header">

        <div className="homepage-hero-module">
            <div className="header-cover"></div>

            <NavbarHeader menu={this.props.menu} />
            <NavbarMobile menu={this.props.menu} />
            <Navbar menu={this.props.menu} />

            <div className="container content">
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2 text-center">
                  <div className="row">
                    <h1> CODE, TEST, LEARN, TEACH. </h1>
                    <p> Create your course or be a student. Automated programming platform.</p>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-lg-offset-4">
                      <Link to="login"><button className="btn btn-primary">GET STARTED NOW!</button></Link>
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

/**
 * Set the static menu.
 * @type {{menu: *[]}}
 */
Header.defaultProps = {
  menu: [
    {
      text: 'Login',
      link: 'login',
      blank: false,
      internal: true
    },
    {
      text: 'Register',
      link: '/register/',
      blank: false,
      internal: true
    },
    {
      text: 'GitHub',
      link: 'http://www.github.com/Rulox/codefett',
      blank: true,
      internal: false
    },
    {
      text: 'Contact',
      link: '/contact/',
      blank: false,
      internal: true
    }
  ]
}