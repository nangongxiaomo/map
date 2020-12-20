Config = class {
    set licence(value) {
        this._licence = value;
    }

    set defaultSet(value) {
        this._defaultSet = value;
    }

    set lightSet(value) {
        this._lightSet = value;
    }

    set defaultCameraSet(value) {
        this._defaultCameraSet = value;
    }

    set cursorModels(value) {
        this._cursorModels = value;
    }

    set floorModel(value) {
        this._floorModel = value;
    }

    get licence() {
        return this._licence;
    }

    get lightSet() {
        return this._lightSet;
    }

    get defaultCameraSet() {
        return this._defaultCameraSet;
    }


    get defaultSet() {
        return this._defaultSet;
    }


    get cursorModels() {
        return this._cursorModels;
    }

    get floorModel() {
        return this._floorModel;
    }

    constructor() {
        this._licence = {
            user: "南京千目信息科技",
            code: {licence: "7b8e4670e38dcd493427296d78725604", type: 3, data: 1605283200, key: ""}
        };

        //基础设置配置
        this._defaultSet = {
            debug: true,//debug模式
            shopData: {path: 'json/QueryShopListJson.json', keyName: ["data"]},  //box店铺文件
            navData: {path: 'json/GetMapInfoJson.json', keyName: ["data", "mapData"]}, //导航点+线+设施
            mapContainer: document.getElementById('mapContainer'),
            navModelName: 'navCursor',
            startModelName: 'startNavCursor',
            endModelName: 'endNavCursor',
            arrowModelName: 'navArrow',
            oneCameraModelName: 'oneCameraCursor',
            selectBox: {boxUp: 3, boxColor: null, spriteUp: 0.25},
            defaultSprite: {
                sprite: {x: 0, y: 0, z: 0},
                facilities: {x: 0, y: 0, z: 0},
                fontSize: 12,
                fontColor: "#000000",
                facilitiesT: "3D",
                facilitiesW: 30,
                facilitiesH: 30,
                facilities3DScale: 0.9,
                facilitiesY: 0.8,
                spriteCss: "cubeLabel no-selected",
                spriteImgPath: "images/"
            },
            mapWidth: window.innerWidth,
            mapHeight: window.innerHeight,
            mapXOffSet: 0,
            mapYOffSet: 0,
            shopInfoDialog: {
                name: "shopInfo",
                shopName: "shopName",
                mapGo: "mapGo",
                shopDetail: "shopDetail",
                position: {x: 0, y: 0, z: 0},
                marginTop: "-100px",
                marginLeft: "100px;",
                marginRight: "100px"
            },
            liftType: {
                lift: 5,
                stair: 0,
                stairType: {type: 0, up: "upStair", down: "downStair"},
                liftType: {type: 0, name: "lift"}
            },   //电梯配置type 0:2d 1:3d
            armSpeed: 2.2,   //手臂摇摆速度;
            runSpeed: 300, //行走速度;
            maxSpeedZoom: 4, //最大速度倍数；
            autoHide: false, //到达终点小人是否自动隐藏；
            autoReplay: false, //是否自动重播；
            replayReset: false, //重播是否重置摄像机角度；
            finishRunClick: false,//寻路结束是否允许点击；
            showTakeDownAnimate: {show: true, position: {x: 1, y: 0, z: 0}, speed: 3000}, //是否显示上下楼指示弹框；
            showTakeDownAnimateSet: {x: 1.5, y: 1.1, z: 1.5, speed: 2000}, //json模型推荐：{x: 1.7, y: 1.15, z: 1.7, speed: 3000} dae模型推荐：
            lineStyle: {
                show: true,
                color: "#d89c56",
                borderColor: "#b37834",
                lineWidth: 5,
                position: {x: 0, y: 0.1, z: 0}
            },//寻路路线属性，主线颜色，描边颜色，线条宽度,坐标偏移
            foldFloor: {status: false, distance: [0, 10, 10],labelStatus:true},    //是否双叠层（注：单层寻路或双层以上无效）
            boxColorSet: {
                boxColor: "formatColor",
                borderColor: "borderColor",
                boxNum: "houseNum",
                spritePosition: "xaxis",
                navPoint: "yaxis",
                shopName: "name",
                floorOrder: "floorOrder"
            },
            findFacilities: {funcName: "findFacilities", findObj: "findFacilitiesInfo"},
            textFont: {enFontPath: "js/en.json"},
            arrow: {
                show: true,
                animate: true,
                objName: "navArrowGroup",
                imagePath: "images/jt.png",
                speed: 0.03,
                scale: 8,
                arrowOffset: 0,
                placeLength: 1.5,
                position: {x: 0, y: 0.2, z: 0}
            },
        };

        //灯光设置
        this._lightSet = [
            {name: 'AmbientLight', color: '#ffffff', intensity: 0.8},
            {
                name: 'DirectionalLight',
                color: '#ffffff',
                intensity: 0.1,
                position: {x: 1, y: 8, z: 0},
                castShadow: true
            },
        ];

        //默认视图设置
        this._defaultCameraSet = {
            cameraPosition: {x: 0, y: 25, z: 40},
            controlTarget: {x: 0, y: 0, z: 0},
            cameraFov: 30,
            cameraNear: 10,     //json模型推荐
            cameraFar: 100000,  //json模型推荐 dae模型推荐 1000
            minDistance: 20,
            maxDistance: 100,
            minPolarAngle: 0,
            maxPolarAngle: 1.3
        };

        //模型图标
        this._cursorModels = [
            {
                name: 'navCursor',  //寻路时走动模型(切勿更换名称)
                path: 'images/runMan.fbx',    //小人
                color: [{name: 'all', color: 0xfe9219}],//小人上色
                scale: {x: 0.003, y: 0.003, z: 0.003},//小人缩放
                /*                path: "images/2dNavCursor.dae",  //箭头
                                color: [{name: 'object_8', color: '#FFFEFC', op: 1},
                                    {name: 'object_7', color: '#F0C391', op: 1},
                                    {name: 'object_6', color: '#EC993B', op: 1},
                                    {name: 'object_5', color: '#F0C391', op: 1},
                                    {name: 'object_4', color: '#F3DEC8', op: 1},
                                    {name: 'object_3', color: '#F3DEC8', op: 1},
                                    {name: 'object_2', color: '#ffffff', op: 1},
                                    {name: 'object_1', color: '#F4EFE9', op: 1}],//箭头上色
                                scale: {x: 0.2, y: 0.2, z: 0.2}, //箭头缩放*/
                position: {x: 0, y: 0.7, z: 0},
                renderOrderNum: 9999,
            },
            {
                name: 'endNavCursor',    //终点图标(切勿更换名称)
                path: 'images/endNav.dae',
                color: [
                    {name: 'object_1', color: '#FF464E', op: 1},
                    {name: 'object_2', color: '#FF464E', op: 1},
                    {name: 'object_3', color: '#FF464E', op: 1},
                    {name: 'object_4', color: '#FF464E', op: 1},
                    {name: 'object_5', color: '#FF464E', op: 1},
                    {name: 'object_6', color: '#ffffff', op: 1}
                ],
                position: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                renderOrderNum: 1,
                animate: {speed: 0.03, direction: 'y'},
            },
            {
                name: 'startNavCursor', //起点图标(切勿更换名称)
                path: 'images/startNav.dae',
                color: [
                    {name: 'object_1', color: '#ff0000', op: 1},
                    {name: 'object_2', color: '#ff0000', op: 1},
                    {name: 'object_3', color: '#ffffff', op: 1},
                    {name: 'object_4', color: '#ff0000', op: 1}
                ],
                position: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                renderOrderNum: 1,
                animate: {speed: 0.03, direction: 'y'},
            },
            {
                name: 'oneCameraCursor',
                path: "images/jt.dae",
                color: [
                    {name: "top", color: "#637CF8", op: 1},
                    {name: "bottom", color: "#B7C7F1", op: 1},
                    {name: "middle", color: "#ffffff", op: 1}],
                position: {x: 0, y: 10, z: 0},
                scale: {x: 1, y: 1, z: 1},
                renderOrderNum: 1,
            },
            {
                name: 'upStair',
                path: 'images/upStair.dae',
                scale: {x: 50, y: 50, z: 50},
                color: [
                    {name: "r2", color: "#ffffff", op: 0.46},
                    {name: "l2", color: "#ffffff", op: 0.46},
                    {name: "floor.1", color: "#333333", op: 1},
                    {name: "r2.1", color: "#333333", op: 1},
                    {name: "l2.1", color: "#333333", op: 1}],
                position: {x: 0, y: 0, z: 30},   //如果模型是json格式，z代表高度
                renderOrderNum: 1,
            },
            {
                name: 'downStair',
                path: 'images/downStair.dae',
                scale: {x: 50, y: 50, z: 50},
                color: [
                    {name: "r2", color: "#ffffff", op: 0.46},
                    {name: "l2", color: "#ffffff", op: 0.46},
                    {name: "floor.1", color: "#333333", op: 1},
                    {name: "r2.1", color: "#333333", op: 1},
                    {name: "l2.1", color: "#333333", op: 1}],
                position: {x: 0, y: 0, z: 30},
                renderOrderNum: 1,
            }, {
                name: 'lift',
                path: 'images/lift.dae',
                scale: {x: 60, y: 120, z: 60},
                color: [
                    {name: "leftDoor", color: "#ffffff", op: 0.9},
                    {name: "rightDoor", color: "#ffffff", op: 0.9},
                    {name: "Box", color: "#333333", op: 1},
                    {name: "top", color: "#333333", op: 1},
                    {name: "a", color: "#333333", op: 0.9},
                    {name: "up", color: "#ffffff", op: 0.8},
                    {name: "down", color: "#ffffff", op: 0.8},
                    {name: "object_4", color: "#000000", op: 1}],
                position: {x: 0, y: 0, z: -30},
                renderOrderNum: 99,
            },
            {
                name: 'navArrow',
                path: 'images/jt.png',
                scale: {x: 0.008, y: 0.008, z: 0.008},
                color: [
                    {name: "r2", color: "#ffffff", op: 0.46},
                    {name: "l2", color: "#ffffff", op: 0.46},
                    {name: "floor.1", color: "#121212", op: 1},
                    {name: "r2.1", color: "#121212", op: 1},
                    {name: "l2.1", color: "#121212", op: 1}],
                position: {x: 0, y: 0.1, z: 0},
                renderOrderNum: 1,
            }
        ];

        this._floorModel = {
            //缩放比例
            model: [
                {
                    path: 'model/L1.json',
                    name: 'L1',
                    scale: 1,
                    rotation: {x: -90, y: 0, z: 0},
                    cameraPosition: {x: 0, y: 6.91, z: 33.04},
                    controlTarget: {x: 0, y: -15.23, z: 0},
                    floor: {
                        w: 35,
                        h: 0.2,
                        d: 23,
                        color: "#ffffff",
                        borderColor: "#cccccc",
                        opacity: 0.5,
                        position: {x: 0, y: -1, z: -2},
                        rotation: {x: -90, y: 0, z: 0}
                    },
                    text: [{type: 0, text: "B1", size: 1.5, color: "#caa679", position: {x: -12, y: 0, z: -5}}],
                },
                {
                    path: 'model/L2.json',
                    name: 'L2',
                    scale: 1,
                    rotation: {x: -90, y: 0, z: 0},
                    cameraPosition: {x: 0, y: 5, z: 32},
                    controlTarget: {x: 0, y: 0, z: 0},
                    floor: {
                        w: 35,
                        h: 0.2,
                        d: 23,
                        color: "#ffffff",
                        borderColor: "#cccccc",
                        opacity: 0.5,
                        position: {x: 0, y: -1, z: -2},
                        rotation: {x: -90, y: 0, z: 0}
                    },
                    text: [{type: 0, text: "B1", size: 1.5, color: "#caa679", position: {x: -12, y: 0, z: -5}}],
                },
                {
                    path: 'model/L3.json',
                    name: 'L3',
                    scale: 1,
                    rotation: {x: -90, y: 0, z: 0},
                    cameraPosition: {x: 0, y: 16, z: 35},
                    controlTarget: {x: 0, y: 0, z: 0},
                    floor: {
                        w: 35,
                        h: 0.2,
                        d: 24,
                        color: "#ffffff",
                        borderColor: "#cccccc",
                        opacity: 0.5,
                        position: {x: 0, y: -1, z: -10},
                        rotation: {x: -90, y: 0, z: 0}
                    },
                    text: [{
                        type: 0,
                        text: "L1",
                        size: 1.5,
                        color: "#caa679",
                        position: {x: -12, y: 0, z: -5},
                        cssStyle: "cubeLabel no-selected"
                    }],
                },
                {
                    path: 'model/L4.json',
                    name: 'L4',
                    scale: 1,
                    rotation: {x: -90, y: 0, z: 0},
                    cameraPosition: {x: 0, y: 24, z: 38},
                    controlTarget: {x: 0, y: 0, z: 0},
                    floor: {
                        w: 35,
                        h: 0.2,
                        d: 24,
                        color: "#ffffff",
                        borderColor: "#cccccc",
                        opacity: 0.5,
                        position: {x: 0, y: -1, z: -1},
                        rotation: {x: -90, y: 0, z: 0}
                    },
                    text: [{type: 0, text: "L2", size: 1.5, color: "#caa679", position: {x: -12, y: 0, z: -5}}],
                },
                {
                    path: 'model/L5.json',
                    name: 'L5',
                    scale: 1,
                    rotation: {x: -90, y: 0, z: 0},
                    cameraPosition: {x: 0, y: 36, z: 32},
                    controlTarget: {x: 0, y: 0, z: 0},
                    floor: {
                        w: 35,
                        h: 0.2,
                        d: 20,
                        color: "#ffffff",
                        borderColor: "#cccccc",
                        opacity: 0.5,
                        position: {x: 0, y: -1, z: 0},
                        rotation: {x: -90, y: 0, z: 0}
                    },
                    text: [{type: 0, text: "L3", size: 1.5, color: "#caa679", position: {x: -12, y: 0, z: -5}}],
                }
            ],
            floorModelSet: [],
            rotation: 0,
            scale: 0.015,
            floorDistance: 10
        };  //模型数据

    }
};
