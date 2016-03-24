import React from 'react'
import ReactDOM from 'react-dom'

import Loader from './components/loader.js'
import Home from './modules/home/home.js'

class App extends React.Component {
    constructor(props) {
        super(props)
        setTimeout(()=> {this.setState({loading: false})}, 1000)
    }

    state = {
        loading: true
    }

    render() {
        if (this.state.loading) {
            return (<Loader />)
        } else {
            return (<Home />)
        }
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))