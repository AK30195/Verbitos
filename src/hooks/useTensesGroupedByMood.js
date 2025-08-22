import { useMemo } from "react";

function useTensesGroupedByMood(tenses, moods) {
  return useMemo(() => {
    if (!tenses.length || !moods.length) return null;

    return moods.map((mood) => ({
      label: mood.name,
      options: tenses
        .filter((t) => t.mood === mood.mood_id)
        .map((t) => ({
          value: t.tense_id,
          label: t.name,
        })),
    }));
  }, [tenses, moods]);
};

export default useTensesGroupedByMood;