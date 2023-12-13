import "./building.css"
import {getLocation, levelLocation} from "./dataLocation";
import {formatNumberOverNine} from "../../service/formatData";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {store} from "../../redux/store";
import {setLevel, setRoom} from "../../redux/action";
import {getCountOfRequest} from "../../service/ApiConnection";
export default function BuildingMap() {
    const mapLocation = levelLocation;
    const level = useSelector(state => state.level);
    const room = useSelector(state => state.room);
    const [dataRequest, setDataRequest] = useState();
    const modal = useSelector(state => state.modal)
    const mouseOver = (index) => {
        document.getElementById(`poly-${index}`).style.fill = "rgba(0,150,0,0.3)";
        document.getElementById(`table-${index}`).style.backgroundColor = "rgba(0,150,0,0.3)";
    }
    const mouseLeave = (index) => {
        document.getElementById(`poly-${index}`).style.fill = "";
        document.getElementById(`table-${index}`).style.backgroundColor = "";
    }
    const setSelectRoom = (index) => {
        store.dispatch(setRoom(index))
    }
    const setSelectLevel = (index) => {
        store.dispatch(setLevel(index))
    }
    const getCountRequest = async () => {
        let data = await getCountOfRequest();
        const result = [];
        if (!data){
            data = {};
        }

        for (let i = 21; i >= 7; i--){
            if (i + "" in data){
                let levelData = {
                    level: i,
                    waiting: data[i].holding,
                    request: data[i].request
                }
                result.push(levelData);
            } else {
                let levelData = {
                    level: i,
                    waiting: 0,
                    request: 0
                }
                result.push(levelData);
            }
        }
        setDataRequest(result);
    }
    useEffect(() => {
        setSelectRoom(-1);
        getCountRequest();
    },[modal])
    if (!dataRequest) {return null}
    return (
        <div className="color3 borderradius boxshadow-inset">
            <div className="building-map dropshadow">
                <svg className="building-map-svg"
                     viewBox="0 0 100 100" preserveAspectRatio="none">
                    {mapLocation.map(e => {
                        return (
                            <polygon key={`level${e.level}`}
                                     id={`poly-${e.level}`}
                                     className="cursorPoint building-map-polygon"
                                     points={getLocation(e.point)}
                                     onClick={() => {setSelectLevel(e.level)}}
                                     onMouseOver={() => {mouseOver(e.level)}}
                                     onMouseLeave={() => {mouseLeave(e.level)}}
                            />
                        )
                    })}
                </svg>
                <div className="level-notification color0 borderradius boxshadow-inset">
                    {
                        dataRequest.map(e => {
                            return (
                                <div
                                    key={e.level}
                                    className="level-notification-item cursorPoint"
                                    id={`table-${e.level}`}
                                    onMouseOver={() => {mouseOver(e.level)}}
                                    onMouseLeave={() => {mouseLeave(e.level)}}
                                    onClick={() => {setSelectLevel(e.level)}}
                                >
                                    <div className="level-notification-item-key">
                                        <div className="level-notification-item-key-name color4 borderradius">
                                            L{e.level}
                                        </div>
                                    </div>
                                    <div className="level-notification-item-request">
                                        {e.request != 0 &&
                                            <span className="notification-number">
                                            {formatNumberOverNine(e.request)}
                                        </span>
                                        }
                                    </div>
                                    <div className="level-notification-item-hold">
                                        {e.waiting != 0 &&
                                            <span className="notification-number">
                                            {formatNumberOverNine(e.waiting)}
                                        </span>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
