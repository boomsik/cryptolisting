import "./AvailableData.css";
import image from "./pancakeswap-logo.png";
import images from "./pancakeswap.png";
import uniswap from "./uniswap-logo.png";
import blackuniswap from "./uniswap-logo-black.png";
function AvailableData({ firstlistingdata, holders, roi, volume }) {
    return (
        <div className="available">
            <h3>Available data</h3>
            <p>First listing data: {firstlistingdata}</p>
            <ul className="available_list">
                {/* <li className="social_item">First listing data:</li> */}
                <li className="social_item">Holders:{holders} </li>
                <li className="social_item">ROI: {roi}</li>
                <li className="social_item">24H Valume:{volume} </li>
            </ul>
            <div className="available_flex">
                <p className="available_text">A place where u can swap:</p>
                <a href="">
                    <img className="pancake" src={images} alt="" />
                </a>
                <a href="">
                    <img className="pancake" src={blackuniswap} alt="" />
                </a>
            </div>
        </div>
    );
}
export default AvailableData;

// <div className="available">
//     <h3>Available data</h3>
//     <ul className="social_list">
//         <li className="social_item">
//             First listing data: {firstlistingdata}
//         </li>
//         <li className="social_item">Holders: {holders}</li>
//         <li className="social_item">ROI: {roi}</li>
//         <li className="social_item">24H Valume: {volume}</li>
//     </ul>
// </div>;
