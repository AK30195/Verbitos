import * as motion from "motion/react-client";
import '../styles/TensesView.css';


function TensesView() {

  return (
    <>
      <div className="section-container">
        <div className="tenses-heading">
          <h1>
            Tenses & Moods Explained
          </h1>
        </div>
        <div className="double-card-container">
          <div className="card-div">
            <h2>What is a Mood?</h2>
            <p>
              Moods convey the speakers attitude or intention.
            </p>
            <p>There are 3 moods in Spanish - </p>
            <div>
              <ul className="card-ul">
                <li className="card-li">Indicative - Used for facts, reality, speaking with certainty.</li>
                <li className="card-li">Subjunctive - Used for hypotheticals, wishes, feelings, doubts, speaking with uncertainty.</li>
                <li className="card-li">Imperative - Used for giving commands.</li>
              </ul>
            </div>
          </div>
          <div className="card-div">
            <h2>What is a Tense?</h2>
            <p>
              Tenses specify at what point in time an action takes place.
            </p>
            <p>This can be in the - </p>
            <ul className="card-ul">
              <li className="card-li">Past</li>
              <li className="card-li">Present</li>
              <li className="card-li">Future</li>
            </ul>
          </div>
        </div>
        <div>
          <p>
            Mood and tense work together to convey the full meaning and context of a verb. For example the
            future indicative is the simple future tense used for what will certainly happen, while the present subjunctive
            is for talking about hypotheticals or doubts in the present.
          </p>
        </div>
      </div>
      <div>
        <h2>Understanding Conjugations</h2>
        <p>
          In Spanish, verbs can be placed into three groups based on the last two letters of the verb
          infinitive. The infinitive is the verb in its unconjugated form. For example the verb infinitive
          'comer' is the equivalent of 'to eat'.
        </p>
        <p>Verb infinitives in Spanish will always end in - </p>
        <p><span className="ending-highlight">'ar'</span> e.g. hablar - to speak</p>
        <p><span className="ending-highlight">'er'</span> e.g. aprender - to learn</p>
        <p><span className="ending-highlight">'ir'</span> e.g. vivir - to live.</p>

        <p>
          Each verb group has its own conjugation pattern for each tense. These patterns
          are comprised of different verb endings based on the personal pronoun being used. See the table
          below which shows the verb endings for the present tense.
        </p>
      </div>
      <div>
        <h2>Indicative Tenses</h2>
        <p>The indicative is the first place all Spanish learners should start as it is
          the most commonly used.
        </p>
        <div>
          <h3>Present</h3>
          <p>The present tense is the most basic tense for speaking about current happenings or to describe something.</p>
          <h4>Examples</h4>
          <p>Yo tengo veinte años. - I am twenty years old.</p>
          <p>Ella habla dos idiomas, inglés y español. - She speaks two languages, English and Spanish.</p>
          <p>Corremos todos los días. - We run everyday.</p>
        </div>
      </div>
      <div>
        <h3>Future Simple</h3>
        <p>The Future Simple tense is used to describe actions that will happen at a later time, with certainty.</p>
        <h4>Examples</h4>
        <p>Yo hablaré con ella mañana. - I will speak with her tomorrow.</p>
        <p>Ellos comerán en el restaurante esta noche. - They will eat at the restaurant tonight.</p>
        <p>Nosotros viajaremos a España el próximo año. - We will travel to Spain next year.</p>
      </div>
      <div>
        <h3>Preterite</h3>
        <p>The Preterite tense is used to describe actions that were completed in the past, often at a specific point in time.</p>
        <h4>Examples</h4>
        <p>Ayer estudié para el examen. - Yesterday I studied for the exam.</p>
        <p>Ella viajó a México el año pasado. - She traveled to Mexico last year.</p>
        <p>Ellos llegaron tarde a la fiesta. - They arrived late to the party.</p>
      </div>
      <div>
        <h3>Imperfect</h3>
        <p>The Imperfect tense describes past actions that were ongoing, repeated, or without a clear beginning or end.</p>
        <h4>Examples</h4>
        <p>Cuando era niño, jugaba en el parque todos los días. - When I was a child, I used to play in the park every day.</p>
        <p>Ella leía mientras él escribía. - She was reading while he was writing.</p>
        <p>Siempre nadábamos en el lago cada verano. - We always used to swim in the lake each summer.</p>
      </div>
      <div>
        <h3>Conditional</h3>
        <p>The Conditional tense is used to describe what would happen under certain conditions or circumstances.</p>
        <h4>Examples</h4>
        <p>Yo compraría una casa grande. - I would buy a big house.</p>
        <p>¿Qué harías en mi lugar? - What would you do in my place?</p>
        <p>Ellos viajarían más si tuvieran tiempo. - They would travel more if they had time.</p>
      </div>
    </>
  )
};

export default TensesView;