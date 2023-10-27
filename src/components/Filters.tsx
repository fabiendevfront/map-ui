import { ChangeEvent } from "react";
import { useSheltersStore } from "../services/useSheltersStore";

const Filters = () => {
    const { selectedDepartment, setSelectedDepartment } = useSheltersStore();

    const handleDepartmentChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const department = e.target.value;
        setSelectedDepartment(department);
    };

    return (
        <div>
            <label htmlFor="filter">
                <h2 className="text-white">Secteurs</h2>
            </label>
            <select
                id="filter"
                name="filter"
                className="mt-4 rounded-md shadow-sm w-full border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6"
                onChange={handleDepartmentChange}
                value={selectedDepartment}
            >
                <option value="All">Tout les secteurs</option>
                <option value="1">Pyrénées-Atlantiques</option>
                <option value="2">Hautes-Pyrénées</option>
                <option value="3">Hautes-Garonne</option>
                <option value="4">Ariège</option>
                <option value="5">Pyrénées-Orientales</option>
            </select>
        </div>
    );
};

export default Filters;