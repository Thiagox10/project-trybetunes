import React from 'react';
import { Redirect } from 'react-router-dom';
import Carregando from '../components/Carregando';
import { createUser } from '../services/userAPI';
import logo from '../LOGO_POSITIVA 1.png';
import './LoginStyle.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      inputname: '',
      disabled: true,
      loading: false,
      redirect: false,

    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    const THREE = 3;
    const habilitado = target.value.length < THREE;

    this.setState({
      [name]: value,
      disabled: habilitado,
    });
  }

  async login() {
    const { inputname } = this.state;
    this.setState({ loading: true });
    await createUser({ name: inputname });
    this.setState({ redirect: true });
  }

  render() {
    const { disabled, inputname, redirect, loading } = this.state;

    if (loading) {
      return (
        <>
          <Carregando />
          { redirect ? <Redirect to="/search" /> : '' }

        </>
      );
    }

    return (
      <div id="login" data-testid="page-login">
        <img src={ logo } alt="trybetunes" />
        <div id="form">
          <form>
            <input
              name="inputname"
              data-testid="login-name-input"
              type="text"
              onChange={ this.handleChange }
              value={ inputname }
              placeholder="Nome"
            />
            <br />
            <button
              data-testid="login-submit-button"
              type="button"
              disabled={ disabled }
              onClick={ this.login }
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
