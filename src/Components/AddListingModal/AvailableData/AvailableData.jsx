import "./AvailableData.css";
import images from "./pancakeswap.png";
import blackuniswap from "./uniswap-logo-black.png";
function AvailableData({
    firstlistingdata,
    holders,
    roi,
    volume,
    pancakeswap,
    uniswap,
}) {
    return (
        <div className="available">
            <h3>Available data</h3>
            <p>First listing data: {firstlistingdata}</p>
            <ul className="available_list">
                <li className="social_item">Holders:{holders} </li>
                <li className="social_item">ROI: {roi}</li>
                <li className="social_item">24H Valume:{volume} </li>
            </ul>
            <div className="available_flex">
                <p className="available_text">A place where u can swap:</p>
                {pancakeswap !== "none" && (
                    <a href={pancakeswap}>
                        <img className="pancake" src={images} alt="" />
                    </a>
                )}
                {uniswap !== "none" && (
                    <a href={uniswap}>
                        <img className="pancake" src={blackuniswap} alt="" />
                    </a>
                )}
            </div>
        </div>
    );
}
export default AvailableData;
