import { useEffect, useState } from "react";
import FeedbackBar from "./FeedbackBar";
import supabase from "../utils/supabase";

function Flashcard({tense, verb_group }) {

    const [isFlipped, setIsFlipped] = useState(false);
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        async function getEndings() {
            const { data, error } = await supabase
                .from('regular_verb_endings')
                .select("*")
                .eq('tense', tense.tense_id)
                .eq('verb_group', verb_group.group_id);

            if (!error) setCardData(data);
        };

        getEndings();
    }, [ tense, verb_group]);

    return (
        <div className="flashcard">
            {!isFlipped &&
                (
                    <div onClick={() => setIsFlipped(true)}>
                        <p>List the {tense.name} tense endings for regular verbs ending with '{verb_group.inf_ending}'</p>
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
            <FeedbackBar />
        </div>
    )
}

export default Flashcard;