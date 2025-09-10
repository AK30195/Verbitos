import * as motion from "motion/react-client";
import TenseCard from "../components/TenseCard";
import TenseEndingsTable from "../components/TenseEndingsTable";
import '../styles/TensesView.css';


function TensesView() {

  return (
    <>
      <div className="main-container">
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
          <div className="text-container">
            <p>
              Mood and tense work together to convey the full meaning and context of a verb. For example, the
              future indicative is the simple future tense used for what will certainly happen, while the present subjunctive
              is for talking about hypotheticals or doubts in the present.
            </p>
          </div>
        </div>
        <div className="section-container">
          <div className="text-container">
            <h2>Understanding Conjugations</h2>
            <p>
              In Spanish, verbs can be placed into three groups based on the last two letters of the verb
              infinitive. The infinitive is the verb in its unconjugated form. For example the verb infinitive
              'comer' is the equivalent of 'to eat'.
            </p>
            <p>Verb infinitives in Spanish will always end in - </p>
            <p><span className="primary-highlight">'ar'</span> e.g. hablar - to speak</p>
            <p><span className="primary-highlight">'er'</span> e.g. aprender - to learn</p>
            <p><span className="primary-highlight">'ir'</span> e.g. vivir - to live.</p>

            <p>
              Each verb group has its own conjugation pattern for each tense. These patterns
              are comprised of different verb endings based on the personal pronoun being used. All regular 
              verbs will follow the same pattern. See the table below which shows the verb endings for the present tense.
            </p>
            <TenseEndingsTable
              tense_id={1}
            />
            <div className="text-container">
              <p>The pronouns used in the table above are translated as -</p>
              <p><span className="primary-highlight">yo</span> - <span className="secondary-highlight">I</span></p>
              <p><span className="primary-highlight">tú</span> - <span className="secondary-highlight">you</span></p>
              <p><span className="primary-highlight">él/ ella/ usted</span> - <span className="secondary-highlight">he/ she/ you(formal)</span></p>
              <p><span className="primary-highlight">nosotros</span> - <span className="secondary-highlight">we</span></p>
              <p><span className="primary-highlight">vosotros</span> - <span className="secondary-highlight">you (plural)</span></p>
              <p><span className="primary-highlight">ellos/ ellas/ ustedes</span> - <span className="secondary-highlight">they(masc.)/ they(fem.)/ you (plural formal)</span></p>
            </div>
            <div className="text-container">
              <p>For most tenses you will conjugate verbs using the following formula -</p>
              <p>Pronoun + <span className="primary-highlight">verb stem/infinitive</span> + <span className="secondary-highlight">ending</span></p>
              <p>You will see when learning different tenses in Spanish that some are conjugated with the verb stem and others using the infinitive.
                So what's the difference? The verb stem is formed by removing the last two letters from the infinitive.
              </p>
              <p>
                So <span className="primary-highlight">hablar(to speak)</span> for example has a stem of <span className="secondary-highlight">'habl'</span> which 
                becomes <span className="tertiary-highlight">yo hablo</span> once conjugated in the first person singular.
              </p>
              <p>
                Whereas in the simple future tense which is conjugated using the infinitive, the first person singular is -
              </p>
              <p>
                yo + <span className="primary-highlight">infinitive (hablar)</span> + <span className="secondary-highlight">ending (é)</span> = <span className="tertiary-highlight">yo hablaré</span>
              </p>
              <p>
                It's also worth knowing that Spanish speakers often exclude pronouns when speaking. This is because we can figure out 
                the pronoun based on the way the verb is conjugated, unlike in English where some pronouns use the same verb conjugation.
                So it would be very common to hear someone say just <span className="tertiary-highlight">'hablo'</span> or <span className="tertiary-highlight">'hablaré'</span>.
              </p>
              <p>
                There are 14 tenses that are used commonly in modern Spanish. This page will describe all of them with examples. Once you get a grasp of what there
                is to learn you can use our <a className="paragraph-link" href="/flashcards">Flashcards</a> to memorise tense conjugation endings and
                our <a className="paragraph-link" href="/practice">Practice Mode</a> to test your knowledge.
              </p>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="mood-div">
            <div className="text-container">
              <h2>Indicative Tenses</h2>
              <p>The indicative is the first place all Spanish learners should start as it is
                the most commonly used. It can thought of as the default mood that is used to discuss 
                information that is factual, certain or objective. Tenses in the indicative will be the 
                ones you will encounter most often in everyday communication.
              </p>
            </div>
            <TenseCard
              header={'Present'}
              tenseDescription={'The present tense is the most basic tense for speaking about current happenings or to describe something.'}
              examples={[
                'Yo tengo veinte años. - I am twenty years old.',
                'Ella habla dos idiomas, inglés y español. - She speaks two languages, English and Spanish.',
                'Corremos todos los días. - We run everyday.'
              ]}
            />
            <TenseCard
              header={'Future Simple'}
              tenseDescription={'The Future Simple tense is used to describe actions that will happen at a later time, with certainty.'}
              examples={[
                'Yo hablaré con ella mañana. - I will speak with her tomorrow.',
                'Ellos comerán en el restaurante esta noche. - They will eat at the restaurant tonight',
                'Nosotros viajaremos a España el próximo año. - We will travel to Spain next year.'
              ]}
            />
            <TenseCard
              header={'Preterite'}
              tenseDescription={'The Preterite tense is used to describe actions that were completed in the past, often at a specific point in time.'}
              examples={[
                'Ayer estudié para el examen. - Yesterday I studied for the exam.',
                'Ella viajó a México el año pasado. - She traveled to Mexico last year.',
                'Ellos llegaron tarde a la fiesta. - They arrived late to the party.'
              ]}
            />
            <TenseCard
              header={'Imperfect'}
              tenseDescription={'The Imperfect tense describes past actions that were ongoing, repeated, or without a clear beginning or end.'}
              examples={[
                'Cuando era niño, jugaba en el parque todos los días. - When I was a child, I used to play in the park every day.',
                'Ella leía mientras él escribía. - She was reading while he was writing.',
                'Siempre nadábamos en el lago cada verano. - We always used to swim in the lake each summer.'
              ]}
            />
            <TenseCard
              header={'Conditional'}
              tenseDescription={'The Conditional tense is used to describe what would happen under certain conditions or circumstances.'}
              examples={[
                'Yo compraría una casa grande. - I would buy a big house.',
                '¿Qué harías en mi lugar? - What would you do in my place?',
                'Ellos viajarían más si tuvieran tiempo. - They would travel more if they had time.'
              ]}
            />
          </div>
        </div>
        <div className="section-container">
          <div className="mood-div">
            <div className="text-container">
              <h2>Subjunctive Tenses</h2>
              <p>
                Learning to use the subjunctive will display a greater level of fluency. It’s less about stating facts and more about attitudes,
                desires, or possibilities. It can be difficult to grasp for English speakers as it is a much more integral
                part of the Spanish language. The subjunctive is used relatively little in English as it can often be replaced with
                indicative verb forms, whereas Spanish has distinct conjugations that should be used when dealing with possibilities or hypotheticals.
              </p>
            </div>
            <TenseCard
              header={'Present Subjunctive'}
              tenseDescription={'The Present Subjunctive is used to express uncertainty, desire, or emotion about current or future actions.'}
              examples={[
                'Espero que tengas un buen día. - I hope you have a good day.',
                'Es posible que ellos lleguen tarde. - It’s possible that they arrive late.',
                'Ojalá que llueva mañana. - Hopefully it rains tomorrow.'
              ]}
            />
            <TenseCard
              header={'Imperfect Subjunctive'}
              tenseDescription={'The Imperfect Subjunctive is used to express the same ideas as the subjunctive, but in the past or in hypothetical situations.'}
              examples={[
                'Si yo fuera rico, viajaría por el mundo. - If I were rich, I would travel the world.',
                'Quería que vinieras a mi fiesta. - I wanted you to come to my party.',
                'Dudaba que ellos estudiaran tanto. - I doubted that they studied that much.'
              ]}
            />
            <TenseCard
              header={'Present Perfect Subjunctive'}
              tenseDescription={'The Present Perfect Subjunctive is used to express doubt, desire, or emotion about actions that have already happened.'}
              examples={[
                'Me alegro de que hayas venido. - I’m glad that you have come.',
                'Es posible que ellos hayan terminado. - It’s possible that they have finished.',
                'No creo que lo hayan visto. - I don’t think they have seen it.'
              ]}
            />
            <TenseCard
              header={'Past Perfect Subjunctive (Pluperfect)'}
              tenseDescription={'The Past Perfect Subjunctive is used to express hypotheticals about the past or regrets about actions that didn’t happen.'}
              examples={[
                'Si hubieras estudiado, habrías pasado el examen. - If you had studied, you would have passed the exam.',
                'Ojalá que me hubieras dicho la verdad. - I wish you had told me the truth.',
                'Dudaba que ellos hubieran llegado a tiempo. - I doubted that they had arrived on time.'
              ]}
            />
          </div>
        </div>
        <div className="section-container">
          <div className="mood-div">
            <div className="text-container">
              <h2>Imperative Mood</h2>
              <p>
                The imperative is used to give commands, instructions, or requests.
                It has endings for both affirmative and negative forms, and changes depending
                on whether you are addressing someone informally (tú, vosotros) or
                formally (usted, ustedes). It technically doesn't have tenses as
                all commands are issued the same way whether the command is meant to
                be completed immediately or at some other time.
              </p>
            </div>
            <TenseCard
              header={'Affirmative Imperative'}
              tenseDescription={'Used to tell someone to do something. Common for giving direct commands or instructions.'}
              examples={[
                '¡Habla más despacio! - Speak more slowly!',
                'Ven aquí, por favor. - Come here, please.',
                'Sigue derecho dos cuadras. - Go straight two blocks.'
              ]}
            />
            <TenseCard
              header={'Negative Imperative'}
              tenseDescription={'Used to tell someone not to do something. Formed using the subjunctive.'}
              examples={[
                '¡No hables tan rápido! - Don’t speak so fast!',
                'No comas eso. - Don’t eat that.',
                'No olviden sus libros. - Don’t forget your books.'
              ]}
            />
          </div>
        </div>
      </div>
    </>
  )
};

export default TensesView;