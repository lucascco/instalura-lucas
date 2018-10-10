import React, { Component } from 'react';
import Photo from './photo/Photo';
import { API_URL } from './../config/endpoint';

export default class Timeline extends Component {
  
  constructor() {
    super();
    this.state = { listPhotos: [] };
  }

  componentDidMount() {
    fetch(`${API_URL}/public/fotos/alots`)
      .then(data => data.json())
      .then(photos => this.setState({listPhotos: photos}));
  }

  render() {
    return (
      <div className="fotos container">
      {this.state.listPhotos.map(photo => 
          <Photo data={photo} />
        )}
      </div>
    )
  }
}
