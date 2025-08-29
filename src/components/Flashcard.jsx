import { useEffect, useState } from "react";
import FeedbackBar from "./FeedbackBar";
import supabase from "../utils/supabase";

function Flashcard({ tense, verb_group, pronouns }) {

  const [isFlipped, setIsFlipped] = useState(false);
  const [cardData, setCardData] = useState([]);

  let displayPronouns = pronouns;

  // Change pronouns for imperative as doesn't include él/ella or ellos/ellas
  if (tense.name === 'Affirmative Imperative' || tense.name === 'Negative Imperative') {
    displayPronouns = pronouns.map((p) => {
      if (p.pronoun === 'él/ella/usted') {
        return { ...p, pronoun: 'usted' };
      }
      if (p.pronoun === 'ellos/ellas/ustedes') {
        return { ...p, pronoun: 'ustedes' };
      }
      return p;
    });
  }

  useEffect(() => {
    async function getEndings() {
      const { data, error } = await supabase
        .from('regular_verb_endings')
        .select("*")
        .eq('tense', tense.tense_id)
        .eq('verb_group', verb_group.group_id)
        .order('pronoun');

      if (!error) setCardData(data);
    };
    getEndings();
  }, [tense, verb_group]);

  return (
    <div className="flashcard">
      {!isFlipped &&
        (
          <div  className="flashcard-front">
            <div className="flashcard-content-div" onClick={() => setIsFlipped(true)}>
              <p>List the <span className="tense-highlight">{tense.name}</span>  tense endings for regular verbs ending with <span className="ending-highlight">'{verb_group.inf_ending}'</span></p>
            </div>
          </div>
        )
      }
      {isFlipped &&
        (
          <div className="flashcard-back">
            <div className="flashcard-content-div" onClick={() => setIsFlipped(false)} >
              <div>
                <h3>{tense.name} endings for '{verb_group.inf_ending}' verbs</h3>
              </div>
              <div className="flashcard-endings-grid">
                {cardData.map((data) => {
                  const pronounObj = displayPronouns.find((p) => p.pp_id === data.pronoun);
                  return (
                    <div className="flashcard-endings-row" key={data.id} >
                      <div className="pronoun-container">
                        {pronounObj ? pronounObj.pronoun : "?"}
                      </div>
                      <div className="ending-container">
                        -{data.ending}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <p>Formed by {tense.conjugation_method} </p>
              </div>
              <div>
                <p>Example - </p>
              </div>
            </div>
          </div>
        )
      }
      <FeedbackBar />
    </div>
  )
}

export default Flashcard;