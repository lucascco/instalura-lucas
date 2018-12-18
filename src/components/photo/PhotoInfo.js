import React, { Component } from 'react';

export default class PhotoInfo extends Component {
  render() {
    return (
      <div className="foto-info">
        <div className="foto-info-likes">
          {this.props.likers.map(liker => 
            <a key={liker.login} href="#"> {liker.loing} </a>,
          )}

          curtiram

        </div>

        <p className="foto-info-legenda">
          <a className="foto-info-autor">autor </a>
          {this.props.legend}
        </p>

        <ul className="foto-info-comentarios">
          {this.props.comments.map(comment => 
            <li key={comment.id} className="comentario">
              <a className="foto-info-autor">{comment.login} </a>
              {comment.texto}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
