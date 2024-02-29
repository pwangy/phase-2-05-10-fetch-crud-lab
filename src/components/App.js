import { useState, useEffect } from 'react'
import AdminNavBar from './AdminNavBar'
import QuestionForm from './QuestionForm'
import QuestionList from './QuestionList'

const App = () => {
	const [page, setPage] = useState('List')
	const [quiz, setQuiz] = useState([])
	const API = 'http://localhost:4000/questions/'

	useEffect(() => { // GET all questions
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

	const handleDelete = id => { // DELETE a question
		const questionToDelete = quiz.find(quiz => quiz.id === id) //find correct question
		setQuiz(currentQuiz => currentQuiz.filter(quiz => quiz.id !== id)) //optimistically update UI
		fetch(`${API}${id}`, { method: 'DELETE' }) // update server
			.then(res => {
				if(!res.ok) {
					throw new Error('Could not delete question')
				}
			})
			.catch(err => {
				console.error(err.message)
				setQuiz(currentQuiz => [...currentQuiz, questionToDelete])
			})
	}

	const onNewAnswer = (id, newAnswer) => {
		fetch(`${API}${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ 
				correctIndex: `${newAnswer}`
			})
		})
	  		.then(res => {
				if(!res.ok) {
					throw new Error(`Could not update answer to index ${newAnswer}`)
				}
				return res.json()
			})
			.then(updateAnswer => onNewAnswer(updateAnswer))
			.catch(err => console.error(err.message))
	}

	return (
		<main>
			<AdminNavBar onChangePage={setPage} />
			{page === 'Form' 
				? (<QuestionForm onAdd={handleAdd} />) 
				: (<QuestionList quiz={quiz} handleDelete={handleDelete} setQuiz={setQuiz} onNewAnswer={onNewAnswer} />)
			}
		</main>
)}

export default App