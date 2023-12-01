import "./building.css"
import {useEffect, useRef, useState} from "react";
export default function BuildingMap({selectLevel}) {
    const mapImage = useRef();
    const mapLocation = [
        {
            level: 21,
            point: [
                {position_x: 6648, position_y: 875},
                {position_x: 4896, position_y: 971},
                {position_x: 4430, position_y: 981},
                {position_x: 2930, position_y: 935},
                {position_x: 2852, position_y: 885},
                {position_x: 2534, position_y: 872},
                {position_x: 2148, position_y: 888},
                {position_x: 1992, position_y: 893},
                {position_x: 1263, position_y: 880},

                {position_x: 1284, position_y: 1219},
                {position_x: 2005, position_y: 1262},
                {position_x: 2154, position_y: 1258},
                {position_x: 2826, position_y: 1182},
                {position_x: 2932, position_y: 1302},
                {position_x: 4417, position_y: 1410},
                {position_x: 4870, position_y: 1403},
                {position_x: 6612, position_y: 1195},
            ]
        },
        {
            level: 20,
            point: [
                {position_x: 6612, position_y: 1195},
                {position_x: 4870, position_y: 1403},
                {position_x: 4417, position_y: 1410},
                {position_x: 2932, position_y: 1302},
                {position_x: 2826, position_y: 1182},
                {position_x: 2154, position_y: 1258},
                {position_x: 2005, position_y: 1262},
                {position_x: 1284, position_y: 1219},

                {position_x: 1289, position_y: 1518},
                {position_x: 2010, position_y: 1560},
                {position_x: 2154, position_y: 1568},
                {position_x: 2839, position_y: 1474},
                {position_x: 2924, position_y: 1638},
                {position_x: 4393, position_y: 1771},
                {position_x: 4846, position_y: 1776},
                {position_x: 6573, position_y: 1529},
            ]
        },
        {
            level: 19,
            point: [
                {position_x: 6573, position_y: 1529},
                {position_x: 4846, position_y: 1776},
                {position_x: 4393, position_y: 1771},
                {position_x: 2924, position_y: 1638},
                {position_x: 2839, position_y: 1474},
                {position_x: 2154, position_y: 1568},
                {position_x: 2010, position_y: 1560},
                {position_x: 1289, position_y: 1518},

                {position_x: 1305, position_y: 1828},
                {position_x: 2008, position_y: 1878},
                {position_x: 2159, position_y: 1875},
                {position_x: 2815, position_y: 1755},
                {position_x: 2924, position_y: 1969},
                {position_x: 4367, position_y: 2151},
                {position_x: 4815, position_y: 2138},
                {position_x: 6534, position_y: 1831},
            ]
        },
        {
            level: 18,
            point: [
                {position_x: 6534, position_y: 1831},
                {position_x: 4815, position_y: 2138},
                {position_x: 4367, position_y: 2151},
                {position_x: 2924, position_y: 1969},
                {position_x: 2815, position_y: 1755},
                {position_x: 2159, position_y: 1875},
                {position_x: 2008, position_y: 1878},
                {position_x: 1305, position_y: 1828},

                {position_x: 1317, position_y: 2096},
                {position_x: 2016, position_y: 2156},
                {position_x: 2164, position_y: 2146},
                {position_x: 2810, position_y: 2013},
                {position_x: 2922, position_y: 2286},
                {position_x: 4352, position_y: 2492},
                {position_x: 4794, position_y: 2495},
                {position_x: 6505, position_y: 2115},
            ]
        },
        {
            level: 17,
            point: [
                {position_x: 6505, position_y: 2115},
                {position_x: 4794, position_y: 2495},
                {position_x: 4352, position_y: 2492},
                {position_x: 2922, position_y: 2286},
                {position_x: 2810, position_y: 2013},
                {position_x: 2164, position_y: 2146},
                {position_x: 2016, position_y: 2156},
                {position_x: 1317, position_y: 2096},

                {position_x: 1326, position_y: 2367},
                {position_x: 2023, position_y: 2435},
                {position_x: 2164, position_y: 2430},
                {position_x: 2807, position_y: 2271},
                {position_x: 2914, position_y: 2604},
                {position_x: 4331, position_y: 2843},
                {position_x: 4771, position_y: 2839},
                {position_x: 6471, position_y: 2385},
            ]
        },
        {
            level: 16,
            point: [
                {position_x: 6471, position_y: 2385},
                {position_x: 4771, position_y: 2839},
                {position_x: 4331, position_y: 2843},
                {position_x: 2914, position_y: 2604},
                {position_x: 2807, position_y: 2271},
                {position_x: 2164, position_y: 2430},
                {position_x: 2023, position_y: 2435},
                {position_x: 1326, position_y: 2367},

                {position_x: 1333, position_y: 2638},
                {position_x: 2023, position_y: 2721},
                {position_x: 2174, position_y: 2711},
                {position_x: 2813, position_y: 2521},
                {position_x: 2909, position_y: 2919},
                {position_x: 4315, position_y: 3195},
                {position_x: 4745, position_y: 3182},
                {position_x: 6435, position_y: 2677},
            ]
        },
        {
            level: 15,
            point: [
                {position_x: 6435, position_y: 2677},
                {position_x: 4745, position_y: 3182},
                {position_x: 4315, position_y: 3195},
                {position_x: 2909, position_y: 2919},
                {position_x: 2813, position_y: 2521},
                {position_x: 2174, position_y: 2711},
                {position_x: 2023, position_y: 2721},
                {position_x: 1333, position_y: 2638},

                {position_x: 1344, position_y: 2909},
                {position_x: 2029, position_y: 2992},
                {position_x: 2177, position_y: 2987},
                {position_x: 2805, position_y: 2776},
                {position_x: 2911, position_y: 3221},
                {position_x: 4292, position_y: 3523},
                {position_x: 4734, position_y: 3503},
                {position_x: 6409, position_y: 2940},
            ]
        },
        {
            level: 14,
            point: [
                {position_x: 6409, position_y: 2940},
                {position_x: 4734, position_y: 3503},
                {position_x: 4292, position_y: 3523},
                {position_x: 2911, position_y: 3221},
                {position_x: 2805, position_y: 2776},
                {position_x: 2177, position_y: 2987},
                {position_x: 2029, position_y: 2992},
                {position_x: 1344, position_y: 2909},

                {position_x: 1354, position_y: 3164},
                {position_x: 2039, position_y: 3260},
                {position_x: 2182, position_y: 3258},
                {position_x: 2807, position_y: 3023},
                {position_x: 2906, position_y: 3549},
                {position_x: 4276, position_y: 3854},
                {position_x: 4706, position_y: 3852},
                {position_x: 6372, position_y: 3198},
            ]
        },
        {
            level: 13,
            point: [
                {position_x: 6372, position_y: 3198},
                {position_x: 4706, position_y: 3852},
                {position_x: 4276, position_y: 3854},
                {position_x: 2906, position_y: 3549},
                {position_x: 2807, position_y: 3023},
                {position_x: 2182, position_y: 3258},
                {position_x: 2039, position_y: 3260},
                {position_x: 1354, position_y: 3164},

                {position_x: 1365, position_y: 3432},
                {position_x: 2042, position_y: 3534},
                {position_x: 2182, position_y: 3529},
                {position_x: 2802, position_y: 3260},
                {position_x: 2898, position_y: 3859},
                {position_x: 4260, position_y: 4193},
                {position_x: 4680, position_y: 4174},
                {position_x: 6346, position_y: 3461},
            ]
        },
        {
            level: 12,
            point: [
                {position_x: 6346, position_y: 3461},
                {position_x: 4680, position_y: 4174},
                {position_x: 4260, position_y: 4193},
                {position_x: 2898, position_y: 3859},
                {position_x: 2802, position_y: 3260},
                {position_x: 2182, position_y: 3529},
                {position_x: 2042, position_y: 3534},
                {position_x: 1365, position_y: 3432},

                {position_x: 1383, position_y: 3688},
                {position_x: 2044, position_y: 3789},
                {position_x: 2185, position_y: 3779},
                {position_x: 2802, position_y: 3500},
                {position_x: 2909, position_y: 4135},
                {position_x: 4250, position_y: 4492},
                {position_x: 4664, position_y: 4471},
                {position_x: 6318, position_y: 3714},
            ]
        },
        {
            level: 11,
            point: [
                {position_x: 6318, position_y: 3714},
                {position_x: 4664, position_y: 4471},
                {position_x: 4250, position_y: 4492},
                {position_x: 2909, position_y: 4135},
                {position_x: 2802, position_y: 3500},
                {position_x: 2185, position_y: 3779},
                {position_x: 2044, position_y: 3789},
                {position_x: 1383, position_y: 3688},

                {position_x: 1385, position_y: 3927},
                {position_x: 2052, position_y: 4044},
                {position_x: 2185, position_y: 4039},
                {position_x: 2799, position_y: 3753},
                {position_x: 2898, position_y: 4374},
                {position_x: 4237, position_y: 4779},
                {position_x: 4638, position_y: 4766},
                {position_x: 6286, position_y: 3974},
            ]
        },
        {
            level: 10,
            point: [
                {position_x: 6286, position_y: 3974},
                {position_x: 4638, position_y: 4766},
                {position_x: 4237, position_y: 4779},
                {position_x: 2898, position_y: 4374},
                {position_x: 2799, position_y: 3753},
                {position_x: 2185, position_y: 4039},
                {position_x: 2052, position_y: 4044},
                {position_x: 1385, position_y: 3927},

                {position_x: 1393, position_y: 4190},
                {position_x: 2055, position_y: 4307},
                {position_x: 2186, position_y: 4297},
                {position_x: 2792, position_y: 3977},
                {position_x: 2893, position_y: 4648},
                {position_x: 4221, position_y: 5096},
                {position_x: 4622, position_y: 5063},
                {position_x: 6260, position_y: 4203},
            ]
        },
        {
            level: 9,
            point: [
                {position_x: 6260, position_y: 4203},
                {position_x: 4622, position_y: 5063},
                {position_x: 4221, position_y: 5096},
                {position_x: 2893, position_y: 4648},
                {position_x: 2792, position_y: 3977},
                {position_x: 2186, position_y: 4297},
                {position_x: 2055, position_y: 4307},
                {position_x: 1393, position_y: 4190},

                {position_x: 1406, position_y: 4427},
                {position_x: 2057, position_y: 4557},
                {position_x: 2198, position_y: 4542},
                {position_x: 2786, position_y: 4216},
                {position_x: 2898, position_y: 4930},
                {position_x: 4201, position_y: 5393},
                {position_x: 4599, position_y: 5378},
                {position_x: 6234, position_y: 4474},
            ]
        },
        {
            level: 8,
            point: [
                {position_x: 6234, position_y: 4474},
                {position_x: 4599, position_y: 5378},
                {position_x: 4201, position_y: 5393},
                {position_x: 2898, position_y: 4930},
                {position_x: 2786, position_y: 4216},
                {position_x: 2198, position_y: 4542},
                {position_x: 2057, position_y: 4557},
                {position_x: 1406, position_y: 4427},

                {position_x: 1414, position_y: 4672},
                {position_x: 2063, position_y: 4807},
                {position_x: 2190, position_y: 4792},
                {position_x: 2776, position_y: 4445},
                {position_x: 2891, position_y: 5232},
                {position_x: 4188, position_y: 5685},
                {position_x: 4581, position_y: 5674},
                {position_x: 6201, position_y: 4682},
            ]
        },
        {
            level: 7,
            point: [
                {position_x: 6201, position_y: 4682},
                {position_x: 4581, position_y: 5674},
                {position_x: 4188, position_y: 5685},
                {position_x: 2891, position_y: 5232},
                {position_x: 2776, position_y: 4445},
                {position_x: 2190, position_y: 4792},
                {position_x: 2063, position_y: 4807},
                {position_x: 1414, position_y: 4672},

                {position_x: 1419, position_y: 4901},
                {position_x: 2065, position_y: 5047},
                {position_x: 2203, position_y: 5036},
                {position_x: 2682, position_y: 4701},
                {position_x: 2893, position_y: 5479},
                {position_x: 4159, position_y: 5943},
                {position_x: 4565, position_y: 5943},
                {position_x: 6182, position_y: 4885},
            ]
        },
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