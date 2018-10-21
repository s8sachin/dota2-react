
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase } from '@material-ui/core';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft : -12,
    marginRight: 20,
  },
  title: {
    display                     : 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position       : 'relative',
    borderRadius   : theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover'      : {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft                  : 0,
    width                       : '100%',
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing.unit,
      width     : 'auto',
    },
  },
  searchIcon: {
    width         : theme.spacing.unit * 9,
    height        : '100%',
    position      : 'absolute',
    pointerEvents : 'none',
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop                  : theme.spacing.unit,
    paddingRight                : theme.spacing.unit,
    paddingBottom               : theme.spacing.unit,
    paddingLeft                 : theme.spacing.unit * 9,
    transition                  : theme.transitions.create('width'),
    width                       : '100%',
    [theme.breakpoints.up('xs')]: {
      width    : 0,
      '&:focus': {
        width: 100,
      },
    },
    [theme.breakpoints.up('sm')]: {
      width    : 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" color="inherit">
              Dota 2
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder = "Search…"
                classes     = {{
                  root : classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
