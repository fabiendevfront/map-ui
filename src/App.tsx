import { useEffect } from "react";
import { useFetch } from "./services/useFetch.tsx";
import { useSheltersStore } from "./services/useSheltersStore";
import { sheltersFormat } from "./utils/sheltersFormat.ts";
import Layout from "./layout/Layout";
import AppRouter from "./router/AppRouter";


// The App component returns TSX element that renders Layout component which contains an AppRouter component.
const App = () => {
    const { data } = useFetch("/data/shelters.geojson");
    const { setShelters } = useSheltersStore();

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
