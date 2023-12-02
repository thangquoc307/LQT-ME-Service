import {useState} from "react";
import BuildingMap from "./BuildingMap";
import DetailLevel from "./DetailLevel";

export default function Building() {
    const [level, setLevel] = useState(-1);
    const selectLevel = (e) => {
        setLevel(e);
    }







    return (
        <div className="buiding">
            {level == -1 && <BuildingMap selectLevel={selectLevel}/>}
            {level != -1 && <DetailLevel selectLevel={selectLevel} level={level}/>}
        </div>

    )

}