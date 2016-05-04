import React from 'react'
import NavbarHeader from '../navbar/navbar-header.js'

export default
class Header extends React.Component {
  constructor(props) {
    super(props)
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  state = {
    height: this.props.height
  }

  handleResize(e) {
    this.setState({height: document.documentElement.clientHeight})
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  render() {
    return (
      <div className="header" style={{height: this.state.height}}>
        <div className="header-cover" style={{height: this.state.height}}></div>

        <NavbarHeader />

        <div className="container content">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 text-center">
              <h1> CODEFETT </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

