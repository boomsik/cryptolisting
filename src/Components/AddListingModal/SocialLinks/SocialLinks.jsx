import SocialComponent from "./SocialComponent/SocialComponent";
import imageTelegram from "./telegrammm.png";
import imageTwitter from "./twitter.png";
import imageWeb from "./web.png";
import imageDiscord from "./discord.png";
import man from "./man.svg";
import "./SocialLinks.css";
function SocialLinks({
    twitter,
    followers,
    website,
    visitors,
    telegram,
    members,
    discord,
    participants,
}) {
    return (
        <div className="social">
            <h3 className="social_title">Social links</h3>
            <ul className="social_list">
                {twitter !== "none" && (
                    <li className="social_item">
                        <SocialComponent
                            image={imageTwitter}
                            man={man}
                            sociallink={twitter}
                            followers={followers}
                            help={"followers"}
                        />
                    </li>
                )}
                {website !== "none" && (
                    <li className="social_item">
                        <SocialComponent
                            image={imageTelegram}
                            man={man}
                            sociallink={website}
                            followers={visitors}
                            help={"members"}
                        />
                    </li>
                )}
                {telegram !== "none" && (
                    <li className="social_item">
                        <SocialComponent
                            image={imageWeb}
                            man={man}
                            sociallink={telegram}
                            followers={members}
                            help={"visitors"}
                        />
                    </li>
                )}
                {discord !== "none" && (
                    <li className="social_item">
                        <SocialComponent
                            image={imageDiscord}
                            man={man}
                            sociallink={discord}
                            followers={participants}
                            help={"participants"}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default SocialLinks;
