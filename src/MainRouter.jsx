import React, {Component} from 'react'
import { Route, Switch }from 'react-router-dom'
import PageTemplate from './PageTemplate'

class MainRouter extends Component {
  render() {
    return(
      <PageTemplate>
        Dylans app here...
        <Switch>
        </Switch>
      </PageTemplate>)
  } 
}

export default MainRouter