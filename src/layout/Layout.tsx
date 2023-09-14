import Menu from "./Menu";

// Component for the Layout
const Layout = ({ children } : { children: React.ReactNode }) => {

    return (
        <>
            <Menu />
            <main className="main h-full py-8 px-6 md:w-full">{children}</main>
        </>
    );
};

export default Layout;