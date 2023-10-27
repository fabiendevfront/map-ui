import { create } from "zustand";
import { FormattedShelters, SheltersStore } from "../types/types";

// Store for shelters
export const useSheltersStore = create<SheltersStore>((set) => ({
    shelters: [],
    searchQuery: "",
    selectedDepartment: "All",
    setShelters: (data: FormattedShelters) => {
        set({ shelters: data });
    },
    setSearchQuery: (query: string) => set({ searchQuery: query }),
    setSelectedDepartment: (department: string) => set({ selectedDepartment: department })
}));