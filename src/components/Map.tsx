import { MapProps } from "../types/types.ts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = (props: MapProps) => {

    return (
        <MapContainer
            center={[42.6461, 0.0711]}
            zoom={8}
            style={{ height: "700px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {props.shelters.map((shelter, index) => (
                <Marker
                    key={index}
                    position={[shelter.latitude, shelter.longitude]}
                >
                    <Popup>
                        <div>
                            <h3>{shelter.name}</h3>
                            <p>Département: {shelter.department}</p>
                            <p>Altitude: {shelter.altitude}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;