import Layout from "./layout/Layout";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";
import { useSheltersStore } from "./services/useSheltersStore";
import { useFetch } from "./services/useFetch.tsx";

// The App component returns TSX element that renders Layout component which contains an AppRouter component.
const App = () => {
    const { data } = useFetch("/data/shelters.geojson");
    const { setShelters } = useSheltersStore();

    useEffect(() => {
        const formatShelters = async () => {
            if (data) {
                setShelters(data);
            }
        };
        formatShelters();
    }, [data, setShelters]);

    return (
        <div className="app h-screen flex flex-col md:flex-row ">
            <Layout>
                <AppRouter />
            </Layout>
        </div>
    );
};

export default App;
