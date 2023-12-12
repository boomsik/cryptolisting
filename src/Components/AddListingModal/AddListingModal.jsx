import "./AddListingModal.css";
import "./AddListingModal.scss";

import SocialLinks from "./SocialLinks/SocialLinks";
import AboutProject from "./AboutProject/AboutProject";
import TrackingApps from "./TrackingApps/TrackingApps";
import AvailableData from "./AvailableData/AvailableData";
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
    pancakeswap,
    uniswap,
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
                    <AboutProject
                        contractaddres={contract}
                        tokencontract={tokencontract}
                        exchange={exchange}
                        exchangeLink={exchangeLink}
                    />
                    <AvailableData
                        firstlistingdata={firstlistingdata}
                        holders={holders}
                        roi={roi}
                        volume={volume}
                        pancakeswap={pancakeswap}
                        uniswap={uniswap}
                    />
                    {/* <div className="social">
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
                    </div> */}
                    {/* <div className="social">
                        <h3>Price before listing</h3>
                        <ul className="social_list">
                            <li className="social_item">
                                Token for 1 USDT: {tokenforone}
                            </li>
                            <li className="social_item">
                                Token for 10 USDT: {tokenforten}
                            </li>
                        </ul>
                    </div> */}
                    <TrackingApps
                        dexscreener={dexscreener}
                        dextools={dextools}
                        aves={aves}
                    />
                    <button type="button" onClick={() => del(idElement)}>
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddListingModal;
