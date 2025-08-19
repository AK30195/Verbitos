import { useState } from "react";


function AnswerInput({ correctAnswer }) {
    const [answer, setAnswer] = useState("");
    const [status, setStatus] = useState('typing');

    function handleChange(e) {
        setAnswer(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        if (answer.toLowerCase() === correctAnswer) {
            setStatus('success')
        } else {
            setStatus('typing');
            alert('Incorrect answer')
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    disabled={status === 'submitting'
                        || status === 'success'}
                    value={answer}
                    onChange={handleChange}
                    type="text"
                />
                <button
                    disabled={status === 'submitting'
                        || status === 'success'}
                >
                    Check
                </button>
                {status === 'success' && (
                    <p>Correct!</p>
                )}
            </form>
        </div>
    )
}

export default AnswerInput;