import '../styles/TensesView.css';

function TenseCard({ header, tenseDescription, examples }) {
  return (
    <>
      <div className="tense-card-container">
        <div className='tense-card-top'>
          <h3 className='tense-card-header'>{header}</h3>
          <p>{tenseDescription}</p>
        </div>
        <div className='tense-card-bottom'>
          <h4 className='tense-card-header'>Examples</h4>
          <p className='tense-card-example'>{examples[0]}</p>
          <p className='tense-card-example'>{examples[1]}</p>
          <p className='tense-card-example'>{examples[2]}</p>
        </div>
      </div>
    </>
  )
}

export default TenseCard;