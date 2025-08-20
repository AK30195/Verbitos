import { useState } from 'react';
import FilterSelect from '../components/FilterSelect.jsx';
import Flashcard from '../components/Flashcard.jsx';
import useTenses from '../hooks/useTenses.js';
import useVerbGroups from '../hooks/useVerbGroups.js';

function FlashcardView() {

  const { tenses } = useTenses();
  const { verbGroups } = useVerbGroups();

  const [selectedTenses, setSelectedTenses] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);

  function getFilteredFlashcards() {
    const filteredTenses = tenses.filter(
      (tense) =>
        selectedTenses.length === 0 ||
        selectedTenses.some((s) => s.value === tense.tense_id)
    );

    const filteredGroups = verbGroups.filter(
      (group) =>
        selectedGroups.length === 0 ||
        selectedGroups.some((s) => s.value === group.group_id)
    );

    // build flashcard components
    return filteredTenses.flatMap((tense) =>
      filteredGroups.map((group) => (
        <Flashcard
          key={`${tense.tense_id}-${group.group_id}`}
          tense_id={tense.tense_id}
          tense_name={tense.name}
          verb_group={group.group_id}
          verb_group_ending={group.inf_ending}
        />
      ))
    );
  }

  const flashcards = getFilteredFlashcards();

  return (
    <div>
      <div>
        <FilterSelect
          category={'tenses'}
          options={tenses.map((t) => ({ value: t.tense_id, label: t.name }))}
          onChange={(selected) => setSelectedTenses(selected || [])}
        />
      </div>
      <div>
        <FilterSelect
          category="verb groups"
          options={verbGroups.map((g) => ({value: g.group_id,
            label: g.inf_ending,
          }))}
          onChange={(selected) => setSelectedGroups(selected || [])}
        />
      </div>
      <div>
        <FilterSelect />
      </div>
      <ul>
        {flashcards}
      </ul>
    </div>
  )
};

export default FlashcardView;