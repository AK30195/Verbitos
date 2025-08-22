import { useEffect, useState } from "react";
import AnswerInput from "./AnswerInput";
import supabase from "../utils/supabase";

function QuizCard({ verb, tense, pronoun }) {

  const [correctAnswer, setCorrectAnswer] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    async function fetchAnswer() {
      try {
        const { data, error } = await supabase
          .from('verb_conjugations')
          .select()
          .eq('verb', verb.verb_id)
          .eq('tense', tense)
          .eq('pronoun', pronoun.pp_id)

        if (error) throw error;
        setCorrectAnswer(data[0].conjugated_form);
      } catch (e) {
        return e;
      }
    }

    fetchAnswer();
  }, [pronoun, tense, verb])

  return (
    <div>
      {(answer === 'RevealAnswer') &&
        <>
          <p>
            The answer is: {`${pronoun.pronoun} ${correctAnswer}`}
          </p>
        </>
      }
      {(answer !== correctAnswer) && (answer !== 'RevealAnswer') &&
        <>
          <p>Fill in the blank with the correct conjugation for {verb.infinitive} in the {tense} tense.
          </p>
          <p>{pronoun.pronoun} ________</p>
          <AnswerInput
            correctAnswer={correctAnswer}
            answer={answer}
            setAnswer={setAnswer}
          />
        </>
      }
      {(answer === correctAnswer) &&
        <>
          <p>
            Correct! The answer is: {`${pronoun.pronoun} ${correctAnswer}`}
          </p>
        </>
      }
    </div>
  )
}

export default QuizCard;