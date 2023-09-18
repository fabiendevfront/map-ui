import { useEffect, useState } from "react";
import { useFetch } from "../services/useFetch.tsx";
import Map from "../components/Map.js";
import { sheltersFormat } from "../utils/sheltersFormat.ts";

// Créer un type pour les données transformées
type FormattedShelters = {
    name: string;
    altitude: string;
    department: string;
    latitude: number;
    longitude: number;
}[];


// Component for Homepage
const Home = () => {
    // Fetch data using the useFetch hook
    const { data, loading, error, loadingComplete } = useFetch("/data/shelters.geojson");
    const [formattedShelters, setFormattedShelters] = useState<FormattedShelters>([]);

    useEffect(() => {
        const formatShelters = async () => {
            if (data) {
                const formatted = await sheltersFormat(data);
                setFormattedShelters(formatted);
            }
        };

        formatShelters();
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
                    {formattedShelters.map((shelter, index) => 
                        <div className="shelters" key={index}>
                            <p>Nom: {shelter.name}</p>
                            <p>Département: {shelter.department}</p>
                            <p>Latitude: {shelter.latitude}</p>
                            <p>Longitude: {shelter.longitude}</p>
                            <p>Altitude: {shelter.altitude}</p>
                        </div>
                    )}
                    <Map />
                </section>) : (
                <span>La page rencontre un problème</span>
            )}
        </>
    );
};

export default Home;