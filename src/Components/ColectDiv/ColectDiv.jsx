import { React, Component } from "react";
import AddListingModal from "../AddListingModal/AddListingModal";
import "./ColectDiv.css";

class ColectDiv extends Component {
    state = {
        show: false,
    };
    handleOpenModal = () => {
        this.setState({
            show: !this.state.show,
        });
    };
    render() {
        return (
            <>
                <div className="box" onClick={this.handleOpenModal}>
                    <h2 className="text">{this.props.collection.names}</h2>
                    <hr className="lines"></hr>
                    <h2>{this.props.collection.coin}</h2>
                </div>

                {this.state.show && (
                    <AddListingModal
                        close={this.handleOpenModal}
                        names={this.props.collection.names}
                        coin={this.props.collection.coin}
                        twitter={this.props.collection.twitter}
                        followers={this.props.collection.followers}
                        website={this.props.collection.website}
                        visitors={this.props.collection.visitors}
                        telegram={this.props.collection.telegram}
                        members={this.props.collection.members}
                        discord={this.props.collection.discord}
                        participants={this.props.collection.participants}
                        contract={this.props.collection.contract}
                        tokencontract={this.props.collection.tokencontract}
                        blockchain={this.props.collection.blockchain}
                        exchange={this.props.collection.exchange}
                        exchangeLink={this.props.collection.exchangeLink}
                        datalisting={this.props.collection.datalisting}
                        dexscreener={this.props.collection.dexscreener}
                        dextools={this.props.collection.dextools}
                        aves={this.props.collection.aves}
                        firstlistingdata={
                            this.props.collection.firstlistingdata
                        }
                        holders={this.props.collection.holders}
                        volume={this.props.collection.volume}
                        tokenforone={this.props.collection.tokenforone}
                        tokenforten={this.props.collection.tokenforten}
                        roi={this.props.collection.roi}
                        idElement={this.props.collection.id}
                        del={this.props.del}
                        pancakeswap={this.props.collection.pancakeswap}
                        uniswap={this.props.collection.uniswap}
                        backdrop={this.props.backdrop}
                        escape={this.props.escape}
                    ></AddListingModal>
                )}
            </>
        );
    }
}

export default ColectDiv;
