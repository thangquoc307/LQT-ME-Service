import "./building.css"
import {getLocation, levelLocation} from "./dataLocation";
import {formatNumberOverNine} from "../../service/formatData";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {store} from "../../redux/store";
import {setLevel, setRoom} from "../../redux/action";
export default function BuildingMap() {
    const mapLocation = levelLocation;
    const level = useSelector(state => state.level);
    const room = useSelector(state => state.room);
    const fakeData = [
        {
            level: 21,
            waiting: 0,
            request: 0
        },
        {
            level: 20,
            waiting: 0,
            request: 0

        },
        {
            level: 19,
            waiting: 1,
            request: 1
        },
        {
            level: 18,
            waiting: 0,
            request: 1
        },
        {
            level: 17,
            waiting: 0,
            request: 0
        },
        {
            level: 16,
            waiting: 4,
            request: 0
        },
        {
            level: 15,
            waiting: 0,
            request: 0
        },
        {
            level: 14,
            waiting: 0,
            request: 2
        },
        {
            level: 13,
            waiting: 4,
            request: 2
        },
        {
            level: 12,
            waiting: 1,
            request: 10
        },
        {
            level: 11,
            waiting: 1,
            request: 0
        },
        {
            level: 10,
            waiting: 1,
            request: 1
        },
        {
            level: 9,
            waiting: 0,
            request: 2
        },
        {
            level: 8,
            waiting:2,
            request: 0
        },
        {
            level: 7,
            waiting: 0,
            request: 0
        },

    ]
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
    useEffect(() => {
        setSelectRoom(-1);
    },[])
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
                        fakeData.map(e => {
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
