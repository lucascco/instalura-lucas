import React, { Component } from 'react';
import Photo from './photo/Photo';
import { API_URL } from './../config/endpoint';
import Header from './Header';

export default class Timeline extends Component {
  
  constructor() {
    super();
    this.state = { listPhotos: [] };
  }

  componentDidMount() {
    fetch(`${API_URL}/fotos?X-AUTH-TOKEN=${localStorage.getItem('instalura-token')}`)
      .then(data => data.json())
      .then(photos => this.setState({ listPhotos: photos }));
  }

  render() {
    return (
      <section>
        <Header />
        <div className="fotos container">
          {this.state.listPhotos.map(photo => 
            <Photo key={photo.id} data={photo} />
          )}
        </div>
      </section>
    )
  }
}
