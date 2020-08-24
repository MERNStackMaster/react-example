import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/header">Header</Link>
        <Link to="/main">Main</Link>
        <Link to="/footer">Footer</Link>
			</nav>

      <Switch>
        <Route exact path="/" render={() => ''} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/footer" component={Footer} />
        <Route path="*" render={() => {
          return <h1>404 Error!</h1>
        }} />
      </Switch>

      {/* <Header />
      <Main />
      <Footer /> */}
    </Router>
  );
}

export default App;


// functional components => stateless components
// class components => stateful components