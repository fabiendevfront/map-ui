import { FormattedShelters } from "../types/types";

export const filterShelters = (shelters : FormattedShelters, selectedDepartment : string, searchQuery : string) => {
    return shelters.filter((shelter) => {
        if (selectedDepartment === "All" || shelter.region === selectedDepartment) {
            return shelter.name.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
    });
};