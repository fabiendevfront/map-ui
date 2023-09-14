import { useFetch } from "../services/useFetch.jsx";
import Filters from "../components/Filters";
import Map from "../components/Map.js";

// Component for Homepage
const Home = () => {
    // Fetch data using the useFetch hook
    const { data, loading, error, loadingComplete } = useFetch("/data/shelters.geojson");
    console.log(data);

    return (
        <>
            {loading ? (
                <span>Chargement en cours</span>
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : data ? (
                <section className={`home flex flex-col gap-8 ${loadingComplete ? "loaded" : ""}`}>
                    <h1>Refuges dans les Pyrénées</h1>
                    <Filters />
                    <Map />
                </section>) : (
                <span>La page rencontre un problème</span>
            )}
        </>
    );
};

export default Home;