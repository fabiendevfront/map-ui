import { useEffect, useState } from "react";
import { useFetch } from "../services/useFetch.tsx";
import Map from "../components/Map.js";
import { sheltersFormat } from "../utils/sheltersFormat.ts";
import { FormattedShelters } from "../types/types.ts";

// Component for Homepage
const Home = () => {
    // Fetch data using the useFetch hook
    const { data, loading, error, loadingComplete } = useFetch("/data/shelters.geojson");
    const [formattedShelters, setFormattedShelters] = useState<FormattedShelters>([]);

    useEffect(() => {
        const storedShelters = localStorage.getItem("shelters");

        if (storedShelters) {
            const parsed = JSON.parse(storedShelters);
            setFormattedShelters(parsed);
        } else {
            const formatShelters = async () => {
                if (data) {
                    const formatted = await sheltersFormat(data);
                    setFormattedShelters(formatted);

                    localStorage.setItem("shelters", JSON.stringify(formatted));
                }
            };

            formatShelters();
        }
    }, [data]);


    return (
        <>
            {loading ? (
                <span>Chargement en cours</span>
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : formattedShelters ? (
                <section className={`home flex flex-col gap-8 ${loadingComplete ? "loaded" : ""}`}>
                    <h1>Refuges dans les Pyrénées</h1>
                    <Map shelters={formattedShelters} />
                </section>) : (
                <span>La page rencontre un problème</span>
            )}
        </>
    );
};

export default Home;