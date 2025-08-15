import { useEffect, useState } from "react";
import AnswerInput from "./AnswerInput";
import FeedbackBar from "./FeedbackBar";
import supabase from "../utils/supabase";

function Flashcard({cardType, data}) {

    const [isFlipped, setIsFlipped] = useState(false);
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        getEndings();
    }, [])

    async function getEndings() {
        const { data, error } = await supabase
            .from('regular_verb_endings')
            .select("*")
            .eq('tense', 1)
            .eq('verb_group', 2);

        if (!error) setCardData(data);
    }

    return (
        <>
            {!isFlipped &&
                (
                    <div onClick={() => setIsFlipped(true)}>
                        <p>List the presnt tense endings for regular verbs ending with 'er'</p>
                    </div>
                )
            }
            {isFlipped &&
                (
                    <ul onClick={() => setIsFlipped(false)}>
                        {cardData.map((data) => (
                            <li key={data.id}>{data.ending}</li>
                        ))}
                    </ul>
                )
            }
            <AnswerInput />
            <FeedbackBar />
        </>
    )
}

export default Flashcard;