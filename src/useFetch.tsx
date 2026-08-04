import { useEffect, useState } from "react";
import type { SocialProofProps } from "./features/socialproof/SocialProof";

const useFetch = ((url: string) => {

    const [data, setData] = useState<SocialProofProps[]>([]);
    const [isLoading, setLoading] = useState(true); // For notifying the user that the data is loading.
    const [error, setError] = useState(null); // For notifying the user that there is and error with the data.

    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
            .then(response => {
                if (!response.ok) {
                    throw Error("App.tsx: json file error.");
                }
                return response.json();

            }).then(data => {
                setLoading(false);
                setError(null);
                setData(data);
                
                console.log('App.tsx: json loaded');
            }

            )
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted cleanly');
                    return; 
                }

                setLoading(false);
                setError(err.message);
                console.error('App.tsx: Error loading data: ', err)
            });

            // console.log("useFetch.tsx/data: " + JSON.stringify(data));

            return () => abortCont.abort(); // Abort the fetch
    }, []);

    return { data, isLoading, error }
}
)

export default useFetch;