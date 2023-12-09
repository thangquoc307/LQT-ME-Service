import "./chatbox.css"
import {reduceLengthName} from "../../service/formatData";
import {ChatDetail} from "./ChatDetail";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getCustomerById} from "../../service/ApiConnection";
export default function Chatbox() {
    const [user, setUser] = useState();
    const customerId = useSelector(state => state.chatCustomer);
    const getUserChat = async () => {
        const data = await getCustomerById(customerId);
        setUser(data);
    }
    useEffect(() => {
        if (customerId != -1) {
            getUserChat();
        }
    },[customerId])
    return (
        <div className="chatbox">
            <div className="chatbox-info borderradius boxshadow-outset">
                {user ?
                    <>
                    <div className="chatbox-info-name color5">
                        {reduceLengthName(user.name, 20)}
                    </div>
                    <div className="chatbox-info-avatar">
                        <div className="chatbox-info-avatar-item color5"
                        style={{backgroundImage: `url("${user.account.avatar}")`}}/>
                    </div>
                    <div className="chatbox-info-info">
                        <p>📧 {reduceLengthName(user.account.email, 15)}</p>
                        <p>📲 {user.phone}</p>
                    </div>
                    </> : <div className="chatbox-info-empty"/>
                }
            </div>
            <div className="chatbox-detail">
                {user && <ChatDetail accountId={customerId}/>}
            </div>
        </div>
    )
}
