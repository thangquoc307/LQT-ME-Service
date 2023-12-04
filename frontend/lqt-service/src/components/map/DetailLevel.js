import "./building.css"
import {getAvgX, getAvgY, getLocation, roomLocation} from "./dataLocation";
export default function DetailLevel({level, selectLevel}) {
    const mapLocation = roomLocation;

    return (
        <div className="detail-level color3 borderradius boxshadow-outset">
            <svg className="building-map-svg"
                 viewBox="0 0 100 100" preserveAspectRatio="none">
                {mapLocation.map(e => {
                    return (
                        <polygon className="cursorPoint polygon-hover"
                                 points={getLocation(e.point)}/>

                    )
                })}
            </svg>
            {mapLocation.map(e => {
                return (
                    <div className="detail-level-notification"
                         style={{
                            top: `${getAvgY(e.point)}%`,
                            left: `${getAvgX(e.point)}%`
                        }}
                    >
                        <div className="level-notification-item-mess">
                        </div>
                        <div className="level-notification-item-request">
                        </div>
                        <div className="level-notification-item-hold">
                        </div>
                    </div>
                )
            })}

            <div className="detail-level-back color4 hover-button borderradius"
            onClick={() => {selectLevel(-1)}}>Trở lại</div>
            <div className="detail-level-title color0 borderradius boxshadow-inset"
            >Tầng {level}</div>
        </div>
    )
}