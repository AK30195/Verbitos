import { useEffect, useState } from "react";
import AnswerInput from "./AnswerInput";
import supabase from "../utils/supabase";
import Loader from "./Loader";

function QuizCard({ verb, tense, pronoun, onNext }) {

  const [correctAnswer, setCorrectAnswer] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    async function fetchAnswer() {
      try {
        const { data, error } = await supabase
          .from('verb_conjugations')
          .select()
          .eq('verb', verb.verb_id)
          .eq('tense', tense.tense_id)
          .eq('pronoun', pronoun.pp_id)
        
        if (error) throw error;
        setCorrectAnswer(data[0].conjugated_form);
      } catch (e) {
        console.log(e)
        return e;
      }
    }

    fetchAnswer();
  }, [pronoun, tense, verb])

  return (
    <div className="quizcard-div">
      {!correctAnswer &&
        <Loader />
      }
      {(answer === 'RevealAnswer') &&
        <>
          <div className="quizcard-text-container">
            <p>
              The answer is:
            </p>
          </div>
          <div className="quizcard-text-container correct-answer">
            <p>
              {`${pronoun.pronoun} ${correctAnswer}`}
            </p>
          </div>
        </>
      }
      {(answer !== correctAnswer) && (answer !== 'RevealAnswer') &&
        <>
          <h3>{tense.name}</h3>
          <div className="quizcard-text-container">
            <p>Fill in the blank with the correct conjugation for
            </p>
          </div>
          <h3>{verb.infinitive} ({verb.translation})</h3>
          <div className="quizcard-text-container">
            <p>{pronoun.pronoun} ________</p>
          </div>
          <AnswerInput
            correctAnswer={correctAnswer}
            answer={answer}
            setAnswer={setAnswer}
          />
        </>
      }
      {(correctAnswer && answer === correctAnswer) &&
        <>
          <div className="quizcard-text-container">
            <p>
              Correct! The answer is:
            </p>
          </div>
          <div className="quizcard-text-container correct-answer">
            <p>{`${pronoun.pronoun} ${correctAnswer}`}</p>
          </div>
        </>
      }
      <div>
        {correctAnswer && (answer === correctAnswer || answer === "RevealAnswer") && (
          <button onClick={onNext}>Next</button>
        )}
      </div>
    </div>
  )
}

export default QuizCard;