import { GeoJSONFeature } from "../types/types.ts";

export const sheltersFormat = async (data: { features: GeoJSONFeature[] }) => {
    const shelters = await Promise.all(data.features.map(async (feature) => {
        const coordinates = feature.geometry.coordinates;
        const latitude = coordinates[1];
        const longitude = coordinates[0];
        const name = feature.properties.name;
        const altitude = feature.properties.altitude || "Inconnu";
        const region = feature.properties.region;
        const url = feature.properties.url;


        return {
            name,
            altitude,
            latitude,
            longitude,
            region,
            url
        };
    }));

    return shelters;
};