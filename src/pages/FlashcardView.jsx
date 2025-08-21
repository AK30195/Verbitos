import { useState, useMemo } from 'react';
import FilterSelect from '../components/FilterSelect.jsx';
import Flashcard from '../components/Flashcard.jsx';
import useTenses from '../hooks/useTenses.js';
import useVerbGroups from '../hooks/useVerbGroups.js';

function FlashcardView() {

  const { tenses } = useTenses();
  const { verbGroups } = useVerbGroups();

  const [selectedTenses, setSelectedTenses] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);

  const groupedTenseOptions = useMemo(() => [
    {
      label: 'Indicative',
      options: tenses.filter((t) => t.mood === 1)
        .map((t) => ({value: t.tense_id, label: t.name}))
    },
    {
      label: 'Subjunctive',
      options: tenses.filter((t) => t.mood === 2)
        .map((t) => ({value: t.tense_id, label: t.name}))
    },
    {
      label: 'Imperative',
      options: tenses.filter((t) => t.mood === 3)
        .map((t) => ({value: t.tense_id, label: t.name}))
    },
  ], [tenses]);

  function getFilteredFlashcards() {
    // Filter by tense
    const filteredTenses = tenses.filter(
      (tense) =>
        (selectedTenses.length === 0 ||
          selectedTenses.some((s) => s.value === tense.tense_id)) 
    );
    // Filter by verb ending
    const filteredGroups = verbGroups.filter(
      (group) =>
        selectedGroups.length === 0 ||
        selectedGroups.some((s) => s.value === group.group_id)
    );

    // Render flashcards that fit selected filters 
    return filteredTenses.flatMap((tense) =>
      filteredGroups.map((group) => (
        <Flashcard
          key={`${tense.tense_id}-${group.group_id}`}
          tense={tense}
          verb_group={group}
        />
      ))
    )
      ;
  };


  const flashcards = getFilteredFlashcards();

  return (
    <div>
      <div>
        <FilterSelect
          category={'tenses'}
          options={groupedTenseOptions}
          value={selectedTenses}
          onChange={(selected) => setSelectedTenses(selected || [])}
        />
      </div>
      <div>
        <FilterSelect
          category="verb groups"
          options={verbGroups.map((g) => ({
            value: g.group_id,
            label: g.inf_ending,
          }))}
          value={selectedGroups}
          onChange={(selected) => setSelectedGroups(selected || [])}
        />
      </div>
      <ul>
        {flashcards}
      </ul>
    </div>
  )
};

export default FlashcardView;