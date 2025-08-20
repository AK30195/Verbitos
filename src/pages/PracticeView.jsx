import useVerbs from '../hooks/useVerbs.js';
import usePronouns from '../hooks/usePronouns.js';
import QuizCard from '../components/QuizCard.jsx'

function PracticeView() {

  const { verbs } = useVerbs();
  const { pronouns } = usePronouns();

  return (
    <>
      {verbs.map((verb) => (
        <QuizCard
          verb={verb}
          tense={1}
          pronoun={pronouns[1]}
        />
      ))}
    </>
  )
};

export default PracticeView;