const QuestionItem = ({ id, prompt, answers, correctIndex, handleDelete, onNewAnswer, newAnswer }) => {
	const options = answers.map((answer, index) => (
		<option key={index} value={index}>
			{answer}
		</option>
	))

	const handleChange = e => {
		const newAnswer = parseInt(e.target.value)
		onNewAnswer(id, newAnswer)
	}

	return (
		<li>
			<h4>Question {id}</h4>
			<h5>Prompt: {prompt}</h5>
			<label>Correct Answer:
				<select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
			</label>
			<button onClick={(e) => handleDelete(id)}>Delete Question</button>
		</li>
)}

export default QuestionItem