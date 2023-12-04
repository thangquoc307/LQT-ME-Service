import "./managePage.css"
import BuildingMap from "../map/BuildingMap";
import Building from "../map/Building";
export default function ManagerPage() {
    return (
        <div className="offset-header managePage">
            <div className="managePage-button">

            </div>
            <div className="managePage-map">
                <Building/>
            </div>
            <div className="managePage-option">

            </div>

        </div>
    )
}