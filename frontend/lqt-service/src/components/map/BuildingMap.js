import "./building.css"
import {useEffect, useRef, useState} from "react";
import {levelLocation} from "./dataLocation";
export default function BuildingMap({selectLevel}) {
    const mapImage = useRef();
    const mapLocation = levelLocation;
    const [refresh, setRefresh] = useState(0);
    const setupBoundary = () => {
        if (mapImage.current){
            let width = mapImage.current.width.baseVal.value;
            let height = mapImage.current.height.baseVal.value;
            setLocation(width, height);
        }
    }
    const setLocation = async (width, height) => {
        let data = "";
        await mapLocation.forEach(e => {
            data += `<polygon class="building-map-polygon" 
                        points="${getLocation(e.point, width, height)}"
                        data-level="${e.level}" /> `
        });
        mapImage.current.innerHTML = data;
        setRefresh(refresh + 1);
        addClickEvent();
    }
    const getLocation = (e, width, height) => {
        let result = ""
        e.forEach(position =>
            result += `${width * position.position_x / 10000}, 
            ${height * position.position_y / 10000} `
        )
        return result;
    }
    const handleLevelClick = (e) => {
        const level = e.target.dataset.level;
        selectLevel(level);
    };
    const addClickEvent = () => {
        const polygons = document.querySelectorAll(".building-map-polygon");
        polygons.forEach((polygon) => {
            polygon.addEventListener("click", handleLevelClick);
        });
    }
    useEffect(() => {
        setupBoundary();
    }, [mapImage.current])

    return (
        <div className="building-map color3 borderradius boxshadow-outset">
            <svg className="building-map-svg" ref={mapImage}/>
        </div>
    )
}