import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getHeroesListAction } from '../../actions';
import HeroesList from '../HeroesList/HeroesList';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroesList: null,
    }
  }
  componentDidMount() {
    this.props.getHeroesListAction();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.handleUpdate();
    }
  }

  handleUpdate() {
    let { heroesList, searchHero } = this.props;
    if (searchHero) {
      heroesList = heroesList.filter(hero => (hero.localized_name.match(new RegExp(searchHero, 'i'))))
    }
    this.setState({ heroesList });
  }

  render() {
    // const { heroesList, searchHero } = this.props;
    const { heroesList } = this.state;
    return (
      <React.Fragment>
        <Header />
        <HeroesList heroesList={heroesList} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({heroesData}) => {
  const { heroesList, searchHero } = heroesData;
  return { heroesList, searchHero };
}

export default connect(mapStateToProps, { getHeroesListAction })(Home);
