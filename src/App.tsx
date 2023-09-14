import Layout from "./layout/Layout";
import AppRouter from "./router/AppRouter";

// The App component returns TSX element that renders Layout component which contains an AppRouter component.
const App = () => {

    return (
        <div className="app h-screen flex flex-col md:flex-row ">
            <Layout>
                <AppRouter />
            </Layout>
        </div>
    );
};

export default App;
