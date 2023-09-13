import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";

// AppRouter component manage routing in app, that renders different routes and corresponding components.
const AppRouter = () => {

    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            {/* path="*" if the path does not correspond to any route declared above */}
            <Route
                path="*"
                element={<Page404 />}
            />
        </Routes>
    );
};

export default AppRouter;