import "./AddListingModal.css";
import "./AddListingModal.scss";
import dexs from "./99915600.png";
import tools from "./dext-large.png";
import ave from "./ave.png";
import SocialLinks from "./SocialLinks/SocialLinks";
function AddListingModal({
    close,
    names,
    coin,
    twitter,
    followers,
    website,
    visitors,
    telegram,
    members,
    discord,
    participants,
    contract,
    tokencontract,
    exchange,
    exchangeLink,
    firstlistingdata,
    holders,
    roi,
    volume,
    tokenforone,
    tokenforten,
    dexscreener,
    dextools,
    aves,
    del,
    idElement,
}) {
    return (
        <div class="fixed-overlay">
            <div class="modals">
                <div class="modals_containers">
                    <h2 className="modals_title">
                        {names}/{coin}
                    </h2>
                    <div onClick={close} class="cl-btn-33">
                        <span class="top"></span>
                        <span class="bot"></span>
                    </div>
                    <SocialLinks
                        twitter={twitter}
                        followers={followers}
                        website={website}
                        visitors={visitors}
                        telegram={telegram}
                        members={members}
                        discord={discord}
                        participants={participants}
                    />
                    <div className="social">
                        <h3>About this project</h3>
                        <ul className="social_list">
                            <li className="social_item">
                                Contrac address:
                                <a href={contract}>
                                    <br></br>
                                    {contract}
                                </a>
                            </li>
                            <li className="social_item">
                                Token contract: <br></br>
                                {tokencontract}
                            </li>
                            <li className="social_item">
                                Exchange: {exchange}
                            </li>
                            <li className="social_item">
                                Exchange link:<br></br>
                                <a href={exchangeLink}>{exchangeLink}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="social">
                        <h3>Available data</h3>
                        <ul className="social_list">
                            <li className="social_item">
                                First listing data: {firstlistingdata}
                            </li>
                            <li className="social_item">Holders: {holders}</li>
                            <li className="social_item">ROI: {roi}</li>
                            <li className="social_item">
                                24H Valume: {volume}
                            </li>
                        </ul>
                    </div>
                    <div className="social">
                        <h3>Price before listing</h3>
                        <ul className="social_list">
                            <li className="social_item">
                                Token for 1 USDT: {tokenforone}
                            </li>
                            <li className="social_item">
                                Token for 10 USDT: {tokenforten}
                            </li>
                        </ul>
                    </div>
                    <div className="social">
                        <h3>Tracking Apps</h3>
                        <ul className="social_list">
                            <li className="social_item">
                                <a href={dexscreener}>
                                    <img
                                        className="img"
                                        src={dexs}
                                        alt="dexscreener"
                                    />
                                </a>
                            </li>
                            <li className="social_item">
                                <a href={dextools}>
                                    <img
                                        className="img"
                                        src={tools}
                                        alt="dextools"
                                    />
                                </a>
                            </li>
                            <li className="social_item">
                                <a href={aves}>
                                    <img
                                        className="img"
                                        src={ave}
                                        alt="ave.ai"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddListingModal;
