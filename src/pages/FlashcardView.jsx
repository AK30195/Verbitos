import { useState } from 'react';
import FilterSelect from '../components/FilterSelect.jsx';
import Flashcard from '../components/Flashcard.jsx';
import useTenses from '../hooks/useTenses.js';
import useVerbGroups from '../hooks/useVerbGroups.js';
import useTensesGroupedByMood from '../hooks/useTensesGroupedByMood.js';
import usePronouns from '../hooks/usePronouns.js';
import useMoods from '../hooks/useMoods.js';
import DataFetcher from '../components/DataFetcher.jsx';
import '../styles/FlashcardView.css'

function FlashcardView() {

  const { moods, loading: moodsLoading, error: moodsError } = useMoods();
  const { tenses, loading: tensesLoading, error: tensesError } = useTenses();
  const { verbGroups, loading: groupsLoading, error: groupsError } = useVerbGroups();
  const { pronouns, loading: pronounsLoading, error: pronounsError } = usePronouns();

  const [selectedTenses, setSelectedTenses] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);

  // Returns tenses grouped by mood for FilterSelect component
  const groupedTenseOptions = useTensesGroupedByMood(tenses, moods);

  // Returns array of Flashcards matching filters chosen by user
  function getFilteredFlashcards() {
    // Filter by tenses returned from FilterSelect onChange
    const filteredTenses = tenses.filter(
      (tense) =>
      (selectedTenses.length === 0 ||
        selectedTenses.some((t) => t.value === tense.tense_id))
    );
    // Filter by verb ending
    const filteredGroups = verbGroups.filter(
      (group) =>
        selectedGroups.length === 0 ||
        selectedGroups.some((g) => g.value === group.group_id)
    );

    // Render flashcards that fit selected filters 
    return filteredTenses.flatMap((tense) =>
      filteredGroups.map((group) => (
        <Flashcard
          key={`${tense.tense_id}-${group.group_id}`}
          tense={tense}
          verb_group={group}
          pronouns={pronouns}
        />
      )));
  };

  const flashcards = getFilteredFlashcards();

  return (
    <div>
      <div className='heading-div'>
        <h1>Flashcards</h1>
      </div>
      <div>
        <p>Use our falshcards to help you memorise conjugations for
          the various different tenses
        </p>
        <p>
          Choose which tenses and verb groups you want to work on below.
        </p>
      </div>
      <div className='filter-select-container'>
        <FilterSelect
          category='tenses'
          options={groupedTenseOptions}
          value={selectedTenses}
          onChange={(selected) => setSelectedTenses(selected || [])}
        />
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
      {!flashcards &&
        <DataFetcher
          loading={moodsLoading || tensesLoading || groupsLoading || pronounsLoading}
          error={moodsError || tensesError || groupsError || pronounsError}
        >
        </DataFetcher>
      }
      <ul>
        {flashcards}
      </ul>
    </div>
  )
};

export default FlashcardView;