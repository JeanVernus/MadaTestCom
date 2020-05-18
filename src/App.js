import React, {Component} from 'react';
import Articles from './Components/Articles';
import { Segment } from 'semantic-ui-react';
import Accueil from './Components/Accueil';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Panier from './Components/Panier';
import {
   BrowserRouter,
   Switch,
   NavLink,
   Route
}from 'react-router-dom';
import './CSS/App.css';

class App extends Component {
  render (){
    return(    
      <div> 
        <Header />
        <br />
        <Segment>
          <BrowserRouter>
            <NavLink exact to = "/" className="link" activeClassName = "current"></NavLink>
            <div className="displayNavBar"> 
              <NavLink to = "/Accueil" className="link" activeClassName = "current">Accueil</NavLink>
              <NavLink to = '/Articles' className="link" activeClassName = "current">Articles</NavLink>
              <NavLink to = '/Panier' className="link" activeClassName = "current">Panier</NavLink>
            </div>
            <br />
            <Switch>
              <Route path = "/Accueil" component = {Accueil}></Route>
              <Route path = "/Articles" component = {Articles}></Route>
              <Route path = "/Panier" component = {Panier}></Route>
            </Switch>
          </BrowserRouter>
        </Segment>
        <br /><br /><br />
        <Footer />
      </div>
    )
  }
}

export default App;
