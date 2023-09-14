import logo from "../assets/logo.png";
import Search from "../components/Search";


// Component for Header
const Menu = () => {
    return (
        <div className="bg-secondary shadow-md shadow-secondary py-6 px-6 flex flex-col gap-8 md:items-center md:w-2/6 md:max-w-[225px]">
            <header className="flex justify-between items-center">
                <h1>
                    <img src={logo} className="h-32 md:h-40 md:min-w-min" alt="Logo du header" />
                </h1>
                <div className="flex justify-between items-center gap-2 cursor-pointer md:hidden">
                    <p className="text-primary text-xl">Menu</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-primary w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </header>
            <div className="hidden md:flex-1 md:flex md:flex-col md:justify-between md:items-center">
                <Search />
                <footer className="center">
                    <p className="text-primary">Copyright 2023</p>
                </footer>
            </div>
        </div>
    );
};

export default Menu;