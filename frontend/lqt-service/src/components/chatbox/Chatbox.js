import "./chatbox.css"
import {reduceLengthName} from "../../service/formatData";
import {ChatDetail} from "./ChatDetail";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getCustomerById, getCustomerList} from "../../service/ApiConnection";
import {store} from "../../redux/store";
import {selectChatCustomer} from "../../redux/action";
export default function Chatbox() {
    const [user, setUser] = useState();
    const customerId = useSelector(state => state.chatCustomer);
    const [customerList, setCustomerList] = useState();
    const getUserChat = async () => {
        const data = await getCustomerById(customerId);
        setUser(data);
    }
    const getCustomer = async () => {
        const data = await getCustomerList();
        setCustomerList(data);
    }
    const setAccountChat = (id) => {
        store.dispatch(selectChatCustomer(id));
    }
    useEffect(() => {
        if (customerId != -1) {
            getUserChat();
        }
    },[customerId])
    useEffect(() => {
        getCustomer();
    }, [])
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
            <div className="chatlist">
                <div className="chatlist-item color0 borderradius boxshadow-inset">
                    {customerList && customerList.map(e => {
                        return(
                            <div key={e.id}
                                 className={`chatlist-member ${customerId == e.id ?
                                     "chatlist-member-select" :
                                     "chatlist-member-unselect"}`}
                                 style={{
                                     backgroundImage: `url(${e.account.avatar})`
                                 }}
                                 title={e.name}
                                 onClick={() => {setAccountChat(e.id)}}
                            >
                                <span className="color1 borderradius">9</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="chatbox-detail">
                {user && <ChatDetail accountId={customerId}/>}
            </div>
        </div>
    )
}
