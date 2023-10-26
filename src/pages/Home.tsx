import { useSheltersStore } from "../services/useSheltersStore";
import { useFetch } from "../services/useFetch.tsx";
import Map from "../components/Map.js";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.tsx";

// Component for Homepage
const Home = () => {
    const { shelters } = useSheltersStore();
    const { loading, error, loadingComplete } = useFetch("/data/shelters.geojson");

    const apiError = "Erreur lors de la récupération de données depuis l'API geo.api.gouv.fr, veuillez essayer ultérieurement";
    let errorMessage;

    if (error && !loading) {
        errorMessage = <ErrorMessage message={apiError} />;
    }

    return (
        <>
            {loading ? (
                <div className="h-full flex flex-col justify-center items-center">
                    <Loader />
                </div>
            ) : errorMessage ? (
                <div className="h-full flex flex-col justify-center items-center">
                    {errorMessage}
                </div>
            ) : shelters ? (
                <section className={`home flex flex-col gap-8 ${loadingComplete ? "loaded" : ""}`}>
                    <h1>Refuges dans les Pyrénées françaises</h1>
                    <Map />
                </section>) : (
                <span>La page rencontre un problème</span>
            )}
        </>
    );
};

export default Home;