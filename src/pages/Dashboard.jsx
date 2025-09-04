import Card from "../components/Card";
import Hero from "../components/Hero";


function Dashboard() {


  return (
    <>
      <div className="dashboard-main">
        <Hero />
        <div className="dashboard-cards-div">
          <Card 
            header="Flashcards"
            text='Use our flashcards to help you memorise tense endings.'
            link="/flashcards"
          />
          <Card 
            header="Practice Mode"
            text='Practice conjugating verbs. Choose your tense and verb group.'
            link="/practice"
          />
          <Card 
            header="Tenses"
            text='Confused about tenses? Check out our guide to tenses & moods!'
            link="/moods-tenses"
          />
        </div>
      </div>
    </>
  )
}

export default Dashboard;