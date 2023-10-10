import { create } from "zustand";
import { FormattedShelters, SheltersStore } from "../types/types";

// Store for shelters
export const useSheltersStore = create<SheltersStore>((set) => ({
    shelters: [],
    searchQuery: "",
    setShelters: (data: FormattedShelters) => {
        set({ shelters: data });
    },
    setSearchQuery: (query: string) => set({ searchQuery: query })
}));