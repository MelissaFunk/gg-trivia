import { useState } from 'react'
import { useHistory } from 'react-router'

function Login({ currentUser, setCurrentUser }) {
  const [userLog, setUserLog] = useState('')
  const [passLog, setPassLog] = useState('')
  const [userSign, setUserSign] = useState('')
  const [passSign, setPassSign] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory()

  function onSignupSubmit(e) {
    e.preventDefault()
    const user = { username: userSign, password: passSign }
  
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
          history.push('/question1')
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      } 
    })
  }

  function onLoginSubmit(e) {
    e.preventDefault()
    const user = { username: userLog, password: passLog }

    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
          history.push('/end')
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      } 
    })
  }

  return (
    <div className="login-div">
      <h1>Gilmore Girls Trivia!</h1>

      <img src="https://i.imgur.com/2uyev2H.jpg"/>

      <form onSubmit={onSignupSubmit}>
        <input className="signup-input" placeholder="Username" type="text" value={userSign} onChange={e => setUserSign(e.target.value)}></input> 
        <input className="signup-input" placeholder="Password"type="password" value={passSign} onChange={e => setPassSign(e.target.value)}></input>
        <button type="submit">Sign Up To Start</button>
      </form>
        

      <form className="login-form" onSubmit={onLoginSubmit}>
        <input className="login-input" placeholder="Username" type="text" value={userLog} onChange={e => setUserLog(e.target.value)}></input>
        <input className="login-input" placeholder="Password" type="password" value={passLog} onChange={e => setPassLog(e.target.value)}></input>
        <button type="submit">Log In For Top Scores</button>
      </form>

      <div>{errors ? errors.map(error => (
        <p key={error}>{error}</p>
      )) : null}</div>

    </div>
  )
}

export default Login
