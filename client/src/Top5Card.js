function Top5Card({ user }) {

  return(
    <div>
      <p>{user.username}'s score: {user.total_correct}/20</p>
    </div>
  )
}

export default Top5Card