import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getHeroesListAction } from '../../actions';
import HeroesList from '../HeroesList/HeroesList';
class Home extends Component {
  componentDidMount() {
    this.props.getHeroesListAction();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <HeroesList />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({heroesData}) => {
  const { heroesList } = heroesData;
  return { heroesList };
}

export default connect(mapStateToProps, { getHeroesListAction })(Home);
