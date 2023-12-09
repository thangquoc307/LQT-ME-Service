import BuildingMap from "./BuildingMap";
import DetailLevel from "./DetailLevel";
import {useSelector} from "react-redux";

export default function Building() {
    const room = useSelector(state => state.room);
    const level = useSelector(state => state.level);
    return (
        <div className="buiding">
            {level == -1 && <BuildingMap/>}
            {level != -1 && <DetailLevel/>}
        </div>

    )

}