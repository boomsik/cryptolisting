import "./Logo.css";
function Logo({ closeAndOpen }) {
    return (
        <div className="korobka">
            {/* <p>
                Spice up your type with CSS */}
            <p className="mega">NEW LISTING</p>
            {/* &mdash; no JavaScript required &mdash; */}
            {/* </p> */}
            <button className="btna" type="button" onClick={closeAndOpen}>
                ADD LISTING
            </button>
        </div>
    );
}

export default Logo;
