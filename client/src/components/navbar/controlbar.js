import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Menu,
  Switch,
} from "@material-ui/core";
import SearchComponent from "./search-components";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";

export default function ControlBar() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Add Job</MenuItem>
            <MenuItem onClick={handleClose}>Edit Jobs</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Job List
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => setShowSearch(!showSearch)}
            >
              <SearchIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {showSearch && <SearchComponent></SearchComponent>}
    </div>
  );
}
