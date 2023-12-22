import "./building.css"
import {getAvgX, getAvgY, getLocation, roomLocation} from "./dataLocation";
import {convertRoom, formatNumberOverNine} from "../../service/formatData";
import {useSelector} from "react-redux";
import {store} from "../../redux/store";
import {setLevel, setRoom} from "../../redux/action";
import {useEffect, useState} from "react";
import {getCountOfRequestByLevel} from "../../service/ApiConnection";
export default function DetailLevel() {
    const mapLocation = roomLocation;
    const room = useSelector(state => state.room);
    const level = useSelector(state => state.level);
    const modal = useSelector(state => state.modal)
    const [dataRequest, setDataRequest] = useState();
    const setSelectRoom = (index) => {
        store.dispatch(setRoom(index));
    }
    const setSelectLevel = (index) => {
        store.dispatch(setLevel(index));
    }
    const getDataRequest = async () => {
        let data = await getCountOfRequestByLevel(level);
        if (!data){
            data = {};
        }
        const result = [];
        for (let i = 1; i <= 15; i++){
            let roomName = convertRoom(level, i);
            if (roomName in data){
                let roomData = {
                    room: roomName,
                    waiting: data[roomName].holding,
                    request: data[roomName].request
                }
                result.push(roomData);
            } else {
                let roomData = {
                    room: roomName,
                    waiting: 0,
                    request: 0
                }
                result.push(roomData);
            }
        }
        setDataRequest(result);
    }
    useEffect(() => {
        getDataRequest();
    },[modal])

    if (!dataRequest) {return null}
    return (
        <div className="color3 borderradius boxshadow-inset">
            <div className="detail-level dropshadow">
                <svg className="building-map-svg"
                     viewBox="0 0 100 100" preserveAspectRatio="none">
                    {mapLocation.map(e => {
                        return (
                            <polygon className={`cursorPoint 
                        ${room == e.name ? "polygon-select" : "polygon-nonselect"}`}
                                     points={getLocation(e.point)}
                                     onClick={() => {setSelectRoom(e.name)}}
                            />

                        )
                    })}
                </svg>
                {mapLocation.map((e, index) => {
                    return (
                        <div className="detail-level-notification cursorPoint"
                             key={`noti-${e.id}`}
                             style={{
                                 top: `${getAvgY(e.point)}%`,
                                 left: `${getAvgX(e.point)}%`
                             }}>
                            <p>P{convertRoom(level, e.name)}</p>
                            <div className="level-notification-item-request">
                                {dataRequest[index].request != 0 &&
                                    <span className="detail-level-notification-number">
                                    {formatNumberOverNine(dataRequest[index].request)}
                                </span>
                                }
                            </div>
                            <div className="level-notification-item-hold">
                                {dataRequest[index].waiting != 0 &&
                                    <span className="detail-level-notification-number">
                                    {formatNumberOverNine(dataRequest[index].waiting)}
                                </span>
                                }
                            </div>
                        </div>
                    )
                })}
                <div className="detail-level-back color4 hover-button borderradius"
                     onClick={() => {setSelectLevel(-1)}}>Trở lại</div>
                <div className="detail-level-title color0 borderradius boxshadow-inset"
                >Tầng {level}</div>
            </div>
        </div>
    )
}