import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// A custom hook for fetching data from a specified URL.
export const useFetch = (url : string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [loadingComplete, setLoadingComplete] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the URL is empty or null, navigate to error page if so
        if (!url || url === null) {
            navigate("/page404");
            return;
        }

        // Fetch data from the specified URL
        const getData = async () => {
            try {
                const response = await fetch(url);
                const dataJSON = await response.json();
                setData(dataJSON);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
                setLoadingComplete(!loading && !error);
            }
        };
        getData();

    }, [url, navigate, loading, error]);

    return { data, loading, error, loadingComplete };
};