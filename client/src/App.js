import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './Login'
import Q1 from './questions/Q1'
import Q2 from './questions/Q2'
import Q3 from './questions/Q3'
import Q4 from './questions/Q4'
import Q5 from './questions/Q5'
import Q6 from './questions/Q6'
import Q7 from './questions/Q7'
import Q8 from './questions/Q8'
import Q9 from './questions/Q9'
import Q10 from './questions/Q10'
import Q11 from './questions/Q11'
import Q12 from './questions/Q12'
import Q13 from './questions/Q13'
import Q14 from './questions/Q14'
import Q15 from './questions/Q15'
import Q16 from './questions/Q16'
import Q17 from './questions/Q17'
import Q18 from './questions/Q18'
import Q19 from './questions/Q19'
import Q20 from './questions/Q20'
import End from './End'

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])



  return (
    <Switch>
      <Route exact path="/"><Login currentUser={currentUser} setCurrentUser={setCurrentUser}/></Route>
      <Route exact path="/question1"><Q1 currentUser={currentUser}/></Route>
      <Route exact path="/question2"><Q2 currentUser={currentUser}/></Route>
      <Route exact path="/question3"><Q3 currentUser={currentUser}/></Route>
      <Route exact path="/question4"><Q4 currentUser={currentUser}/></Route>
      <Route exact path="/question5"><Q5 currentUser={currentUser}/></Route>
      <Route exact path="/question6"><Q6 currentUser={currentUser}/></Route>
      <Route exact path="/question7"><Q7 currentUser={currentUser}/></Route>
      <Route exact path="/question8"><Q8 currentUser={currentUser}/></Route>
      <Route exact path="/question9"><Q9 currentUser={currentUser}/></Route>
      <Route exact path="/question10"><Q10 currentUser={currentUser}/></Route>
      <Route exact path="/question11"><Q11 currentUser={currentUser}/></Route>
      <Route exact path="/question12"><Q12 currentUser={currentUser}/></Route>
      <Route exact path="/question13"><Q13 currentUser={currentUser}/></Route>
      <Route exact path="/question14"><Q14 currentUser={currentUser}/></Route>
      <Route exact path="/question15"><Q15 currentUser={currentUser}/></Route>
      <Route exact path="/question16"><Q16 currentUser={currentUser}/></Route>
      <Route exact path="/question17"><Q17 currentUser={currentUser}/></Route>
      <Route exact path="/question18"><Q18 currentUser={currentUser}/></Route>
      <Route exact path="/question19"><Q19 currentUser={currentUser}/></Route>
      <Route exact path="/question20"><Q20 currentUser={currentUser}/></Route>
      <Route exact path="/end"><End currentUser={currentUser} setCurrentUser={setCurrentUser}/></Route>
    </Switch>
  );
}

export default App;
