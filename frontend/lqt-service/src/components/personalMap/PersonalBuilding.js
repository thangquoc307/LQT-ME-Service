import {useSelector} from "react-redux";
import PersonalBuildingMap from "./PersonalBuildingMap";
import PersonalDetailLevel from "./PersonalDetailLevel";
import {useEffect, useState} from "react";
import {getRoomByCustomer} from "../../service/ApiConnection";
import {jwtDecode} from "jwt-decode";

export default function PersonalBuilding() {
    const level = useSelector(state => state.level);
    const [arrayLevel, setArrayLevel] = useState();
    const [detailLevel, setDetailLevel] = useState();
    const customerId = jwtDecode(localStorage.token).id;

    const getMap = async () => {
        const data = await getRoomByCustomer(customerId);
        let levelMap = new Map();
        if (data) {
            for (let i = 0; i < data.length; i++){
                if (levelMap.has(data[i].level)){
                    levelMap.set(data[i].level, levelMap.get(data[i].level) + 1);
                } else {
                    levelMap.set(data[i].level, 1);

                }
            }
        }
        setDetailLevel(data);
        setArrayLevel(levelMap);
    }
    useEffect(() => {
        getMap();
    },[])

    return (
        <div className="buiding color3 borderradius boxshadow-inset">
            {level == -1 && <PersonalBuildingMap arrayLevel={arrayLevel}/>}
            {level != -1 && <PersonalDetailLevel detailLevel={detailLevel}/>}
        </div>

    )

}