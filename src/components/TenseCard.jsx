import '../styles/TensesView.css';

function TenseCard({ header, tenseDescription, examples }) {
  return (
    <>
      <div className="tense-card-container">
        <div className='tense-card-top'>
          <h3>{header}</h3>
          <p>{tenseDescription}</p>
        </div>
        <div className='tense-card-bottom'>
          <h4>Examples</h4>
          <p>{examples[0]}</p>
          <p>{examples[1]}</p>
          <p>{examples[2]}</p>
        </div>
      </div>
    </>
  )
}

export default TenseCard;