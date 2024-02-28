import { useState, useEffect } from 'react'
import QuestionItem from './QuestionItem'

const API = 'http://localhost:4000/questions/'
// handleAddQuestion

const QuestionList = ({ props }) => {
  const [quiz, setQuiz] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API)
        const questions = await res.json()
        setQuiz(questions)
      } catch (error) {
        alert(error)
      }
    })()
  }, [])

  // const handleAddQuestion = newQuestion => {
  //   setQuiz([...quiz, newQuestion])
  // }

  const renderQuestions = quiz.map(question => (<QuestionItem key={question.id} {...question} />))

  
	return (
		<section>
			<h1>Quiz Questions</h1>
			<ul>{renderQuestions}</ul>
		</section>
)}

export default QuestionList