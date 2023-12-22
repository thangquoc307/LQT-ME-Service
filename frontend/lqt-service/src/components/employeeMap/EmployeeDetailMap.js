import "./employeeMap.css"
import {convertRoom} from "../../service/formatData";
import {getAvgX, getAvgY, getLocation, roomLocation} from "../map/dataLocation";
import {useSelector} from "react-redux";
import {store} from "../../redux/store";
import {setLevel} from "../../redux/action";
import {useEffect, useState} from "react";
export default function EmployeeDetailMap({arrayRoom}) {
    const room = useSelector(state => state.room);
    const level = useSelector(state => state.level);
    const mapLocation = roomLocation;

    const setSelectLevel = (index) => {
        store.dispatch(setLevel(index));
    }
    const getRoomData = () => {
        console.log(arrayRoom)
    }
    useEffect(() => {
        getRoomData();
    }, [])
    return (
        <div className="detail-level dropshadow">
            <svg className="building-map-svg"
                 viewBox="0 0 100 100" preserveAspectRatio="none">
                {arrayRoom &&
                    mapLocation.map(e => {
                        return (
                            arrayRoom.hasOwnProperty(convertRoom(level, e.name)) &&
                            <>
                                <polygon className="employee-map-polygonpersonal"
                                         points={getLocation(e.point)}
                                />
                                <text
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    x={getAvgX(e.point)}
                                    y={getAvgY(e.point) + 1.5}
                                    className="text-svg-employee-room"
                                >
                                    P{convertRoom(level,e.name)}
                                </text>
                                <text
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    x={getAvgX(e.point)}
                                    y={getAvgY(e.point) - 2}
                                    className="text-svg-employee"
                                >
                                    🛠️ {arrayRoom[convertRoom(level, e.name)]}
                                </text>
                            </>

                        )
                    })}
            </svg>

            <div className="detail-level-back color4 hover-button borderradius"
                 onClick={() => {setSelectLevel(-1)}}>Trở lại</div>
            <div className="detail-level-title color0 borderradius boxshadow-inset"
            >Tầng {level}</div>
        </div>
    )
}