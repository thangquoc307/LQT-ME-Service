import "./building.css"
import {useRef} from "react";
import {getLocation, levelLocation} from "./dataLocation";
export default function BuildingMap({selectLevel}) {
    const mapImage = useRef();
    const mapLocation = levelLocation;

    return (
        <div className="building-map color3 borderradius boxshadow-outset">
            <svg className="building-map-svg" ref={mapImage}
                 viewBox="0 0 100 100" preserveAspectRatio="none">
                {mapLocation.map(e => {
                    return (
                        <polygon className="building-map-polygon"
                                 points={getLocation(e.point)}
                                 onClick={() => {selectLevel(e.level)}}
                        />
                    )
                })}
            </svg>
        </div>
    )
}