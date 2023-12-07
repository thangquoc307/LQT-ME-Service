import "./building.css"
import {getAvgX, getAvgY, getLocation, roomLocation} from "./dataLocation";
export default function DetailLevel({selectLevel,setSelectLevel, selectRoom, setSelectRoom}) {
    const mapLocation = roomLocation;
    const refreshRoom = async (room) => {
        await setSelectRoom(-1);
        await setSelectRoom(room);
    }

    return (
        <div className="detail-level color3 borderradius boxshadow-inset">
            <svg className="building-map-svg"
                 viewBox="0 0 100 100" preserveAspectRatio="none">
                {mapLocation.map(e => {
                    return (
                        <polygon className={`cursorPoint 
                        ${selectRoom == e.name ? "polygon-select" : "polygon-nonselect"}`}
                                 points={getLocation(e.point)}
                                 onClick={() => {refreshRoom(e.name)}}
                        />

                    )
                })}
            </svg>
            {mapLocation.map(e => {
                return (
                    <div className="detail-level-notification cursorPoint"
                         style={{
                            top: `${getAvgY(e.point)}%`,
                            left: `${getAvgX(e.point)}%`
                        }}>
                        <div className="level-notification-item-mess">
                            <span className="detail-level-notification-number">+9</span>
                        </div>
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
            >Tầng {selectLevel}</div>
        </div>
    )
}