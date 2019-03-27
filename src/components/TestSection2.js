import React, { Component } from 'react';
import Granim from 'react-granim';

const granimColor = ({"default-state": {gradients: [['#FE802D', '#D04ED6'],['#D04ED6', '#FF9C3F']]}});

class TestSection2 extends Component {

  render() {

    return (
      <div>
        <h2>Test Section 2</h2>
        <Granim states={granimColor} />
      </div>
    )
  }
}

export default TestSection2;