import React from "react";
import JustOneInput from "./JustOneInput/JustOneInput";
function ColectInput({ change, value }) {
    return (
        <div className="formboxs">
            <JustOneInput
                change={change}
                name="names"
                value={value}
                title={"Project name"}
            />
            <JustOneInput
                change={change}
                value={value}
                title={"Token name"}
                name="coin"
            />
            <JustOneInput
                change={change}
                value={value}
                title={"Blockchain"}
                name="blockchain"
            />
            <JustOneInput
                change={change}
                value={value}
                title={"Data listing"}
                name="datalisting"
            />
            {/* <div className="forms">
                <input
                    className="inputik"
                    id="female"
                    required
                    name="names"
                    onChange={change}
                    value={names}
                />
                <label className="labelik" for="female">
                    Project name
                </label>
            </div>
            <div className="forms">
                <input
                    className="inputik"
                    id="female1"
                    required
                    name="coin"
                    onChange={change}
                    value={names}
                />
                <label className="labelik" for="female1">
                    Token name
                </label>
            </div>
            <div className="forms">
                <input
                    className="inputik"
                    id="female"
                    required
                    name="blockchain"
                    onChange={change}
                    value={names}
                />
                <label className="labelik" for="female">
                    Blockchain
                </label>
            </div>
            <div className="forms">
                <input
                    className="inputik"
                    id="female"
                    required
                    name="datalisting"
                    onChange={change}
                    value={names}
                />
                <label className="labelik" for="female">
                    Data listing
                </label>
            </div> */}
        </div>
    );
}

export default ColectInput;
