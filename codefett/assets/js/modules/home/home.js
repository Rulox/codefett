import React from 'react'

import Header from './header.js'

export default class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <Header height={document.documentElement.clientHeight} />
            </div>
        )
    }
}