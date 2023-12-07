import BuildingMap from "./BuildingMap";
import DetailLevel from "./DetailLevel";

export default function Building({selectRoom, setSelectRoom, selectLevel, setSelectLevel}) {
    return (
        <div className="buiding">
            {selectLevel == -1 && <BuildingMap
                selectLevel={selectLevel}
                setSelectRoom={setSelectRoom}
                setSelectLevel={setSelectLevel}
            />}
            {selectLevel != -1 && <DetailLevel
                selectLevel={selectLevel}
                selectRoom={selectRoom}
                setSelectRoom={setSelectRoom}
                setSelectLevel={setSelectLevel}
            />}
        </div>

    )

}