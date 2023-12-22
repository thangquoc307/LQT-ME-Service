import "./chatbox.css"
import {formatNumberOverNine, reduceLengthName} from "../../service/formatData";
import {ChatDetail} from "./ChatDetail";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getCustomerById, getCustomerList, getEmployeeList} from "../../service/ApiConnection";
import {store} from "../../redux/store";
import {selectChatCustomer} from "../../redux/action";
import {database, onValue, refText, update} from "../../service/FirebaseConfig";
export default function Chatbox() {
    const [user, setUser] = useState();
    const customerId = useSelector(state => state.chatCustomer);
    const [customerList, setCustomerList] = useState();
    const [countMess, setCountMess] = useState({});
    const getUserChat = async () => {
        const data = await getCustomerById(customerId);
        setUser(data);
    }
    const getCustomer = async () => {
        const dataCustomer = await getCustomerList();
        const dataEmployee = await getEmployeeList();
        let data = [...dataCustomer, ...dataEmployee];
        setCustomerList(data);
    }
    const setAccountChat = (id) => {
        store.dispatch(selectChatCustomer(id));
    }
    const getRealTimeCountMess = () => {
        onValue(refText(database, "noti"), data => {
            if (data.val()) {
                setCountMess(data.val());
            }
        })
    }
    const resetCountMess = async (customerId) => {
        setAccountChat(customerId);
        await update(refText(database, `noti/mess-${customerId}`), {
            messAdmin: 0
        })

    }
    useEffect(() => {
        if (customerId != -1) {
            getUserChat();
        }
    },[customerId])
    useEffect(() => {
        getCustomer();
        getRealTimeCountMess();
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
                    {customerList && customerList.map((e, index) => {
                        return(
                            <div key={"chatlist" + index}
                                 className={`chatlist-member ${customerId == e.account.id ?
                                     "chatlist-member-select" :
                                     "chatlist-member-unselect"}`}
                                 style={{
                                     backgroundImage: `url(${e.account.avatar})`
                                 }}
                                 title={e.name}
                                 onClick={() => {resetCountMess(e.account.id)}}
                            >
                                {(countMess[`mess-${e.account.id}`] &&
                                    countMess[`mess-${e.account.id}`].messAdmin != 0 &&
                                    countMess[`mess-${e.account.id}`].messAdmin) &&
                                        <span className="color1 borderradius">
                                            {formatNumberOverNine(countMess[`mess-${e.account.id}`].messAdmin)}
                                        </span>
                                }
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
