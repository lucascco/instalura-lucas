import React, { Component } from 'react';
import Photo from './photo/Photo';

export default class Timeline extends Component {
  render() {
    return (
      <div className="fotos container">
        <Photo />
        <Photo />
      </div>
    )
  }
}
