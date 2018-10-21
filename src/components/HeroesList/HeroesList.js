import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActionArea, CardMedia, Typography, CardActions, CardContent, Button, Grid, GridList, GridListTile, GridListTileBar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    // maxWidth: 100,
  },
  media: {
    height: 150,
  },
  title: {
    color: 'white',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  grid: {
    padding: 20,
    [theme.breakpoints.down('xs')]: {
      padding: 10,
    },
    // [theme.breakpoints.down('sm')]: {
    //   padding: 15,
    // },
  }
});

class HeroesList extends Component {
  constructor() {
    super();
    this.state = {
      width: '',
      cols : ''
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    let cols;
    const width = window.innerWidth;
    if (width <= 425) {
      cols = 2;
    } else if (width <= 768) {
      cols = 5;
    } else if (width <= 1024) {
      cols = 8;
    } else {
      cols = 10;
    }
    this.setState({ width, cols });
  }

  render() {
    const { classes, heroesList } = this.props;
    const { cols } = this.state;
    return (
      <div>
        <Grid className={classes.grid}>
          {heroesList && <GridList cellHeight={150} cols={cols}>
            {heroesList.map(hero =>
              <GridListTile key={hero.id}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className = {classes.media}
                      image     = {`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.split("npc_dota_hero_")[1].concat("_vert.jpg")}`}
                      title     = "Contemplative Reptile"
                    />
                  </CardActionArea>
                  <GridListTileBar
                    title   = {hero.localized_name}
                    classes = {{
                      root : classes.titleBar,
                      title: classes.title,
                    }}
                  />
                </Card>
              </GridListTile>
            )}
          </GridList>}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({heroesData}) => {
  const { heroesList } = heroesData;
  return { heroesList };
}

export default connect(mapStateToProps)(withStyles(styles)(HeroesList));
