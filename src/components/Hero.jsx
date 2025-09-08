import DashCard from "../components/DashCard";

function Hero() {

  return (
    <div className="hero-div">
      <div className="hero-tagline-div">
        <h1 className="hero-tagline">Making Spanish verbs fácil.</h1>
      </div>
      <div className="hero-subheading">
        <h2>Verbitos is the one-stop resource for learning Spanish verbs.</h2>
      </div>
      <div className="hero-text-div">
        <p className="hero-text">One of the more challenging aspects of learning Spanish is mastering verb conjugations.</p>
      </div>
      <div className="hero-text-div">
        <p className="hero-text">Verbitos is here to help!</p>
      </div>
      <div className="hero-button-div">
        <a className="hero-button" href="/moods-tenses">
          Start Learning
        </a>
      </div>
      <div className="dashboard-cards-div">
        <DashCard
          header="Flashcards"
          text='Use our flashcards to help you memorise different tense verb endings.'
          link="/flashcards"
        />
        <DashCard
          header="Practice Mode"
          text='Practice conjugating verbs. Choose your tense and verb group.'
          link="/practice"
        />
      </div>
    </div>
  )
}
export default Hero;