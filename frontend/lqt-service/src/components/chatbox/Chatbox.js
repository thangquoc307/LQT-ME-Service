import "./chatbox.css"
import {convertRoom, reduceLengthName} from "../../service/formatData";
import {ChatDetail} from "./ChatDetail";
import {useEffect, useState} from "react";
export default function Chatbox({selectLevel,selectRoom,currentCustomer}) {
    const [accountId, setAccountId] = useState();
    const getAccountId = async () => {
        await setAccountId(null);
        if (currentCustomer){
            setAccountId(currentCustomer.id);
        } else {
            setAccountId(null);
        }
    }
    useEffect(() => {
        getAccountId();
    },[currentCustomer])

    return (
        <div className="chatbox">
            <div className="chatbox-info borderradius boxshadow-outset">
                {currentCustomer && selectRoom != -1 ?
                    <>
                    <div className="chatbox-info-name color5">
                        {reduceLengthName(currentCustomer.name, 20)}
                    </div>
                    <div className="chatbox-info-avatar">
                        <div className="chatbox-info-avatar-item color5"
                        style={{backgroundImage: `url("${currentCustomer.account.avatar}")`}}/>
                    </div>
                    <div className="chatbox-info-info">
                        <p>📧 {currentCustomer.account.email}</p>
                        <p>📲 {currentCustomer.phone}</p>
                    </div>
                    <div className="chatbox-info-room">
                        <div>
                            <p>Phòng : {convertRoom(selectLevel, selectRoom)}</p>
                            <p>Tầng : {selectLevel}</p>
                        </div>
                    </div>
                    </> : <div className="chatbox-info-empty"/>
                }
            </div>
            <div className="chatbox-detail">
                {accountId && <ChatDetail accountId={accountId}/>}
            </div>
        </div>
    )

}