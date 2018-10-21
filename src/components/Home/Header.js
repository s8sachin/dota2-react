
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, SwipeableDrawer, List, Divider, ListItem } from '@material-ui/core';
import { Menu as MenuIcon, Search as SearchIcon, ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { debounce } from 'lodash';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { searchHeroesAction } from '../../actions/heroes';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  list: {
    width: 300
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

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawer: false, pathname: null };
    this.changeSearch = debounce(this.props.searchHeroesAction, 250);
    this.handleActive = this.handleActive.bind(this);
  }

  handleActive (match, location) {
    this.setState((state) => {
      if(state.pathname !== location.pathname) {
        return { pathname: location.pathname };
      }
    });
  }

  handleChange = (e) => {
    const val = e.target.value

    this.setState({ value: val }, () => {
      this.changeSearch(val)
    })
  }

  toggleDrawer = (open) => {
    this.setState({ drawer: open });
  };

  render() {
    const { classes } = this.props;
    const { pathname } = this.state;
    console.log(pathname)
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={() => this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
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
                onChange={(e) => this.handleChange(e)}
              />
            </div>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={this.state.drawer}
          onClose={() => this.toggleDrawer(false)}
          onOpen={() => this.toggleDrawer(true)}
        >
          <List>
            <ListItem
              button
              tabIndex={0}
              onClick={() => this.toggleDrawer(false)}
              onKeyDown={() => this.toggleDrawer(false)}
              style={{ height: 'auto', padding: '20px'}}
            >
              <ArrowBackIcon />
            </ListItem>
          </List>
          <Divider />
            <div className={classes.list}>
              <List>
                <StyledLink to="/" isActive={this.handleActive}>
                  <ListItem button selected={pathname === '/'}>
                    Normal View
                  </ListItem>
                </StyledLink>
                  <Divider />
                <StyledLink to="/carouselView" isActive={this.handleActive}>
                  <ListItem button selected={pathname === '/carouselView'}>
                    Carousel View
                  </ListItem>
                </StyledLink>
              </List>
            </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default connect(null, { searchHeroesAction })(withStyles(styles)(Header));
