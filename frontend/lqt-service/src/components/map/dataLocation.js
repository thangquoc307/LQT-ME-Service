export const getLocation = (e) => {
    let result = ""
    e.forEach(position =>
        result += `${position.position_x / 100}, 
            ${position.position_y / 100} `
    )
    return result;
}
export const getAvgX = (e) => {
    let max_x = e[0].position_x;
    let min_x = e[0].position_x;
    for (let i = 0; i < e.length; i++){
        let positionX = e[i].position_x;
        if (max_x < positionX){
            max_x = positionX;
        }
        if (min_x > positionX){
            min_x = positionX;
        }
    }
    return (max_x + min_x) / 200;
}
export const getAvgY = (e) => {
    let max_y = e[0].position_y;
    let min_y = e[0].position_y;
    for (let i = 0; i < e.length; i++){
        let positionY = e[i].position_y;
        if (max_y < positionY){
            max_y = positionY;
        }
        if (min_y > positionY){
            min_y = positionY;
        }
    }
    return (max_y + min_y) / 200;
}
export const getMapX = (e) => {
    return e[0].position_x / 100;
}
export const getMapY = (e) => {
    return (e[e.length - 1].position_y + e[0].position_y) / 200;
}
export const levelLocation = [
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
];
export const roomLocation = [
    {
        name: 1,
        point: [
            {position_x: 3005, position_y: 6320},
            {position_x: 2539, position_y: 6430},
            {position_x: 2565, position_y: 6560},
            {position_x: 1182, position_y: 6896},
            {position_x: 1531, position_y: 8430},
            {position_x: 1589, position_y: 8419},
            {position_x: 1669, position_y: 8359},
            {position_x: 1990, position_y: 8286},
            {position_x: 1961, position_y: 8328},
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
            {position_x: 1060, position_y: 6385},
            {position_x: 1151, position_y: 6372},
            {position_x: 1219, position_y: 6677},
            {position_x: 1151, position_y: 6701},
            {position_x: 1182, position_y: 6896},
            {position_x: 2565, position_y: 6560},
            {position_x: 2539, position_y: 6430},
        ]
    },
    {
        name: 3,
        point: [
            {position_x: 2099, position_y: 4557},
            {position_x: 716, position_y: 4875},
            {position_x: 773, position_y: 5063},
            {position_x: 857, position_y: 5068},
            {position_x: 917, position_y: 5357},
            {position_x: 828, position_y: 5383},
            {position_x: 953, position_y: 5888},
            {position_x: 2331, position_y: 5560},
        ]
    },
    {
        name: 4,
        point: [
            {position_x: 1870, position_y: 3550},
            {position_x: 482, position_y: 3870},
            {position_x: 599, position_y: 4372},
            {position_x: 701, position_y: 4399},
            {position_x: 771, position_y: 4693},
            {position_x: 680, position_y: 4690},
            {position_x: 716, position_y: 4875},
            {position_x: 2099, position_y: 4557},
            {position_x: 1930, position_y: 3813},
        ]
    },
    {
        name: 5,
        point: [
            {position_x: 2823, position_y: 2557},
            {position_x: 2513, position_y: 2516},
            {position_x: 2466, position_y: 2466},
            {position_x: 2242, position_y: 2440},
            {position_x: 2232, position_y: 2495},
            {position_x: 1875, position_y: 2469},
            {position_x: 1807, position_y: 2401},
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
            {position_x: 4380, position_y: 2695},
            {position_x: 4370, position_y: 2742},
            {position_x: 4115, position_y: 2719},
            {position_x: 4083, position_y: 2672},
            {position_x: 3323, position_y: 2599},
            {position_x: 3315, position_y: 2648},
            {position_x: 3065, position_y: 2630},
            {position_x: 3016, position_y: 2576},
            {position_x: 2823, position_y: 2557},
            {position_x: 2688, position_y: 3909},
            {position_x: 4271, position_y: 4068},
        ]
    },
    {
        name: 7,
        point: [
            {position_x: 6219, position_y: 4247},
            {position_x: 5849, position_y: 3888},
            {position_x: 5859, position_y: 3849},
            {position_x: 5487, position_y: 3479},
            {position_x: 5565, position_y: 3406},
            {position_x: 5526, position_y: 3367},
            {position_x: 5508, position_y: 3383},
            {position_x: 5258, position_y: 3143},
            {position_x: 5253, position_y: 3105},
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
            {position_x: 4214, position_y: 6607},
            {position_x: 4464, position_y: 6867},
            {position_x: 4448, position_y: 6888},
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
            {position_x: 4703, position_y: 7143},
            {position_x: 4724, position_y: 7115},
            {position_x: 4979, position_y: 7367},
            {position_x: 4966, position_y: 7406},
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
            {position_x: 9534, position_y: 3417},
            {position_x: 8211, position_y: 3438},
            {position_x: 8206, position_y: 3951},
            {position_x: 8224, position_y: 5060},
            {position_x: 9552, position_y: 5052},
            {position_x: 9547, position_y: 4862},
            {position_x: 9497, position_y: 4865},
            {position_x: 9492, position_y: 4563},
            {position_x: 9568, position_y: 4549},
            {position_x: 9557, position_y: 3969},
            {position_x: 9479, position_y: 3961},
            {position_x: 9479, position_y: 3625},
            {position_x: 9536, position_y: 3604},
        ]
    },
    {
        name: 14,
        point: [
            {position_x: 9070, position_y: 911},
            {position_x: 8341, position_y: 1654},
            {position_x: 8253, position_y: 1784},
            {position_x: 7539, position_y: 2469},
            {position_x: 7885, position_y: 2802},
            {position_x: 7893, position_y: 3956},
            {position_x: 8206, position_y: 3951},
            {position_x: 8211, position_y: 3438},
            {position_x: 9534, position_y: 3417},
            {position_x: 9552, position_y: 3427},
            {position_x: 9523, position_y: 1362},
            {position_x: 9503, position_y: 1336},
            {position_x: 9422, position_y: 1401},
            {position_x: 9159, position_y: 1138},
            {position_x: 9208, position_y: 1073},
        ]
    },
    {
        name: 15,
        point: [
            {position_x: 7448, position_y: 2375},
            {position_x: 7023, position_y: 2794},
            {position_x: 6589, position_y: 3242},
            {position_x: 7047, position_y: 3688},
            {position_x: 6674, position_y: 4076},
            {position_x: 7341, position_y: 4721},
            {position_x: 7898, position_y: 4701},
            {position_x: 7893, position_y: 3956},
            {position_x: 7885, position_y: 2802},
            {position_x: 7539, position_y: 2469},
        ]
    }
]
