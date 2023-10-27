import { useFetch } from "../services/useFetch.tsx";
import { useSheltersStore } from "../services/useSheltersStore";
import { filterShelters } from "../utils/filteredShelters.ts";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import CustomMapPopup from "./CustomMapPopup.tsx";

const Map = () => {
    const { data } = useFetch("/data/departments.geojson");
    const { shelters, searchQuery = "" } = useSheltersStore();
    const selectedDepartment = useSheltersStore((state) => state.selectedDepartment);
    const departments = data ;

    const mapTilerToken = import.meta.env.VITE_MAPTILER_TOKEN;

    const filteredShelters = filterShelters(shelters, selectedDepartment, searchQuery);

    return (
        <MapContainer
            center={[42.6461, 0.0711]}
            zoom={8}
            style={{ height: "500px", width: "100%" }}
        >
            <TileLayer
                url={`https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=${mapTilerToken}`}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {departments && (
                <GeoJSON
                    data={departments}
                    style={{
                        fillColor: "#1fab89",
                        color: "#1fab89",
                        weight: 2,
                        fillOpacity: 0.1
                    }}
                    onEachFeature={(feature, layer) => {
                        layer.on({
                            mouseover: (e) => {
                                e.target.setStyle({
                                    fillColor: "#1fab89",
                                    color: "#1fab89",
                                    fillOpacity: 0.6
                                });
                            },
                            mouseout: (e) => {
                                e.target.setStyle({
                                    fillColor: "#1fab89",
                                    color: "#1fab89",
                                    fillOpacity: 0.1
                                });
                            },
                        });
                    }}
                />
            )}
            {filteredShelters.map((shelter, index) => (
                <Marker
                    key={index}
                    position={[shelter.latitude, shelter.longitude]}
                >
                    <Popup className="customMapPopup">
                        <CustomMapPopup shelter={shelter} />
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;