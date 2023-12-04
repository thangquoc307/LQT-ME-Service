import "./mainpage.css"
import Calendar from "../calendar/Calendar";
import CoverPicture from "../coverpicture/CoverPicture";
export default function Mainpage() {
    const hotLine = () => {
        const phoneNumber = '0123456789';
        window.location.href = `tel:${phoneNumber}`;
    }
    const email = () => {
        const emailAddress = 'lequocthang@gmail.com';
        window.open(`mailto:${emailAddress}`, '_blank');
    }
    const fanpage = () => {
        const link = 'https://www.facebook.com/ssaphie/';
        window.open(link, '_blank');
    }


    return (
        <div className="offset-header">
            <div className="slogan color3 borderradius boxshadow-inset">
                <div className="slogan-content">
                    <span>-- CHÀO MỪNG ĐẾN VỚI </span>
                    <div className="slogan-logo"/>
                    <span>LQT-SERVICE -- </span>
                </div>
            </div>
            <div className="contact">
                <div className="contact-cover">
                    <CoverPicture/>
                </div>
                <div className="contact-button">
                    <div className="contact-box cursorPoint" style={{zIndex: 1}}>
                        <div className="color3 contact-box-front hotline"
                             onClick={hotLine}>
                            <p>Hot-Line</p>
                        </div>
                        <div className="color4 contact-box-root"/>
                        <div className="color4 contact-box-side"/>
                    </div>
                    <div className="contact-box cursorPoint" style={{zIndex: 2}}>
                        <div className="color3 contact-box-front email"
                             onClick={email}>
                            <p>Email</p>
                        </div>
                        <div className="color4 contact-box-root"/>
                        <div className="color4 contact-box-side"/>
                    </div>
                    <div className="contact-box cursorPoint" style={{zIndex: 3}}>
                        <div className="color3 contact-box-front facebook"
                             onClick={fanpage}>
                            <p>Fan-Page</p>
                        </div>
                        <div className="color4 contact-box-root"/>
                        <div className="color4 contact-box-side"/>
                    </div>
                </div>
                <div className="contact-calendar">
                    <div className="color3 contact-calendar-table borderradius boxshadow-inset">
                        <Calendar/>
                    </div>
                </div>
            </div>
            <div className="mainpage-line"/>
            <div className="footer">
                <div className="footer-ìnfo color3 borderradius boxshadow-inset">
                    <div className="footer-info-avata"/>
                    <div className="footer-ìnfo-quote">
                        "Innovation is not about saying 'yes' to everything.<br/>
                        It's about saying 'no' to all but the most crucial features."
                        <p>--Steve Jobs--</p>
                    </div>
                </div>
                <div className="contact-img color4 borderradius boxshadow-outset">
                    <iframe className="borderradius contact-map"
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d239.62087977584915!2d108.20280161025205!3d16.068910376184224!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1701496065310!5m2!1svi!2s"
                            referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="contact-img-text">Vị trí của chúng tôi</div>
                </div>
            </div>
        </div>
    )

}