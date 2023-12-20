import "./employeeMap.css"
import {getLocation, getMapX, getMapY, levelLocation} from "../map/dataLocation";
import {store} from "../../redux/store";
import {setLevel, setRoom} from "../../redux/action";
import {useEffect} from "react";

export default function EmployeeBuildingMap({arrayLevel}) {
    const mapLocation = levelLocation;
    const setSelectLevel = (index) => {
        store.dispatch(setLevel(index));
    }
    const setRoomLevel = (index) => {
        store.dispatch(setRoom(index));
    }
    useEffect(() => {
       setRoomLevel(-1);
    },[])
    return (
        <div className="building-map dropshadow">
            <svg className="building-map-svg"
                 viewBox="0 0 100 100" preserveAspectRatio="none">
                {mapLocation.map((e, index) => {
                    return (arrayLevel.hasOwnProperty(e.level) &&
                            <>
                                <polygon key={`level${e.level}`}
                                         id={`poly-${e.level}`}
                                         className="cursorPoint employee-building-polygon"
                                         points={getLocation(e.point)}
                                    onClick={() => {setSelectLevel(e.level)}}
                                />
                                <text key={`text${e.level}`}
                                      className="map-text"
                                      x={index % 2 == 0 ? 83 : 90}
                                      y={getMapY(e.point)}
                                >
                                    {arrayLevel[e.level]}🛠️
                                </text>
                                <line key={`line${e.level}`}
                                      className="map-line"
                                      x1={getMapX(e.point)}
                                      y1={getMapY(e.point)}
                                      x2={index % 2 == 0 ? 83 : 90}
                                      y2={getMapY(e.point)}
                                />
                            </>
                    )
                })}
            </svg>
        </div>
    )
}