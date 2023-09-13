import Header from "./Header";
import Footer from "./Footer";

// Component for the Layout
const Layout = ({ children } : { children: React.ReactNode }) => {

    return (
        <>
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;