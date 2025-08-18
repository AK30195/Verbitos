import { useState, useEffect } from 'react';
import supabase from './utils/supabase.js';
import  useTenses  from './hooks/useTenses.js';

import './styles/App.css'
import Flashcard from './components/Flashcard.jsx';

function App() {

  const { tenses } = useTenses();
  const [verbGroups, setVerbGroups] = useState([]);

  useEffect(() => {
    getVerbGroups();
  }, []);


  async function getVerbGroups() {
    const { data } = await supabase.from("verb_groups").select();
    setVerbGroups(data);
  };

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

    </>
  )
}

export default App
