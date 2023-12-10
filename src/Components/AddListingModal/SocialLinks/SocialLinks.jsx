import SocialComponent from "./SocialComponent/SocialComponent";
import imageTelegram from "./telegrammm.png";
import imageTwitter from "./twitter.png";
import imageWeb from "./web.png";
import imageDiscord from "./discord.png";
import man from "./man.svg";
import "./SocialLinks.css";
function SocialLinks() {
    return (
        <div className="social">
            <h3 className="social_title">Social link</h3>
            <ul className="social_list">
                <li className="social_item">
                    <SocialComponent image={imageTwitter} man={man} />
                </li>
                <li className="social_item">
                    <SocialComponent image={imageTelegram} man={man} />
                </li>
                <li className="social_item">
                    <SocialComponent image={imageWeb} man={man} />
                </li>
                <li className="social_item">
                    <SocialComponent image={imageDiscord} man={man} />
                </li>
            </ul>
        </div>
    );
}

export default SocialLinks;
