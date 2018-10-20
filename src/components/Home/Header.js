
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Dota 2
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
