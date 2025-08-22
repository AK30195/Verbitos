import { useState } from "react";


function AnswerInput({ correctAnswer, answer, setAnswer }) {

    const [status, setStatus] = useState('typing');

    function handleChange(e) {
        setAnswer(e.target.value);
        setStatus('typing');
    };

    function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        if (answer.toLowerCase() === correctAnswer) {
            setStatus('success');
            setAnswer(correctAnswer);
        } else {
            setStatus('fail');
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
                {status === 'fail' && (
                    <p>Incorrect! Try again.</p>
                )}
            </form>
            <button
                onClick={() => setAnswer('RevealAnswer')}
            >
                Reveal Answer
            </button>
        </div>
    )
}

export default AnswerInput;