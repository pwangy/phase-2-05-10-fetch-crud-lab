import { useState } from 'react'
import AdminNavBar from './AdminNavBar'
import QuestionForm from './QuestionForm'
import QuestionList from './QuestionList'

const App = () => {
	const [page, setPage] = useState('List')

	return (
		<main>
			<AdminNavBar onChangePage={setPage} />
			{page === 'Form' ? (
			// 	<QuestionForm onAddQuestion={handleAddQuestion} />
			// ) : (
			// 	<QuestionList handleAddQuestio={handleAddQuestion} />
			// )}
			<QuestionForm />) : (<QuestionList /> 
			)}
		</main>
	)
}

export default App
