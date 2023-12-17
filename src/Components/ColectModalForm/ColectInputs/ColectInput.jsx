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
        </div>
    );
}

export default ColectInput;
