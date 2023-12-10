import React from "react";
import "./AboutProject.css";
import mexc from "./mexc-logo.png";
function AboutProject({
    contractaddres,
    tokencontract,
    exchange,
    exchangeLink,
}) {
    return (
        <div className="project">
            <h3>About this project</h3>
            <div className="list_box">
                <ul className="project_list">
                    <li className="project_item">
                        <button type="button" className="button_project">
                            <a href={contractaddres} className="link">
                                Contrac address link
                            </a>
                        </button>
                    </li>
                    <li className="project_item">
                        Token contract
                        <p className="project_text">{tokencontract}</p>
                        <button
                            className="btn_copy"
                            type="button"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    "0x05800c8635c53dce61358bdf6c55eec7ace072ad"
                                );
                            }}
                        >
                            Copy
                        </button>
                    </li>
                </ul>
                {exchange === "mexc" && (
                    <ul className="project_list">
                        <p className="text">Exchange</p>
                        <li className="project_item">
                            <a href={exchangeLink}>
                                <img className="mexc_image" src={mexc} alt="" />
                            </a>
                            {/* Exchange link:<br></br>
                        <a href=""></a> */}
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default AboutProject;
