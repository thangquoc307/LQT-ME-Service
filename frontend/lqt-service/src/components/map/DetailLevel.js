import "./building.css"
import {useEffect, useRef, useState} from "react";
export default function DetailLevel({level}) {
    const mapImage = useRef();
    const mapLocation = [
        {
            name: 1,
            point: [
                {position_x: 3005, position_y: 6320},
                {position_x: 2539, position_y: 6430},
                {position_x: 2565, position_y: 6560},
                {position_x: 1182, position_y: 6896},
                {position_x: 1531, position_y: 8430},
                {position_x: 2938, position_y: 8102},
                {position_x: 2997, position_y: 8044},
                {position_x: 3216, position_y: 8005},
                {position_x: 3354, position_y: 7799},
            ]
        },
        {
            name: 2,
            point: [
                {position_x: 2331, position_y: 5560},
                {position_x: 953, position_y: 5888},
                {position_x: 1182, position_y: 6896},
                {position_x: 2565, position_y: 6560},
            ]
        },
        {
            name: 3,
            point: [
                {position_x: 2099, position_y: 4557},
                {position_x: 716, position_y: 4875},
                {position_x: 953, position_y: 5888},
                {position_x: 2331, position_y: 5560},
            ]
        },
        {
            name: 4,
            point: [
                {position_x: 1870, position_y: 3550},
                {position_x: 482, position_y: 3870},
                {position_x: 716, position_y: 4875},
                {position_x: 2099, position_y: 4557},
            ]
        },
        {
            name: 5,
            point: [
                {position_x: 2826, position_y: 2497},
                {position_x: 982, position_y: 2336},
                {position_x: 284, position_y: 2492},
                {position_x: 273, position_y: 2924},
                {position_x: 482, position_y: 3870},
                {position_x: 1870, position_y: 3550},
                {position_x: 1930, position_y: 3813},
                {position_x: 2268, position_y: 3750},
                {position_x: 2302, position_y: 3880},
                {position_x: 2688, position_y: 3909},
            ]
        },
        {
            name: 6,
            point: [
                {position_x: 4406, position_y: 2695},
                {position_x: 2823, position_y: 2557},
                {position_x: 2688, position_y: 3909},
                {position_x: 4271, position_y: 4068},
            ]
        },
        {
            name: 7,
            point: [
                {position_x: 6232, position_y: 4224},
                {position_x: 5487, position_y: 3479},
                {position_x: 5565, position_y: 3406},
                {position_x: 4883, position_y: 2740},
                {position_x: 4406, position_y: 2695},
                {position_x: 4271, position_y: 4068},
                {position_x: 5362, position_y: 5135},
            ]
        },
        {
            name: 8,
            point: [
                {position_x: 4612, position_y: 4880},
                {position_x: 3836, position_y: 5670},
                {position_x: 4076, position_y: 5901},
                {position_x: 3865, position_y: 6117},
                {position_x: 3990, position_y: 6453},
                {position_x: 4174, position_y: 6635},
                {position_x: 4568, position_y: 7034},
                {position_x: 5664, position_y: 5893},

            ]
        },
        {
            name: 9,
            point: [
                {position_x: 6706, position_y: 6924},
                {position_x: 5664, position_y: 5893},
                {position_x: 4568, position_y: 7034},
                {position_x: 5417, position_y: 7849},
                {position_x: 5576, position_y: 7682},
                {position_x: 5766, position_y: 7891},
            ]
        },
        {
            name: 10,
            point: [
                {position_x: 7674, position_y: 7339},
                {position_x: 7148, position_y: 7333},
                {position_x: 6706, position_y: 6924},
                {position_x: 5766, position_y: 7891},
                {position_x: 5521, position_y: 8125},
                {position_x: 5680, position_y: 8276},
                {position_x: 5685, position_y: 8232},
                {position_x: 6078, position_y: 8617},
                {position_x: 6089, position_y: 8688},
                {position_x: 7180, position_y: 8677},
                {position_x: 7174, position_y: 8607},
                {position_x: 7474, position_y: 8594},
                {position_x: 7495, position_y: 8656},
                {position_x: 7695, position_y: 8667},
            ]
        },
        {
            name: 11,
            point: [
                {position_x: 9586, position_y: 6667},
                {position_x: 8250, position_y: 6695},
                {position_x: 8253, position_y: 7328},
                {position_x: 7674, position_y: 7339},
                {position_x: 7695, position_y: 8667},
                {position_x: 7883, position_y: 8646},
                {position_x: 7852, position_y: 8594},
                {position_x: 8169, position_y: 8596},
                {position_x: 8216, position_y: 8664},
                {position_x: 9099, position_y: 8651},
                {position_x: 9609, position_y: 8130},
                {position_x: 9586, position_y: 7578},
                {position_x: 9523, position_y: 7544},
                {position_x: 9529, position_y: 7227},
                {position_x: 9596, position_y: 7229},
            ]
        },
        {
            name: 12,
            point: [
                {position_x: 9552, position_y: 5052},
                {position_x: 8224, position_y: 5060},
                {position_x: 8250, position_y: 6695},
                {position_x: 9586, position_y: 6667},
                {position_x: 9568, position_y: 6492},
                {position_x: 9513, position_y: 6471},
                {position_x: 9505, position_y: 6130},
                {position_x: 9583, position_y: 6125},
                {position_x: 9573, position_y: 5555},
                {position_x: 9505, position_y: 5536},
                {position_x: 9500, position_y: 5229},
                {position_x: 9557, position_y: 5229},
            ]
        },
        {
            name: 13,
            point: [
                {position_x: 9552, position_y: 5052},

            ]
        }

    ]
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

    };
    const addClickEvent = () => {
        const polygons = document.querySelectorAll(".building-map-polygon");
        polygons.forEach((polygon) => {
            polygon.addEventListener("click", handleLevelClick);
        });
    }
    const getDataPer = (e) => {
        var rect = e.target.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width) * 100;
        var y = ((e.clientY - rect.top) / rect.height) * 100;

        alert('x: ' + x + ' y: ' + y);
    }

    useEffect(() => {
        setupBoundary();
    }, [mapImage.current])

    return (
        <div className="detail-level color3 borderradius boxshadow-outset"
        onClick={(e) => {getDataPer(e)}}>
            <svg className="building-map-svg" ref={mapImage}/>
        </div>
    )
}