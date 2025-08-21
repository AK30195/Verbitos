import { useState, useEffect } from "react";
import supabase from "../utils/supabase";

export default function useMoods(mood_id = null) {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchMoods() {
      setLoading(true);
      try {
        let query = supabase.from('moods').select();

        if (mood_id) {
          query = query.eq('mood_id', mood_id);
        }

        const { data, error } = await query;

        if (error) throw error;
        setMoods(data);
      } catch (err) {
        setError(err);
        setMoods([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMoods();
  }, [mood_id]);

  return { moods, loading, error }
}