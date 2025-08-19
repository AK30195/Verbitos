import { useState, useEffect } from 'react';
import supabase from './utils/supabase.js';
import  useTenses  from './hooks/useTenses.js';
import useVerbGroups from './hooks/useVerbGroups.js';
import useVerbs from './hooks/useVerbs.js';

import './styles/App.css'
import Flashcard from './components/Flashcard.jsx';
import QuizCard from './components/QuizCard.jsx';
import usePronouns from './hooks/usePronouns.js';

function App() {

  const { tenses } =  useTenses();
  const { verbGroups } = useVerbGroups(1);
  const { verbs } = useVerbs();
  const { pronouns } = usePronouns();
  

  return (
    <>
      <ul>
        {tenses.map((tense) => (
          <li key={tense.tense_id}>
            {verbGroups.map((verbGroup) => (
              <Flashcard
                tense_id={tense.tense_id}
                tense_name={tense.name}
                verb_group={verbGroup.group_id}
                verb_group_ending={verbGroup.inf_ending}
              />
            ))}
          </li>
        ))}
      </ul>
      {verbs.map((verb) => (
           <QuizCard 
            verb={verb}
            tense={1}
            pronoun={pronouns[0]}
          />
      ))}
    </>
  )
}

export default App
