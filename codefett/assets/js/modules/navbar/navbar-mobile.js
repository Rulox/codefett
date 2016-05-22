import React from 'react'

import { Link } from 'react-router'

export default class NavbarMobile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  handleOpenMenu = (e) => {
    e.preventDefault()

    if (this.state.open) {
      document.body.style.overflow = 'auto'
      this.setState({open: false})
    } else {
      document.body.style.overflow = 'hidden'
      this.setState({open: true})
    }
  }

  render() {
    return (
      <nav className="navbar-mobile">
      
        <div ref="hamburger" onClick={this.handleOpenMenu}
             className={`hamburger hamburger--slider ${this.state.open ? 'is-active' : null}`}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>

        <div className={`menu-mobile ${this.state.open ? 'open' : null}`}>
          <div className='container text-center'>
            {
              this.props.menu.map((item, index)=> {
                return (
                   <div className='row' key={index}>
                     <div className='col-sm-12 item-mobile'>
                       {
                         item.internal ? <Link to={item.link}>{item.text}</Link> :
                           <a href={item.link}>{item.text}</a>
                       }
                    </div>
                   </div>
                )
              })
            }
          </div>
        </div>
      </nav>
    )
  }
}