// Represents a GeoJSON feature with specific properties
export type GeoJSONFeature = {
    type: string;
    geometry: {
        type: string;
        coordinates: [number, number];
    };
    properties: {
        name: string;
        url: string;
        descriptif: string;
        region: string;
        altitude: string | null;
        cap_ete: string;
        cap_hiver: string;
        type_hebergement: string;
    };
};

// Represents an array of formatted shelter data
export type FormattedShelters = {
    name: string;
    altitude: string;
    latitude: number;
    longitude: number;
    region: string;
    url: string;
}[];

// Represents the shape of the shelter data store
export type SheltersStore = {
    shelters: FormattedShelters;
    searchQuery?: string;
    selectedDepartment: string;
    setShelters: (data: FormattedShelters) => void;
    setSearchQuery: (query: string) => void;
    setSelectedDepartment: (department: string) => void;
};

// Represents props for the CustomMapPopup component, including a single shelter
export type CustomMapPopupProps = {
    shelter: FormattedShelters[number];
}

// Represents a mapping of department codes to department names
export type CodeToDepartmentType = {
    [key: string]: string;
};