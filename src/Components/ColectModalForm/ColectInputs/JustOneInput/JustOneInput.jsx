import React from "react";

function JustOneInput({ change, value, title, name }) {
    return (
        <div className="forms">
            <input
                className="inputik"
                id="female"
                required
                name={name}
                onChange={change}
                value={value}
            />
            <label className="labelik" for="female">
                {title}
            </label>
        </div>
    );
}

export default JustOneInput;
