import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';
import logo from '../logo.png';

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
          <Link className="link" data-testid="link-to-search" to="/search">
            <div id="selected">Search</div>
          </Link>
          <Link className="link" data-testid="link-to-favorites" to="/favorites">
            <div id="default">Favorites</div>
          </Link>
          <Link className="link" data-testid="link-to-profile" to="/profile">
            <div id="default">Profile</div>
          </Link>
        </nav>
        { loading ? <Carregando />
          : <span data-testid="header-user-name">{ `Ola, ${name}` }</span> }
      </header>

    );
  }
}

export default Header;
