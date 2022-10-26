import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

function End({ currentUser, setCurrentUser }) {
  const [top5, setTop5] = useState([])
  const history = useHistory()

  useEffect(() => {
    fetch('/users')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setTop5(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  const top5Display = 
    top5.sort((a,b) => b.total_correct - a.total_correct).slice(0, 5).map(user => 
      <p key={user.id}>{user.username}'s score: {user.total_correct}/50</p>
  )

    const handleLogout = () => {
      fetch("/logout", {
          method: "DELETE"
      })
      .then(resp => {
          if (resp.ok) {
              setCurrentUser({})
              history.push("/")
          }
      })
    } 

  return(
    <div className="end-div">
      <h2>My score: {currentUser.total_correct}/50</h2>
      <img src="https://i.pinimg.com/474x/ee/91/cb/ee91cb672023d12ef8007d99ae2a2945.jpg" />
      <div className="top5-div">
        <h3>Top 5 Scores:</h3>
        {top5Display}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default End