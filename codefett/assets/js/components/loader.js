import React from 'react'

export default class Loader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.insite ?  'cf-loader-insite' : 'cf-loader'}>
        <span></span>
        <span></span>
      </div>
    )
  }
}