import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActionArea, CardMedia, Typography, CardActions, CardContent, Button, Grid, GridList, GridListTile } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 100,
  },
  media: {
    height: 140,
  },
};

class HeroesList extends Component {

  render() {
    const { classes, heroesList } = this.props;
    return (
      <div>
        <Grid style={{padding: '20px'}}>
          {heroesList && <GridList cols={10} spacing={5}>
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
