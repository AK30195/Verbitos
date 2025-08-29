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
                    autoFocus
                />
                {status === 'success' && (
                    <p style={{color: 'green'}}>
                        Correct!
                    </p>
                )}
                {status === 'fail' && (
                    <p style={{color: 'red'}}>
                        Incorrect! Try again.
                    </p>
                )}
                <button
                    disabled={status === 'submitting'
                        || status === 'success'}
                >
                    Check
                </button>
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