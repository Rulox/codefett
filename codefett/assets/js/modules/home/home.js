import React from 'react'

import Header from './header.js'
import Built from './built.js'

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Built />
        WHAT IS CODEFETT
        WHO CAN USE IT
        CONTRIBUTE
        FOOTER
      </div>
    )
  }
}