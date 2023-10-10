import { useSheltersStore } from "../services/useSheltersStore";
import { useFetch } from "../services/useFetch.tsx";
import Map from "../components/Map.js";
import Loader from "../components/Loader.jsx";

// Component for Homepage
const Home = () => {
    const { shelters } = useSheltersStore();
    const { loading, error, loadingComplete } = useFetch("/data/shelters.geojson");

    return (
        <>
            {loading ? (
                <div className="h-full flex flex-col justify-center items-center">
                    <Loader />
                </div>
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : shelters ? (
                <section className={`home flex flex-col gap-8 ${loadingComplete ? "loaded" : ""}`}>
                    <h1>Refuges dans les Pyrénées</h1>
                    <Map />
                </section>) : (
                <span>La page rencontre un problème</span>
            )}
        </>
    );
};

export default Home;