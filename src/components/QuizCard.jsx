import { useEffect, useState } from "react";
import AnswerInput from "./AnswerInput";
import supabase from "../utils/supabase";

function QuizCard({verb, tense, pronoun}) {

    const [correctAnswer, setCorrectAnswer] = useState('');

    useEffect(() => {
        async function fetchAnswer() {
            try {
                const { data, error } = await supabase
                .from('verb_conjugations')
                .select()
                .eq('verb', verb.verb_id)
                .eq('tense', tense)
                .eq('pronoun', pronoun.pp_id)

                if(error) throw error;
                setCorrectAnswer(data[0].conjugated_form);
            } catch (e) {
                return e;
            }
        }

        fetchAnswer();
    }, [pronoun, tense, verb])

    return (
        <div>
            <p>Fill in the blank with the correct conjugation for {verb.infinitive} in the {tense} tense.
            </p>
            <p>{pronoun.pronoun} _____</p>
            <AnswerInput
            correctAnswer={correctAnswer}
            />
        </div>
    )
}

export default QuizCard;