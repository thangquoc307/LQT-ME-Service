import "./managePage.css"
import Building from "../map/Building";
import {useEffect, useState} from "react";
import Chatbox from "../chatbox/Chatbox";
import {Schedule} from "../schedule/schedule";
import RequestManage from "../requestManage/RequestManage";
import {getAllRoomByLevel} from "../../service/ApiConnection";
import {convertRoom} from "../../service/formatData";
import ModalConfirm from "../modal/ModalConfirm";
export default function ManagerPage() {
    const [selectRoom, setSelectRoom] = useState(-1);
    const [selectLevel, setSelectLevel] = useState(-1);
    const [dataRoom, setDataRoom] = useState();
    const [currentCustomer, setCurrentCustomer] = useState();
    const [useModal, setUseModal] = useState(0);

    const getDataRoomByLevel = async () => {
        const data = await getAllRoomByLevel(selectLevel);
        setDataRoom(data);
    }
    const getCurrentCustomer = () => {
        let room = convertRoom(selectLevel, selectRoom);
        for (let i = 0; i < dataRoom.length; i++) {
            let roomCheck = dataRoom[i];
            if (roomCheck.name == room) {
                setCurrentCustomer(roomCheck.customer);
                break;
            }
        }
    }
    useEffect(() => {
        if (selectLevel != -1){
            getDataRoomByLevel();
        }
    }, [selectLevel])
    useEffect(() => {
        if (selectLevel != -1 && selectRoom != -1){
            getCurrentCustomer();
        }
    }, [selectRoom, selectLevel])

    return (
        <div className="offset-header managePage">
            <div className="managePage-map">
                <Building
                    selectRoom={selectRoom}
                    setSelectRoom={setSelectRoom}
                    selectLevel={selectLevel}
                    setSelectLevel={setSelectLevel}
                />
            </div>
            <div className="managePage-option borderradius color3 boxshadow-inset">
                <div className="managePage-option-calendar">
                    <Schedule
                        useModal={useModal}
                    />
                </div>
                <div className="managePage-option-chat">
                    <Chatbox
                        selectRoom={selectRoom}
                        selectLevel={selectLevel}
                        currentCustomer={currentCustomer}
                    />
                </div>
                <div className="managePage-option-request">
                    <RequestManage
                        setUseModal={setUseModal}
                        useModal={useModal}
                    />
                </div>
            </div>

        </div>
    )
}