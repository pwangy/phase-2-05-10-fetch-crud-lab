// import { useState, useEffect } from 'react'
import QuestionItem from './QuestionItem'

const QuestionList = ({ quiz }) => {
  const renderQuestions = quiz.map(question => (<QuestionItem key={question.id} {...question} />))

	return (
		<section>
			<h1>Quiz Questions</h1>
			<ul>{renderQuestions}</ul>
		</section>
)}

export default QuestionList