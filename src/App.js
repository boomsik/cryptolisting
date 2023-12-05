import { React, Component } from "react";
import "./App.css";
/////// JSON FILES ///////////
import data from "./Components/todoo.json";
import collections from "./Components/collection.json";
import collectionss from "./Components/collectionnew.json";
import TodoList from "./Components/TodoList/TodoList.jsx";
import CreateTodoForm from "./Components/Form/CreateTodoForm.jsx";
import { nanoid } from "nanoid";

import ColectItem from "./Components/ColectItem/ColectItem";
import ColectForm from "./Components/ColectForm/ColectForm";
import ColectModalForm from "./Components/ColectModalForm/ColectModalForm.jsx";
import TestForm from "./Components/TestForm/TestFom.jsx";
import Logo from "./Components/Logo/Logo.jsx";
import AddListingModal from "./Components/AddListingModal/AddListingModal.jsx";
export default class App extends Component {
    state = {
        todo: data,
        collection: collections,
        colect: collectionss,
        isShowModal: false,
        isShowForm: false,
        isShowNewForm: false,
    };

    addTodo = (newTodo) => {
        const todoObject = {
            ...newTodo,
            id: nanoid(),
            completed: false,
        };
        this.setState((prev) => ({
            todo: [...prev.todo, todoObject],
        }));
    };

    addListing = (newListing) => {
        const listingObj = {
            ...newListing,
            id: nanoid(),
        };
        this.setState((prev) => ({
            collection: [...prev.collection, listingObj],
        }));
    };

    addNewListing = (newListings) => {
        const listingObj = {
            ...newListings,
            id: nanoid(),
        };
        this.setState((prev) => ({
            colect: [...prev.colect, listingObj],
        }));
    };

    deleteTodo = (id) => {
        this.setState((prev) => ({
            todo: prev.todo.filter((el) => el.id !== id),
        }));
    };

    deleteCollection = (id) => {
        this.setState((prev) => ({
            colect: prev.colect.filter((el) => el.id !== id),
        }));
    };

    handleOpenModal = () => {
        this.setState({
            isShowModal: true,
        });
    };
    handleCloseModal = () => {
        this.setState({
            isShowModal: false,
        });
    };

    updateData = (value) => {
        this.setState({ isShowForm: value });
    };

    handleOpenAndCloseForm = () => {
        this.setState({
            isShowNewForm: !this.state.isShowNewForm,
        });
    };
    render() {
        return (
            <div className="App">
                <Logo closeAndOpen={this.handleOpenAndCloseForm} />
                {/* <CreateTodoForm addTodo={this.addTodo} />
                <TodoList
                    todo={this.state.todo}
                    deleteTodo={this.deleteTodo}
                    close={this.handleCloseModal}
                    isShowModal={this.state.isShowModal}
                    open={this.handleOpenModal}
                /> */}
                {/* <button type="buttom" onClick={this.handleOpenAndCloseModal}>
                    Add listing
                </button>
                {this.state.isShowForm && <TestForm />} */}
                {/* <TestForm /> */}
                {/* <ColectModalForm /> */}
                {this.state.isShowNewForm && (
                    <ColectModalForm
                        close={this.handleOpenAndCloseForm}
                        addNewListing={this.addNewListing}
                    />
                )}
                {/* {this.state.isShowForm && (
                    <ColectForm addListing={this.addListing} />
                )} */}
                {/* <ColectForm addListing={this.addListing} /> */}
                {/* /////// NEW /////// */}
                {/* <ColectItem
                    collection={this.state.collection}
                    del={this.deleteCollection}
                /> */}
                <ColectItem
                    collection={this.state.colect}
                    del={this.deleteCollection}
                />

                {/* <AddListingModal addNewListing /> */}
            </div>
        );
    }
}
