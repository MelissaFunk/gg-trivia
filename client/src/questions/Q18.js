import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

function Q18({ currentUser }) {
  const [question, setQuestion] = useState([])
  const [submission, setSubmission] = useState("")
  const [response, setResponse] = useState("")
  const history = useHistory()

  useEffect(() => {
    fetch('/questions/18')
    .then(res => res.json())
    .then(data => setQuestion(data))
  }, [])

  const optionClick = (e) => {
    setSubmission(e.target.value)
  }

  const handleSubmission = () => {
    fetch('/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        submission: submission,
        correct: submission === question.answer ? true : false,
        question_id: question.id,
        user_id: currentUser.id
      })
    })
    .then(res => res.json())
    .then(setResponse(submission === question.answer ? <p>Correct!</p> : <p>Sorry, that's incorrect 😔 The correct answer is <b>{question.answer}</b></p>)
    )
  }

  const nextQuestion = () => {
    history.push('/question19')
  }

  return(
    <div>
      <div className="status-bar-18">
        <h4>Question: 18/50</h4>
      </div>
      <h2>{question.prompt}</h2>
      <button value={question.option1} onClick={optionClick}>{question.option1}</button>
      <button value={question.option2} onClick={optionClick}>{question.option2}</button>
      <button value={question.option3} onClick={optionClick}>{question.option3}</button>
      <button value={question.option4} onClick={optionClick}>{question.option4}</button>
      <p>Your Answer: {submission}</p>
      {response}
      {response ? <button onClick={nextQuestion}>Next Question ⮕</button> : <button onClick={handleSubmission}>Submit Answer</button>}
    </div>
  )
}

export default Q18