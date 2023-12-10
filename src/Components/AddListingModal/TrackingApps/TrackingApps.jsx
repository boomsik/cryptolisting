import React from "react";
import dexs from "./99915600.png";
import tools from "./dext-large.png";
import ave from "./ave.png";
function TrackingApps({ dexscreener, dextools, aves }) {
    return (
        <div className="social">
            <h3>Tracking Apps</h3>
            <ul className="social_list">
                <li className="social_item">
                    <a href={dexscreener}>
                        <img className="img" src={dexs} alt="dexscreener" />
                    </a>
                </li>
                <li className="social_item">
                    <a href={dextools}>
                        <img className="img" src={tools} alt="dextools" />
                    </a>
                </li>
                <li className="social_item">
                    <a href={aves}>
                        <img className="img" src={ave} alt="ave.ai" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default TrackingApps;
