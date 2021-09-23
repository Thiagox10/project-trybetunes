import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';
import logo from '../logo.png';
import './HeaderStyle.css';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      user: {},
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  async fetchUser() {
    const response = await getUser();
    this.setState({
      user: response,
      loading: false,
    });
  }

  render() {
    const { loading, user: { name } } = this.state;
    return (
      <header id="header" data-testid="header-component">
        <img src={ logo } alt="trybetunes" />
        <nav>
          <Link data-testid="link-to-search" to="/search">Search</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
          <Link data-testid="link-to-profile" to="/profile">Profile</Link>
        </nav>
        { loading ? <Carregando />
          : <span data-testid="header-user-name">{ name }</span> }
      </header>

    );
  }
}

export default Header;
