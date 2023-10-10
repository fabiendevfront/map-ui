const Filters = () => {
    return (
        <div>
            <label htmlFor="filter">
                <h2 className="text-white">Secteurs</h2>
            </label>
            <select
                id="filter"
                name="filter"
                className="mt-4 rounded-md shadow-sm w-full border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6"
            >
                <option value="Inconnue">Non définie</option>
            </select>
        </div>
    );
};

export default Filters;