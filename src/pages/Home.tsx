import { useSheltersStore } from "../services/useSheltersStore";
import { useFetch } from "../services/useFetch.tsx"; // Importez le hook useFetch
import Map from "../components/Map.js";

// Component for Homepage
const Home = () => {
    const { shelters } = useSheltersStore(); // Utilisez useSheltersStore pour accéder aux données de refuges
    const { loading, error, loadingComplete } = useFetch("/data/shelters.geojson"); // Utilisez le hook useFetch pour gérer les états

    return (
        <>
            {loading ? (
                <span>Chargement en cours</span>
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : shelters ? (
                <section className={`home flex flex-col gap-8 ${loadingComplete ? "loaded" : ""}`}>
                    <h1>Refuges dans les Pyrénées</h1>
                    <Map shelters={shelters} />
                </section>) : (
                <span>La page rencontre un problème</span>
            )}
        </>
    );
};

export default Home;