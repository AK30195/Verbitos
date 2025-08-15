import { useState, useEffect } from 'react';
import supabase from './utils/supabase.js';

import './styles/App.css'
import Flashcard from './components/Flashcard.jsx';

function App() {

  const [moods, setMoods] = useState([]);

  useEffect(() => {
    getMoods();
  }, []);
  
  async function getMoods() {
    const { data } = await supabase.from("moods").select();
    setMoods(data);
  }

  return (
    <>
      <ul>
        {moods.map((mood) => (
          <li key={mood.mood_id}>{mood.name}</li>
        ))}
      </ul>
      <Flashcard />
    </>
  )
}

export default App
