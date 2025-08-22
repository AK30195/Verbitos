import useVerbs from '../hooks/useVerbs.js';
import usePronouns from '../hooks/usePronouns.js';
import useTensesGroupedByMood from '../hooks/useTensesGroupedByMood.js';
import useMoods from '../hooks/useMoods.js';
import useTenses from '../hooks/useTenses.js';
import useVerbGroups from '../hooks/useVerbGroups.js';
import QuizCard from '../components/QuizCard.jsx';
import DataFetcher from '../components/DataFetcher.jsx';
import { useState } from 'react';
import FilterSelect from '../components/FilterSelect.jsx';

function PracticeView() {

  const [selectedTenses, setSelectedTenses] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [practiceLength, setPracticeLength] = useState(0);
  const [cardsLeft, setCardsLeft] = useState(0);

  const { verbs, loading: verbsLoading, error: verbsError, } = useVerbs();
  const { pronouns, loading: pronounsLoading, error: pronounsError } = usePronouns();
  const { moods, loading: moodsLoading, error: moodsError } = useMoods();
  const { tenses, loading: tensesLoading, error: tensesError } = useTenses();
  const { verbGroups, loading: groupsLoading, error: groupsError } = useVerbGroups();


  // Returns tenses grouped by mood for FilterSelect component
  const groupedTenseOptions = useTensesGroupedByMood(tenses, moods);

  return (
    <>
      <DataFetcher
        loading={verbsLoading || pronounsLoading || moodsLoading || tensesLoading || groupsLoading}
        error={verbsError || pronounsError || moodsError || tensesError || groupsError}
        loadingText="Fetching practice data..."
      ></DataFetcher>
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
      <FilterSelect
        category={'practice length'}
        options={[
          {value: 10, label: 10},
          {value: 20, label: 20},
          {value: 30, label: 30},
          {value: 40, label: 40},
          {value: 50, label: 50}
        ]}
        onChange={(selected) => setPracticeLength(selected?.value || 0)}
        isMulti={false}
        closeMenu={true}
      />
      {verbs.map((verb) => (
        pronouns.map((pronoun) => (
          <QuizCard
            key={`${verb.verb_id}-${pronoun.pp_id}`}
            verb={verb}
            tense={1}
            pronoun={pronoun}
          />
        ))))}
    </>
  )
};

export default PracticeView;