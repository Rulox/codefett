import React from 'react'

import { Link } from 'react-router'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    window.addEventListener('scroll', this.handleWindowScroll)
    this.state = {visible: false}
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  handleWindowScroll = (e) => {
    if (window.scrollY >= 100) {
      this.setState({visible: true})
    } else {
      this.setState({visible: false})
    }
  }

  render() {
    return (
      <nav className='nav'>
        <div className={`nav-header default ${this.state.visible ? 'visible' : ''}`}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='logo pull-left'>
                  <img src="/static/images/logo_small.png"/>
                </div>
                <div className='menu pull-right'>
                  <ul>
                    {
                      this.props.menu.map((item, index)=> {
                        return (
                         <li key={index}>
                           {
                             item.internal ? <Link to={item.link}>{item.text}</Link> : <a href={item.link}>{item.text}</a>
                           }
                         </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}