import "./Logo.css";
function Logo({ closeAndOpen }) {
    return (
        <div className="korobka">
            <p className="mega">NEW LISTING</p>
            <button className="btna" type="button" onClick={closeAndOpen}>
                ADD LISTING
            </button>
        </div>
    );
}

export default Logo;
