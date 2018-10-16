import React, { Component } from 'react';

export class Login extends Component {
  render() {
    return (
      <section className="login-box">
        <h1 className="header-logo">Instalura Lucas</h1>
        <form>
          <input type="text" placeholder="Usuário"/>
          <input type="password" placeholder="Password"/>
          <button type="submit">Entrar</button>
        </form>
      </section>
    );
  }
}
