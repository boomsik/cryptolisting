import "./ColectModalForm.css";
import ColectInput from "./ColectInputs/ColectInput";
import { React, Component } from "react";

class ColectModalForm extends Component {
    state = {
        names: "",
        coin: "",
        twitter: "",
        followers: "",
        website: "",
        visitors: "",
        telegram: "",
        members: "",
        discord: "",
        participants: "",
        contract: "",
        tokencontract: "",
        blockchain: "",
        exchange: "",
        exchangeLink: "",
        datalisting: "",
        dexscreener: "",
        dextools: "",
        aves: "",
        firstlistingdata: "",
        holders: "",
        volume: "",
        tokenforone: "",
        tokenforten: "",
        roi: "",
        pancakeswap: "",
        uniswap: "",
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewListing(this.state);
    };

    handleChange = ({ target: { value, name } }) => {
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div class="fixed-overlay">
                <div class="modals">
                    <div class="modals_container">
                        <h2 className="modal_title">ADD NEW LISTING</h2>
                        <div onClick={this.props.close} class="cl-btn-3">
                            <span class="top"></span>
                            <span class="bot"></span>
                        </div>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="megabox">
                                {/* <div className="formboxs">
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="names"
                                            onChange={this.handleChange}
                                            value={this.state.name}
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
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label
                                            className="labelik"
                                            for="female1"
                                        >
                                            Token name
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="blockchain"
                                            onChange={this.handleChange}
                                            value={this.state.name}
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
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Data listing
                                        </label>
                                    </div>
                                </div> */}
                                <ColectInput
                                    change={this.handleChange}
                                    value={this.state.name}
                                />
                                <div className="formboxs">
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="twitter"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Twitter
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="followers"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Followers
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="telegram"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Telegram
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="members"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Telegram members
                                        </label>
                                    </div>
                                </div>

                                <div className="formboxs">
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="website"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Website
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="visitors"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Website visitors
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="discord"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Discord
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="participants"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Discord participants
                                        </label>
                                    </div>
                                </div>
                                <div className="formboxs">
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="contract"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Contract address
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="tokencontract"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Token contract
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="exchange"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Exchange
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="exchangeLink"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Exchange link
                                        </label>
                                    </div>
                                </div>
                                {/* <div className="formboxs"></div> */}
                                <div className="formboxs">
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="firstlistingdata"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            First listing data
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="holders"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Holders
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="volume"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            24H Volue
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="roi"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Has grown since listing on:
                                        </label>
                                    </div>
                                </div>
                                <div className="formboxs">
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="dexscreener"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Dexscreener link
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="dextools"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Dextools link
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="aves"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Ave link
                                        </label>
                                    </div>
                                </div>

                                <div className="formboxs">
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="pancakeswap"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Pancakeswap
                                        </label>
                                    </div>
                                    <div className="forms">
                                        <input
                                            className="inputik"
                                            id="female"
                                            required
                                            name="uniswap"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                        />
                                        <label className="labelik" for="female">
                                            Uniswap
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button className="btna sub" type="submit">
                                ADD LISTING
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColectModalForm;
