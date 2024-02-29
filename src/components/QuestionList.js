// import { useState, useEffect } from 'react'
import QuestionItem from './QuestionItem'

const QuestionList = ({ quiz, handleDelete, onNewAnswer, newAnswer }) => {
	const renderQuestions = quiz.map(question => (
		<QuestionItem 
			key={question.id} 
			{...question} 
			handleDelete={handleDelete} 
			onNewAnswer={onNewAnswer}
			newAnswer={newAnswer}
		/>
	))

	return (
		<section>
			<h1>Quiz Questions</h1>
			<ul>{renderQuestions}</ul>
		</section>
)}

export default QuestionList