import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getHeroesListAction } from '../../actions';
class Home extends Component {
  componentDidMount() {
    this.props.getHeroesListAction();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapStateToProps = ({heroesData}) => {
  const { heroesList } = heroesData;
  return { heroesList };
}

export default connect(mapStateToProps, { getHeroesListAction })(Home);
