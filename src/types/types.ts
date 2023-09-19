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
        commentaire: string;
        photo: string;
        region: string;
        altitude: string | null;
        cap_ete: string;
        cap_hiver: string;
        type_hebergement: string;
        department?: string;
    };
};

// Represents an array of formatted shelter data
export type FormattedShelters = {
    name: string;
    altitude: string;
    department: string;
    latitude: number;
    longitude: number;
}[];

// Represents props for the Map component, including an array of shelters
export type MapProps = {
    shelters: FormattedShelters;
};

// Represents a mapping of department codes to department names
export type CodeToDepartmentType = {
    [key: string]: string;
};

