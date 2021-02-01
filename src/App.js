import React from 'react'
import {Section,Container,BTNContainer,Button} from './style'
import Computer from './modes/Computer';
import Player from './modes/Player';
import {BrowserRouter as Router ,Link, Switch ,Route} from 'react-router-dom';

const App = () => {

  return (
    <>
      <Router>
        <Section>
          <BTNContainer>
            <Link to="/computer">
              <Button>VS Computer</Button>
            </Link>
            <Link to="/player">
              <Button>VS Player</Button>
            </Link>
          </BTNContainer>
        </Section>
        <Switch>
          <Route path="/computer" component={Computer}/>
          <Route path="/player" component={Player}/>
        </Switch> 
      </Router>
    </>
  )
}

export default App
