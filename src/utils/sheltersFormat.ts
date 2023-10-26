import { GeoJSONFeature } from "../types/types.ts";

export const sheltersFormat = async (data: { features: GeoJSONFeature[] }) => {
    const shelters = await Promise.all(data.features.map(async (feature) => {
        const coordinates = feature.geometry.coordinates;
        const latitude = coordinates[1];
        const longitude = coordinates[0];
        const name = feature.properties.name;
        const altitude = feature.properties.altitude || "Inconnu";

        return {
            name,
            altitude,
            latitude,
            longitude,
        };
    }));

    return shelters;
};