import "./SocialComponent.css";

function SocialComponent({ image, man }) {
    return (
        <div className="boxex">
            <img className="image" src={image} alt="" />
            <div className="followers tooltips">
                <img className="man" src={man} alt="man" />
                <p className="followers_text">170000</p>
                <span className="tooltiptexts">Followers</span>
            </div>
            <hr className="line"></hr>
            <hr className="line_right"></hr>
            <hr className="line_left"></hr>
        </div>
    );
}

export default SocialComponent;
