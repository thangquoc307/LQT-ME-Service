import {getLocation, getMapX, getMapY, levelLocation} from "../map/dataLocation";
import {useSelector} from "react-redux";
import "./personalMap.css";
import {store} from "../../redux/store";
import {setLevel, setRoom} from "../../redux/action";
import {useEffect} from "react";

export default function PersonalBuildingMap({arrayLevel}) {
    const mapLocation = levelLocation;
    const level = useSelector(state => state.level);
    const room = useSelector(state => state.room);
    const modal = useSelector(state => state.modal);

    const setSelectRoom = (index) => {
        store.dispatch(setRoom(index))
    }
    const setSelectLevel = (index) => {
        store.dispatch(setLevel(index))
    }
    useEffect(() => {
       setSelectRoom(-1);
    },[])

    return(
        <div>
            <div className="building-map dropshadow">
                <svg className="building-map-svg"
                     viewBox="0 0 100 100" preserveAspectRatio="none">
                    {
                        arrayLevel &&
                        mapLocation.map((e, index) => {
                        return (
                            arrayLevel.has(e.level) &&
                                <>
                                    <polygon key={`poly${e.level}`}
                                             id={`poly-${e.level}`}
                                             className="cursorPoint building-map-polygon-personal"
                                             points={getLocation(e.point)}
                                             onClick={() => {setSelectLevel(e.level)}}
                                    />
                                    <text key={`text${e.level}`}
                                        className="map-text"
                                        x={index % 2 == 0 ? 83 : 90}
                                        y={getMapY(e.point)}
                                    >
                                        {arrayLevel.get(e.level)}🕌
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
        </div>
    )

}