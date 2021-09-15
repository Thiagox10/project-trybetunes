import React from 'react';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

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
      <header data-testid="header-component">
        { loading ? <Carregando />
          : <span data-testid="header-user-name">{ name }</span> }
      </header>

    );
  }
}

export default Header;
