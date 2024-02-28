import { useState, useEffect } from 'react'
import AdminNavBar from './AdminNavBar'
import QuestionForm from './QuestionForm'
import QuestionList from './QuestionList'

const App = () => {
	const [page, setPage] = useState('List')
	const [quiz, setQuiz] = useState([])
	const API = 'http://localhost:4000/questions/'

	useEffect(() => { // Fetch all questions
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

	  const handleAdd = (newQuestion) => {
		setQuiz([...quiz, newQuestion])
	  }

	return (
		<main>
			<AdminNavBar onChangePage={setPage} />
			{page === 'Form' 
				? (<QuestionForm onAdd={handleAdd} />) 
				: (<QuestionList quiz={quiz} />)
			}
		</main>
)}

export default App