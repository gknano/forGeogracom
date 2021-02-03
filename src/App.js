import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import MainPage from './Components/Pages/MainPage';
import FormPage from './Components/Pages/FormPage';
import CollectionPage from './Components/Pages/СollectionPage';
import NoMatchPage from './Components/Pages/NoMatchPage';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/form' component={FormPage} />
        <Route path='/collection' component={CollectionPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  );
}

export default App;
