import useVerbs from '../hooks/useVerbs.js';
import usePronouns from '../hooks/usePronouns.js';
import useTensesGroupedByMood from '../hooks/useTensesGroupedByMood.js';
import useMoods from '../hooks/useMoods.js';
import useTenses from '../hooks/useTenses.js';
import useVerbGroups from '../hooks/useVerbGroups.js';
import QuizCard from '../components/QuizCard.jsx';
import DataFetcher from '../components/DataFetcher.jsx';
import { useMemo, useState } from 'react';
import FilterSelect from '../components/FilterSelect.jsx';

function PracticeView() {

  const [selectedTenses, setSelectedTenses] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [practiceLength, setPracticeLength] = useState(0);
  const [stage, setStage] = useState('setup');
  const [quizCardIdx, setQuizCardIdx] = useState(0);

  // Data needed fetched from api
  const { verbs, loading: verbsLoading, error: verbsError, } = useVerbs();
  const { pronouns, loading: pronounsLoading, error: pronounsError } = usePronouns();
  const { moods, loading: moodsLoading, error: moodsError } = useMoods();
  const { tenses, loading: tensesLoading, error: tensesError } = useTenses();
  const { verbGroups, loading: groupsLoading, error: groupsError } = useVerbGroups();

  // Returns tenses grouped by mood for FilterSelect component
  const groupedTenseOptions = useTensesGroupedByMood(tenses, moods);

  // Generates pool of practice questions
  const questionPool = useMemo(() => {

    // Filter by tenses returned from FilterSelect onChange
    const filteredTenses = tenses.filter(
      (tense) =>
      (selectedTenses.length === 0 ||
        selectedTenses.some((t) => t.value === tense.tense_id))
    );

    // Filter verbs to get regular verbs in selectedGroups
    const filteredVerbs = verbs.filter(
      (verb) =>
        verb.is_regular && (
          selectedGroups.length === 0 ||
          selectedGroups.some((g) => g.value === verb.verb_group)
        )
    );

    // Will hold objects with parameters for QuizCard component
    const result = [];

    // Used to check for unique combinations for result array
    const seen = new Set();

    // Use to check for invalid combinations when generating parameters
    function isValidCombo(tense, pronoun) {
      // Both imperative tenses don't have a 'yo' form
      if ((tense.tense_id === 4 || tense.tense_id === 5) && pronoun.pp_id === 1) {
        return false;
      }
      return true;
    };

    while (result.length < practiceLength) {
      const verb = filteredVerbs[Math.floor(Math.random() * filteredVerbs.length)];
      const tense = filteredTenses[Math.floor(Math.random() * filteredTenses.length)];
      const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];

      // Skip combination if it doesn't exist in database
      if (!isValidCombo(tense, pronoun)) {
        continue;
      };

      // Check if combination already seen, if not added to array
      const key = `${verb.verb_id}-${tense.tense_id}-${pronoun.pp_id}`;
      if (!seen.has(key)) {
        seen.add(key);
        result.push({ verb, tense, pronoun });
      }

      // Break if pool is smaller than practiceLength
      if (seen.size >= filteredVerbs.length * filteredTenses.length * pronouns.length) {
        break;
      }
    }

    return result;
  }, [tenses, verbs, practiceLength, selectedTenses, selectedGroups, pronouns]);

  return (
    <>
      <div className='practice-heading'>
        <h1>Conjugation Practice</h1>
      </div>
      {stage === "setup" && (
        <>
          <div className='practice-subheading'>
            <h3>Choose your settings</h3>
          </div>
          <div className='filter-select-container'>
            <FilterSelect
              category='tenses'
              options={groupedTenseOptions}
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
                { value: 10, label: 10 },
                { value: 20, label: 20 },
                { value: 30, label: 30 },
                { value: 40, label: 40 },
                { value: 50, label: 50 }
              ]}
              onChange={(selected) => setPracticeLength(selected?.value || 0)}
              isMulti={false}
              closeMenu={true}
            />
          </div>
          <div className='practice-btn-container'>
            <button
              disabled={practiceLength === 0 || questionPool.length === 0}
              onClick={() => {
                setQuizCardIdx(0);
                setStage("practice");
              }}
            >
              Start Practice
            </button>
          </div>
        </>
      )}
      {stage === "practice" && questionPool.length > 0 && (
        <>
          <DataFetcher
            loading={verbsLoading || pronounsLoading || moodsLoading || tensesLoading || groupsLoading}
            error={verbsError || pronounsError || moodsError || tensesError || groupsError}
          >
          </DataFetcher>
          <QuizCard
            key={`${questionPool[quizCardIdx].verb.verb_id}-${questionPool[quizCardIdx].tense.tense_id}-${questionPool[quizCardIdx].pronoun.pp_id}`}
            verb={questionPool[quizCardIdx].verb}
            tense={questionPool[quizCardIdx].tense}
            pronoun={questionPool[quizCardIdx].pronoun}
            onNext={() => {
              if (quizCardIdx + 1 < questionPool.length) {
                setQuizCardIdx(quizCardIdx + 1);
              } else {
                setStage("finished");
              }
            }}
          />
        </>
      )}
      {stage === "finished" && (
        <div className='practice-complete-div'>
          <h2>Practice Complete 🎉</h2>
          <div className='practice-btn-container'>
            <button onClick={() => {
              setStage("setup");
              setPracticeLength(0);
              setSelectedGroups([])
            }}>
              Start Again
            </button>
          </div>
        </div>
      )}
    </>
  )
};

export default PracticeView;