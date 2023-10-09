import { create } from "zustand";
import { FormattedShelters, SheltersStore } from "../types/types";

// Store for shelters
export const useSheltersStore = create<SheltersStore>((set) => ({
    shelters: [],
    setShelters: (data: FormattedShelters) => {
        set({ shelters: data });
        localStorage.setItem("shelters", JSON.stringify(data));
    }
}));