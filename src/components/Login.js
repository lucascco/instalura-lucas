import React, { Component } from 'react';
import { API_URL } from '../config/endpoint';

export class Login extends Component {
  
  async login(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({login: this.inputUser.value, senha: this.inputPassword.value}),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    }
    const dataFetch = await fetch(`${API_URL}/public/login`, requestOptions);
    if(dataFetch.ok) {
      const token = await dataFetch.text();
      console.log('token', token);
    } else {
      this.setState({msg: 'Não foi possível realizar o login.'});
    }
  }

  constructor() {
    super();
    this.state = { msg: '' };
  }

  render() {
    return (
      <section className="login-box">
        <h1 className="header-logo">Instalura Lucas</h1>
        <span>{ this.state.msg }</span>
        <form onSubmit={this.login.bind(this)}>
          <input type="text" placeholder="Usuário" ref={(inputUser) => {this.inputUser = inputUser}}/>
          <input type="password" placeholder="Password" ref={(inputPassword) => {this.inputPassword = inputPassword}}/>
          <button type="submit">Entrar</button>
        </form>
      </section>
    );
  }
}
