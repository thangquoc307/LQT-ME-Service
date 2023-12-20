import "./personalMap.css";
import {getAvgX, getAvgY, getLocation, roomLocation} from "../map/dataLocation";
import {useSelector} from "react-redux";
import {store} from "../../redux/store";
import {setLevel, setModalType, setRoom} from "../../redux/action";
import {useEffect, useState} from "react";
import {convertRoom} from "../../service/formatData";
import ModalCreateRequest from "../modal/ModalCreateRequest";
export default function PersonalDetailLevel({detailLevel}) {
    const mapLocation = roomLocation;
    const room = useSelector(state => state.room);
    const level = useSelector(state => state.level);
    const modal = useSelector(state => state.modal);
    const [roomInLevel, setRoomInLevel] = useState();
    const setSelectRoom = (index) => {
        store.dispatch(setRoom(index));
        store.dispatch(setModalType(6));
    }
    const setSelectLevel = (index) => {
        store.dispatch(setLevel(index));
    }
    const setModal = (index) => {
        store.dispatch(setModalType(index));
    }
    const getRoomInLevel = () => {
        let array = [];
        for (let i = 0; i < detailLevel.length; i ++) {
            if (detailLevel[i].level == level) {
                array.push(detailLevel[i].name);
            }
        }
        setRoomInLevel(array);
    }


    useEffect(() => {
        getRoomInLevel();
        setModal(-1);
    }, [level])

    return (
        <div>
            <div className="detail-level dropshadow">
                <svg className="building-map-svg"
                     viewBox="0 0 100 100" preserveAspectRatio="none">
                    {roomInLevel &&
                        mapLocation.map(e => {
                        return (
                            roomInLevel.includes(convertRoom(level, e.name)) &&
                                <>
                                    <polygon className={`cursorPoint 
                                            ${room == e.name ? "polygonpersonal-select" 
                                        : "polygonpersonal-nonselect"}`}
                                             points={getLocation(e.point)}
                                             onClick={() => {setSelectRoom(e.name)}}
                                    />
                                    <text
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        x={getAvgX(e.point)}
                                        y={getAvgY(e.point)}
                                        className="text-svg-personal cursorPoint"
                                    >
                                        P{convertRoom(level,e.name)}
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
            {modal == 6 && <ModalCreateRequest/>}
        </div>
    )
}