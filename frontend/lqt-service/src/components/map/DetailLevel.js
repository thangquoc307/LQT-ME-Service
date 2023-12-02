import "./building.css"
import {useRef} from "react";
import {getLocation, roomLocation} from "./dataLocation";
export default function DetailLevel({level, selectLevel}) {
    const mapImage = useRef();
    const mapLocation = roomLocation;

    return (
        <div className="detail-level color3 borderradius boxshadow-outset">
            <svg className="building-map-svg" ref={mapImage}
                 viewBox="0 0 100 100" preserveAspectRatio="none">
                {mapLocation.map(e => {
                    return (
                        <polygon className="building-map-polygon"
                                 points={getLocation(e.point)}/>
                    )
                })}

            </svg>
            <div className="detail-level-back color4 hover-button borderradius"
            onClick={() => {selectLevel(-1)}}>Trở lại</div>
        </div>
    )
}