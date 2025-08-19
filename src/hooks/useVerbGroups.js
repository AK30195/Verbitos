import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

export default function useVerbGroups(group_id = null) {
    const [verbGroups, setVerbGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchGroups() {
            try {
                let query = supabase.from("verb_groups").select();

                if(group_id) {
                    query = query.eq("group_id", group_id)
                }

                const{data, error} = await query;

                if(error) throw error;
                setVerbGroups(data)
            } catch(err) {
                setError(err);
                setVerbGroups([])
            } finally {
                setLoading(false)
            }
        }

        fetchGroups();
    }, [group_id])

    return {verbGroups, loading, error};
}