import { React, Component } from "react";
import "./App.css";
/////// JSON FILES ///////////
import collectionss from "./Components/collectionnew.json";
import { nanoid } from "nanoid";
import ColectItem from "./Components/ColectItem/ColectItem";
import ColectModalForm from "./Components/ColectModalForm/ColectModalForm.jsx";
import Logo from "./Components/Logo/Logo.jsx";
import SocialLinks from "./Components/AddListingModal/SocialLinks/SocialLinks.jsx";
export default class App extends Component {
    state = {
        colect: collectionss,
        isShowNewForm: false,
    };
    componentDidMount() {
        console.log("Component mounted");
        const items = localStorage.getItem("cryptoitem");
        const parsedItems = JSON.parse(items);
        console.log(parsedItems);
        if (parsedItems) {
            this.setState({
                colect: parsedItems,
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update");
        if (this.state.colect !== prevState.colect) {
            console.log("Изменился массив данных");
        }

        localStorage.setItem("cryptoitem", JSON.stringify(this.state.colect));
        console.log(prevState.colect);
        console.log(this.state.colect);
        // this.setState({});
    }
    /////////////need/////////
    addNewListing = (newListings) => {
        const listingObj = {
            ...newListings,
            id: nanoid(),
        };
        this.setState((prev) => ({
            colect: [...prev.colect, listingObj],
        }));
    };

    ///////////need/////
    deleteCollection = (id) => {
        this.setState((prev) => ({
            colect: prev.colect.filter((el) => el.id !== id),
        }));
    };

    ////////need////////
    handleOpenAndCloseForm = () => {
        this.setState({
            isShowNewForm: !this.state.isShowNewForm,
        });
    };
    render() {
        return (
            <div className="App">
                <Logo closeAndOpen={this.handleOpenAndCloseForm} />
                {this.state.isShowNewForm && (
                    <ColectModalForm
                        close={this.handleOpenAndCloseForm}
                        addNewListing={this.addNewListing}
                    />
                )}
                <ColectItem
                    collection={this.state.colect}
                    del={this.deleteCollection}
                />
                {/* <SocialLinks /> */}
            </div>
        );
    }
}
