import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

export default function useVerbs(verb_id = null) {
    const [verbs, setVerbs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchVerbs() {
            setLoading(true);
            try {
                let query = supabase.from("verbs").select();

                if (verb_id) {
                    query = query.eq("verb_id", verb_id)
                }

                const { data, error } = await query;

                if (error) throw error;
                setVerbs(data);
            } catch (err) {
                setError(err);
                setVerbs([])
            } finally {
                setLoading(false)
            }
        }

        fetchVerbs();
    }, [verb_id]);

    return { verbs, loading, error };
}