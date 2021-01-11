import React from 'react';
import { withRouter} from 'react-router-dom';
import { slide as ElasticMenu } from 'react-burger-menu';
import { makeStyles } from '@material-ui/core/styles';
import { MainMenu } from './core/Menus';

const useStyles = makeStyles(theme => ({
  root: {
  	minHeight:'100vh',
    background: '#f9f9f9',//'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 3vw'
  },
  withoutHeader:{
  	color:'red'
  },
  header:{
  	height:'calc(60px + '+theme.spacing(2)+')',
  	width:'100%',
  	marginBottom:theme.spacing(2),
  	paddingTop:theme.spacing(2),
  	display:'flex',
  	justifyContent:'space-between'
  },
  content:{

  }
}));

//className={classes.root +(showHeader ? ' with-header ':'without-header ')}
export default withRouter(({children, history, match}) =>{
	const classes = useStyles();
	//show header?
	const url = history.location.pathname;
	const pagesWithoutHeader = [];
	const showHeader = false//pagesWithoutHeader.includes(url) ? false : true;
	const handleMenuClick = url =>{
		history.push(url);
	}
	return(
		<section className={classes.root +' '+(showHeader ?  '' : classes.withoutHeader)}>
		{showHeader ? 
			<section className={classes.header}>
			    <MainMenu url={url} handleClick={handleMenuClick}/>
			</section>
			:
	    	<section>
	    		{/**<div className='bm-burger-button'></div>
		        <ElasticMenu top width={200}>
		          <MainMenu url={url} handleClick={handleMenuClick}/>
		        </ElasticMenu>**/}
	    	</section>
	    }
	    {/**<div className={'page-background-cont '}></div>**/}
    	<div className={classes.content}>
			{children}
		</div>
		{/*<section className='r-footer'></section>**/}
	</section>
	)}
)


