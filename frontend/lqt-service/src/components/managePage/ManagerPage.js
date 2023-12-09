import "./managePage.css"
import Building from "../map/Building";
import Chatbox from "../chatbox/Chatbox";
import {Schedule} from "../schedule/Schedule";
import RequestManage from "../requestManage/RequestManage";
export default function ManagerPage() {
    return (
        <div className="offset-header managePage">
            <div className="managePage-map">
                <Building/>
            </div>
            <div className="managePage-option borderradius color3 boxshadow-inset">
                <div className="managePage-option-calendar">
                    <Schedule/>
                </div>
                <div className="managePage-option-chat">
                    <Chatbox/>
                </div>
                <div className="managePage-option-request">
                    <RequestManage/>
                </div>
            </div>

        </div>
    )
}