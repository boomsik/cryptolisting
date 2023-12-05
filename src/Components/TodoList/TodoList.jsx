import React from "react";
import "./TodoList.css";
import Todo from "../Todo/index";
// import Modal from "../Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

const TodoList = ({ todo, deleteTodo }) => {
    return (
        <div className="table">
            <ul className="list-group">
                {todo.map((el) => (
                    <Todo key={el.id} todo={el} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
