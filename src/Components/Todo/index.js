import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Todo = ({ todo, deleteTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <p>{todo.title}</p>
            <p>{todo.description}</p>
            <div className="d-flex justify-content-between">
                <p>{todo.completed.toString()}</p>
                <button
                    type="button"
                    className="btn btn-secondary ms-4"
                    onClick={() => deleteTodo(todo.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default Todo;
