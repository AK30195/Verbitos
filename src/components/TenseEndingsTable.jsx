import { useState, useEffect } from 'react';
import supabase from "../utils/supabase";

function TenseEndingsTable({tense_id}) {

  const [tenseEndings, setTenseEndings] = useState([]);

  // Get all endings for tense ordered by verb group then pronoun
  useEffect(() => {
    async function getEndings() {
      const { data, error } = await supabase
        .from('regular_verb_endings')
        .select("*")
        .eq('tense', tense_id)
        .order('verb_group')
        .order('pronoun');

      if (!error) setTenseEndings(data);
    };
    getEndings();
  }, [tense_id]);

  // Map pronoun IDs to pronoun strings
  const pronounMap = {
    1: "yo",
    2: "tú",
    3: "él/ ella/ usted",
    4: "nosotros",
    5: "vosotros",
    6: "ellos/ ellas/ ustedes"
  };

  // Reshape data into rows
  const rows = Object.values(
    tenseEndings.reduce((tableRows, item) => {
      // create object for table row if pronoun hasn't been seen yet
      if (!tableRows[item.pronoun]) {
        tableRows[item.pronoun] = { pronoun: pronounMap[item.pronoun], ar: "", er: "", ir: "" };
      }
      // Add ending for each verb group
      if (item.verb_group === 1) tableRows[item.pronoun].ar = item.ending;
      if (item.verb_group === 2) tableRows[item.pronoun].er = item.ending;
      if (item.verb_group === 3) tableRows[item.pronoun].ir = item.ending;
      return tableRows;
    }, {})
  );


  return (
    <div className="endings-table">
      <div className="endings-table-header">
        <div className="endings-table-cell">
          Pronoun
        </div>
        <div className="endings-table-cell">
          -ar verbs
        </div>
        <div className="endings-table-cell">
          -er verbs
        </div>
        <div className="endings-table-end-cell">
          -ir verbs
        </div>
      </div>
      <div className="endings-table-body">
        {rows.map((row, i) => (
          <div key={i} className="endings-table-row">
            <div className="endings-table-cell">{row.pronoun}</div>
            <div className="endings-table-cell">-{row.ar}</div>
            <div className="endings-table-cell">-{row.er}</div>
            <div className="endings-table-end-cell">-{row.ir}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TenseEndingsTable;