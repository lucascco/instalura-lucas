import React, { Component } from 'react';
import PhotoHeader from './PhotoHeader';
import PhotoInfo from './PhotoInfo';
import PhotoComments from './PhotoComments';

export default class Photo extends Component {
  render() {
    return (
      <div className="foto">
        <PhotoHeader userLogin={this.props.data.loginUsuario} userPhoto={this.props.data.urlPerfil} hour={this.props.horario}/>
        <PhotoInfo likers={this.props.data.likers} legend={this.props.data.comentario} comments={this.props.data.comentarios}/>

        <img alt="foto" className="foto-src" src={this.props.data.urlFoto}/>

        <PhotoComments data={this.props.data.comentarios} />
      </div>
    )
  }
}
