import { useFetch } from "../services/useFetch.jsx";

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
                <section className={`home ${loadingComplete ? "loaded" : ""}`}>
                    <h1>Home</h1>
                </section>) : (
                <span>La page rencontre un problème</span>
            )}
        </>
    );
};

export default Home;