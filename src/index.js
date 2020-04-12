import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { todos, visibilityFilter } from './reducers';
import { AddTodo } from './components/AddTodo';
import { VisibleTodoList } from './components/VisibleTodoList';
import { Footer } from './components/Footer';

const todoApp = combineReducers({todos, visibilityFilter});

const TodoApp = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp/>
    </Provider>,
    document.getElementById('root')
);
