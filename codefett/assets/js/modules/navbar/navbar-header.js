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
                <div className='logo pull-left'>logo</div>
                <div className='menu pull-right'>
                  <ul>
                    <li>
                      <Link to={`/login/`}>Login</Link>
                    </li>
                    <li>
                      <a href="#">MENU1</a>
                    </li>
                    <li>
                      <a href="#">MENU1</a>
                    </li>
                    <li>
                      <a href="#">MENU1</a>
                    </li>
                    <li>
                      <a href="#">MENU1</a>
                    </li>
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