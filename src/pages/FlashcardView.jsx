import { useState } from 'react';
import FilterSelect from '../components/FilterSelect.jsx';
import Flashcard from '../components/Flashcard.jsx';
import useTenses from '../hooks/useTenses.js';
import useVerbGroups from '../hooks/useVerbGroups.js';
import useTensesGroupedByMood from '../hooks/useTensesGroupedByMood.js';
import useMoods from '../hooks/useMoods.js';
import DataFetcher from '../components/DataFetcher.jsx';

function FlashcardView() {

  const { moods, loading: moodsLoading, error: moodsError } = useMoods();
  const { tenses, loading: tensesLoading, error: tensesError } = useTenses();
  const { verbGroups, loading: groupsLoading, error: groupsError } = useVerbGroups();

  const [selectedTenses, setSelectedTenses] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);

  // Returns tenses grouped by mood for FilterSelect component
  const groupedTenseOptions = useTensesGroupedByMood(tenses, moods);

  // Returns array of Flashcards depending on filters chosen by user
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
      )));
  };

  const flashcards = getFilteredFlashcards();

  return (
    <div>
      <DataFetcher
        loading={moodsLoading || tensesLoading || groupsLoading}
        error={moodsError || tensesError || groupsError}
        loadingText='Fetching flashcard data...'
      ></DataFetcher>
      <div>
        <FilterSelect
          category='tenses'
          options={groupedTenseOptions}
          value={selectedTenses}
          onChange={(selected) => setSelectedTenses(selected || [])}
        />
      </div>
      <div>
        <FilterSelect
          category='verb groups'
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