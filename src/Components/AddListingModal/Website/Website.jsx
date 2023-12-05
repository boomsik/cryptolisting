import image from "./web.png";
import man from "./man.svg";
import "./Website.css";
function Website() {
    return (
        <div className="boxex">
            <img
                className="image_telegram"
                src={image}
                alt="telegram"
                width={1000}
            />
            <div className="followers">
                <img className="image_man" src={man} alt="" />
                <p className="followers_text">170000</p>

                {/* <hr className="line_left"></hr>
        <hr className="line-right"></hr> */}
            </div>
            <hr className="line"></hr>
            <hr className="line_right"></hr>
            <hr className="line_left"></hr>
        </div>
    );
}

export default Website;
