import { ChangeEvent } from "react";
import { useSheltersStore } from "../services/useSheltersStore";

const Search = () => {
    const { setSearchQuery } = useSheltersStore();

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
    };

    return (
        <div>
            <label htmlFor="search">
                <h2 className="text-white">Trouver un refuge</h2>
            </label>
            <div className="relative mt-4 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="w-full rounded-md border-0 py-1.5 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6"
                    placeholder="Nom du refuge.."
                    onChange={handleSearchInputChange}
                />
            </div>
        </div>
    );
};

export default Search;