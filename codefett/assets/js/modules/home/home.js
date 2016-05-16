import React from 'react'

import Header from './header.js'
import Built from './built.js'
import Introduction from './introduction'

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Built />
        <Introduction />
        FOOTER
      </div>
    )
  }
}