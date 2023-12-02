import "./canlendar.css"
export default function Calendar() {
    let time = new Date();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();

    let startDay = (new Date(year, month, 1)).getDay();
    let numberOfDays = (new Date(year, month + 1, 0)).getDate();

    let dateArray = [];
    if (startDay == 0) {
        dateArray = ["","","","","",""]
    } else {
        for (let i = 0; i < startDay - 1; i++){
            dateArray.push("");
        }
    }
    for(let i = 1; i <= numberOfDays; i++){
        dateArray.push(i);
    }
    console.log(dateArray)

    return (
        <div className="calendar">
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div className="color4">Sa</div>
            <div className="color5">Su</div>
            {
                dateArray.map((e, index)=> {
                    return (
                        <div className={(e != date) ? "calendar-day" : "select-day"}>{e}</div>
                    )
                })
            }
        </div>
    )

}