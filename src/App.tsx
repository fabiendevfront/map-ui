import Layout from "./layout/Layout";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";
import { useSheltersStore } from "./services/useSheltersStore";
import { useFetch } from "./services/useFetch.tsx";
import { sheltersFormat } from "./utils/sheltersFormat.ts";

// The App component returns TSX element that renders Layout component which contains an AppRouter component.
const App = () => {
    const { setShelters } = useSheltersStore();
    const { data } = useFetch("/data/shelters.geojson");

    useEffect(() => {
        const formatShelters = async () => {
            if (data) {
                const formatted = await sheltersFormat(data);
                setShelters(formatted);
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
