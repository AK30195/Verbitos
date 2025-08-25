import { useEffect, useState } from "react";
import AnswerInput from "./AnswerInput";
import supabase from "../utils/supabase";

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
        console.log(data);
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
      {(answer === 'RevealAnswer') &&
        <>
          <p>
            The answer is: {`${pronoun.pronoun} ${correctAnswer}`}
          </p>
        </>
      }
      {(answer !== correctAnswer) && (answer !== 'RevealAnswer') &&
        <>
          <div className="quizcard-text-container">
            <p>Fill in the blank with the correct conjugation for {verb.infinitive} ({verb.translation}) in the {tense.name} tense.
          </p>
          </div>
          <div>
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
          <p>
            Correct! The answer is: {`${pronoun.pronoun} ${correctAnswer}`}
          </p>
        </>
      }
      <div>
        {(answer === correctAnswer || answer === "RevealAnswer") && (
          <button onClick={onNext}>Next</button>
        )}
      </div>
    </div>
  )
}

export default QuizCard;