
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './components/pages/home/Home';
import LanguageSwitch from  "./components/navigation/languageSwitch"
import Language from "./assets/languages"
import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from "history";
import history from "./components/navigation/history"
import Archives from './components/pages/create/Archives';
import Create from './components/pages/create/Create';

function App() {
  const history = createBrowserHistory();
  return (
      <>
      <Router history={history}>
      <div className="pageLayout">
        
        <Navbar/>
          <div className="pages">
            <div className="righter">
              <LanguageSwitch></LanguageSwitch>
            </div>
            <div className="centerer">
              <Switch style={{ flex: 2, flexDirection: "row" }} >
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/fr">
                    <Redirect to="/home/fr" />
                </Route>
                <Route path='/' exact component={Home} />
                <Route path='/home' exact component={Home} />
                <Route path='/home/fr' exact component={Home} />
                <Route path='/create' exact component={Archives} />
                <Route path='/create/fr' exact component={Archives} />
                <Route path='/creation' exact component={Create} />
                <Route path='/creation/fr' exact component={Create} />
                <Route exact path="*">
                    <Redirect to="/home" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
     </>
  );
}

export default App;
