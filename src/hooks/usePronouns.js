import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

export default function usePronouns(pronoun_id = null) {
    const [pronouns, setPronouns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState();

    useEffect(() => {
        async function fetchPronouns() {
            setLoading(true);
            try {
                let query = supabase.from("personal_pronouns").select();

                if (pronoun_id) {
                    query = query.eq("pp_id", pronoun_id);
                }

                const { data, error } = await query;

                if (error) throw error;
                setPronouns(data);
            } catch (err) {
                seterror(err);
                setPronouns([])
            } finally {
                setLoading(false);
            }
        }

        fetchPronouns();
    }, [pronoun_id])

    return { pronouns, loading, error };
};