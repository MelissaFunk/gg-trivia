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
import Q21 from './questions/Q21'
import Q22 from './questions/Q22'
import Q23 from './questions/Q23'
import Q24 from './questions/Q24'
import Q25 from './questions/Q25'
import Q26 from './questions/Q26'
import Q27 from './questions/Q27'
import Q28 from './questions/Q28'
import Q29 from './questions/Q29'
import Q30 from './questions/Q30'
import Q31 from './questions/Q31'
import Q32 from './questions/Q32'
import Q33 from './questions/Q33'
import Q34 from './questions/Q34'
import Q35 from './questions/Q35'
import Q36 from './questions/Q36'
import Q37 from './questions/Q37'
import Q38 from './questions/Q38'
import Q39 from './questions/Q39'
import Q40 from './questions/Q40'
import Q41 from './questions/Q41'
import Q42 from './questions/Q42'
import Q43 from './questions/Q43'
import Q44 from './questions/Q44'
import Q45 from './questions/Q45'
import Q46 from './questions/Q46'
import Q47 from './questions/Q47'
import Q48 from './questions/Q48'
import Q49 from './questions/Q49'
import Q50 from './questions/Q50'
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
      <Route exact path="/question21"><Q21 currentUser={currentUser}/></Route>
      <Route exact path="/question22"><Q22 currentUser={currentUser}/></Route>
      <Route exact path="/question23"><Q23 currentUser={currentUser}/></Route>
      <Route exact path="/question24"><Q24 currentUser={currentUser}/></Route>
      <Route exact path="/question25"><Q25 currentUser={currentUser}/></Route>
      <Route exact path="/question26"><Q26 currentUser={currentUser}/></Route>
      <Route exact path="/question27"><Q27 currentUser={currentUser}/></Route>
      <Route exact path="/question28"><Q28 currentUser={currentUser}/></Route>
      <Route exact path="/question29"><Q29 currentUser={currentUser}/></Route>
      <Route exact path="/question30"><Q30 currentUser={currentUser}/></Route>
      <Route exact path="/question31"><Q31 currentUser={currentUser}/></Route>
      <Route exact path="/question32"><Q32 currentUser={currentUser}/></Route>
      <Route exact path="/question33"><Q33 currentUser={currentUser}/></Route>
      <Route exact path="/question34"><Q34 currentUser={currentUser}/></Route>
      <Route exact path="/question35"><Q35 currentUser={currentUser}/></Route>
      <Route exact path="/question36"><Q36 currentUser={currentUser}/></Route>
      <Route exact path="/question37"><Q37 currentUser={currentUser}/></Route>
      <Route exact path="/question38"><Q38 currentUser={currentUser}/></Route>
      <Route exact path="/question39"><Q39 currentUser={currentUser}/></Route>
      <Route exact path="/question40"><Q40 currentUser={currentUser}/></Route>
      <Route exact path="/question41"><Q41 currentUser={currentUser}/></Route>
      <Route exact path="/question42"><Q42 currentUser={currentUser}/></Route>
      <Route exact path="/question43"><Q43 currentUser={currentUser}/></Route>
      <Route exact path="/question44"><Q44 currentUser={currentUser}/></Route>
      <Route exact path="/question45"><Q45 currentUser={currentUser}/></Route>
      <Route exact path="/question46"><Q46 currentUser={currentUser}/></Route>
      <Route exact path="/question47"><Q47 currentUser={currentUser}/></Route>
      <Route exact path="/question48"><Q48 currentUser={currentUser}/></Route>
      <Route exact path="/question49"><Q49 currentUser={currentUser}/></Route>
      <Route exact path="/question50"><Q50 currentUser={currentUser}/></Route>
      <Route exact path="/end"><End currentUser={currentUser} setCurrentUser={setCurrentUser}/></Route>
    </Switch>
  );
}

export default App;
