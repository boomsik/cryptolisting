import "./SocialComponent.css";

function SocialComponent({ image, man, followers, sociallink, help }) {
    return (
        <div className="boxex">
            <a className="image_url" href={sociallink}>
                <img className="image" src={image} alt="" />
            </a>

            <div className="followers tooltips">
                <img className="man" src={man} alt="man" />
                <p className="followers_text">{followers}</p>
                <span className="tooltiptexts">{help}</span>
            </div>
            <hr className="line"></hr>
            <hr className="line_right"></hr>
            <hr className="line_left"></hr>
        </div>
    );
}

export default SocialComponent;
