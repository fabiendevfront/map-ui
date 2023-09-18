import { getDepartments } from "../services/getDepartments.ts";

type GeoJSONFeature = {
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


export const sheltersFormat = async (data: { features: GeoJSONFeature[] }) => {
    const shelters = await Promise.all(data.features.map(async (feature) => {
        const coordinates = feature.geometry.coordinates;
        const latitude = coordinates[1];
        const longitude = coordinates[0];
        const department = await getDepartments(latitude, longitude);
        const name = feature.properties.name;
        const altitude = feature.properties.altitude || "Inconnu";

        return {
            name,
            department,
            altitude,
            latitude,
            longitude,
        };
    }));

    return shelters;
};