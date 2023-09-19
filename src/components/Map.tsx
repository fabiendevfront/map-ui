import { MapProps } from "../types/types.ts";

const Map = (props: MapProps) => {
    console.log(props.shelters);
    return (
        <h2>Maps</h2>
    );
};

export default Map;