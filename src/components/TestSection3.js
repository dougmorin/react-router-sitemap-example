import React, { Component } from 'react';
import myimage from '../images/meme.jpg';

class TestSection3 extends Component {

  render() {

    return (
      <div>
        <h2>Test Section 3</h2>
        <p>
          <img src={myimage} />
        </p>
      </div>
    )
  }
}

export default TestSection3;