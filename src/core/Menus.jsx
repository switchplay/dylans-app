import React from 'react'
//import {NavLink, Link, withRouter} from 'react-router-dom'
//import { slide as ElasticMenu } from 'react-burger-menu'
//styles
import { makeStyles } from '@material-ui/core/styles';
//let activeSt = {color: '#ed4401', textDecoration:'none'}
//let linkSt = {color: 'white', textDecoration:'none'}
/**
* Determines whether or not path is part of current path, and returns appropriate styling object
* @param {Object} history - this router's history object
* @param {Object} path - the path to be tested against the current pathname in history
* @returns {Object} - a styling object
**/
/*const isActive = (history, path) => {
  if (history.location.pathname.startsWith(path))
    return {color: '#ed4401'}
  return {color: 'white'}
}*/
/**
* Determines whether or not the home logo is to be displayed
* This depends on the path
* TODO - further implement different page scenarios 
* @param {Object} history - this router's history object
* @returns {boolean} - whether or not to dispay the home logo
**/
const showHomeLink = url =>{
  if(url === '/')
    return false;
  return true;
}

const useStyles = makeStyles(theme => ({
  root: {
    display:'flex',
    flexDirection:'row-reverse',
    margin:theme.spacing(2),
    marginTop:0,
    marginRight:0,
    listStyleType:'none',
  },
  menuItem:{
    marginLeft:theme.spacing(6),
    fontSize:14,
    color:'gray',
    cursor:'pointer'
  },
  //todo - oput selected insice menuItem using &
  selected:{
    color:'white'
  }
}));

export const MainMenu = ({url, handleClick}) =>{
  const classes = useStyles();
  return(
    <ul className={classes.root}>
      <li className={classes.menuItem +' '+(url.includes('contact') ? classes.selected :'')}
        onClick={() =>handleClick('/contact')}>
          contact
      </li>
      <li className={classes.menuItem +' '+(url.includes('cv') ? classes.selected :'')}
        onClick={() =>handleClick('/cv')}>
          my cv
      </li>
      <li className={classes.menuItem +' '+(url.includes('projects') ? classes.selected :'')}
        onClick={() =>handleClick('/projects')}>
          projects
      </li>
      <li className={classes.menuItem +' '+(url.includes('about') ? classes.selected :'')}
        onClick={() =>handleClick('/about')}>
          about me
      </li>
      {showHomeLink(url) && <li className={classes.menuItem +' '+(url === '/' ? classes.selected :'')}
        onClick={() =>handleClick('/')}>
          home
      </li>}
    </ul>
  )
}


MainMenu.defaultProps = {
  url:'',
  handleClick:() =>{}
}


