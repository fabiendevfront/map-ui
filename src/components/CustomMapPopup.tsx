import { CustomMapPopupProps } from "../types/types.ts";
import { Icon } from "@iconify/react";

const CustomMapPopup = ({ shelter }: CustomMapPopupProps) => {
    return (
        <div className="rounded">
            <div className="bg-terciary py-4 px-4 rounded-t-lg">
                <h3 className="text-2xl font-bold text-white text-center">{shelter.name}</h3>
            </div>
            <div className="p-4">
                <p><span className="text-terciary font-bold">Département:</span> {shelter.department}</p>
                <p><span className="text-terciary font-bold">Altitude:</span> {shelter.altitude !== "Inconnu" ? shelter.altitude + "m" : "Inconnu"}</p>
                <p className="text-terciary font-bold">
                                    Voir la meteo:
                    <a
                        href={`https://www.meteoblue.com/fr/meteo/semaine/${shelter.latitude}N-${shelter.longitude}E`}
                        className="text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon icon="fluent:weather-partly-cloudy-day-16-filled" className="inline text-4xl text-terciary hover:text-primary focus:text-primary active:text-primary transition-colors duration-300 "
                        />
                    </a>
                </p>
            </div>
        </div>
    );
};

export default CustomMapPopup;