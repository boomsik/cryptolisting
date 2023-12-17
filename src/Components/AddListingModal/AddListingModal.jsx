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
    escape,
    backdrop,
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

                    <TrackingApps
                        dexscreener={dexscreener}
                        dextools={dextools}
                        aves={aves}
                    />
                    <button
                        className="delete"
                        type="button"
                        onClick={() => del(idElement)}
                    >
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddListingModal;
