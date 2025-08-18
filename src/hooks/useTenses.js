import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

export default function useTenses(tense_id = null) {
    const [tenses, setTenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();



    useEffect(() => {
        async function fetchTenses() {
            setLoading(true);
            try {
                let query = supabase.from("tenses").select();

                if (tense_id) {
                    query = query.eq("tense_id", tense_id);
                }

                const { data, error } = await query;

                if (error) throw error;
                setTenses(data); 
            } catch (err) {
                setError(err);
                setTenses([]); 
            } finally {
                setLoading(false);
            }
        }

        fetchTenses();
    }, [tense_id]);

    return { tenses, error, loading };
}

