import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Top5Card from './Top5Card'

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

  const top5Display = 
    top5.sort((a,b) => b.total_correct - a.total_correct).slice(0, 5).map(user => 
      <Top5Card key={user.id} user={user} />
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
    <div>
      <h1>The End!</h1>
      <h2>My score: {currentUser.total_correct}/20</h2>
      <h3>Top 5 scores:</h3>
      {top5Display}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default End