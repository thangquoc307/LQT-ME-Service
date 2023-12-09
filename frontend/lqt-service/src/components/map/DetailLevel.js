import "./building.css"
import {getAvgX, getAvgY, getLocation, roomLocation} from "./dataLocation";
import {convertRoom} from "../../service/formatData";
import {useSelector} from "react-redux";
import {store} from "../../redux/store";
import {setLevel, setRoom} from "../../redux/action";
export default function DetailLevel() {
    const mapLocation = roomLocation;
    const room = useSelector(state => state.room);
    const level = useSelector(state => state.level);
    const setSelectRoom = (index) => {
        store.dispatch(setRoom(index));
    }
    const setSelectLevel = (index) => {
        store.dispatch(setLevel(index));
    }
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
                {mapLocation.map(e => {
                    return (
                        <div className="detail-level-notification cursorPoint"
                             key={`noti-${e.id}`}
                             style={{
                                 top: `${getAvgY(e.point)}%`,
                                 left: `${getAvgX(e.point)}%`
                             }}>
                            <p>P{convertRoom(level, e.name)}</p>
                            <div className="level-notification-item-request">
                                <span className="detail-level-notification-number">1</span>
                            </div>
                            <div className="level-notification-item-hold">
                                <span className="detail-level-notification-number">2</span>
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