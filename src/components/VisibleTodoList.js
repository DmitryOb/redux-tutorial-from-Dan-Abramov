import React from 'react';
import { connect } from "react-redux";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            return null;
    }
};

const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

const Todo = ({onClick, completed, text}) => (
    <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
    </li>
);

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {
            todos.map(
                todo => <Todo key={todo.id}
                              {...todo}
                              onClick={() => onTodoClick(todo.id)}
                />
            )
        }
    </ul>
);
const mapStateToTodoListProps = (state) => {
    return {todos: getVisibleTodos(state.todos, state.visibilityFilter)};
};
const mapDispatchToTodoListProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    };
};

export const VisibleTodoList = connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList);
