import React from 'react'
import { Link } from 'react-router'

export default class NavbarHeader extends React.Component {
  render() {
    return (
      <nav className='nav'>
        <div className='nav-header'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='logo pull-left'>
                  <img src="/static/images/logo_white.png"/>
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