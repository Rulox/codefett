import React from 'react'

export default class Introduction extends React.Component {

  render() {
    return (
      <div className="introduction">
        <div className="container">
          <div className="col-md-12 text-left">
            <h1>What is Codefett?</h1>
            <span className="separator"/>
            <p>
              CodeFett is a prototype of a tool for automatic code testing. It's Open Source, and everyone can
              contribute. We use a set of plugins for different languages and frameworks. Create an account and start
              creating programming courses or browse our public courses to test the tool and yourself! Codefett was
              made both for <b> Students </b> and <b> Teachers </b>.
            </p>
          </div>

          <div className="col-md-12 text-right">
            <h1>Who can use Codefett?</h1>
            <span className="separator"/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet ante ut ultrices imperdiet.
              Aenean ac erat ac tortor gravida commodo sit amet sed nunc.
              Suspendisse imperdiet ultrices purus, laoreet venenatis ipsum varius in.
              Aliquam mollis tincidunt sem a dictum
            </p>
          </div>
        </div>
      </div>
    )
  }
}

