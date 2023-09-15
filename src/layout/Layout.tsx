import Menu from "./Menu";

// Component for the Layout
const Layout = ({ children } : { children: React.ReactNode }) => {

    return (
        <>
            <Menu />
            <main className="main h-full py-8 pl-6 pr-6 md:pl-[310px] md:w-full">{children}</main>
        </>
    );
};

export default Layout;