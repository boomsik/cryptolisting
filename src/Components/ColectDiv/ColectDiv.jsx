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
                    <h2 className="text">{this.props.collection.name}</h2>
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
                    ></AddListingModal>
                )}
            </>
        );
    }
}

export default ColectDiv;
