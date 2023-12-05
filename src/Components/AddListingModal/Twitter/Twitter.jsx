import image from "./twitter.png";
import man from "./man.svg";
import "./Twitter.css";
function Twitter() {
    return (
        <div className="boxex">
            <img className="image" src={image} alt="" />
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

export default Twitter;
