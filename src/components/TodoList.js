import React, {useContext, useState} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext } from '../contexts/TodoListContext';

/* class TodoList extends React.Component {
    static contextType = ThemeContext;
    render() {
        const {isDarkTheme, darkTheme, lightTheme, changeTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <div style={{background:theme.background, color:theme.text, height:'140px', textAlign:'center'}} > 
                <p className="item">Plan the family trip</p>
                <p className="item">Go for a shopping</p>
                <p className="item">Go for a walk</p>
                <button className="ui button primary" onClick={changeTheme}>change the theme</button>
            </div>
        )
    }
} */

const TodoList = () => {
    const [todo, setTodo] = useState('')
    const {todos, addTodo, removeTodo} = useContext(TodoListContext);
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleFormSubmit= (e) => {
        e.preventDefault();
        addTodo(todo);
    }

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        removeTodo(id);
    }
    return (
            <div style={{background:theme.background, color:theme.text, textAlign:'center'}} > 
            {
                todos.length ? (
                    todos.map((todo) => {
                        return (
                            <p id={todo.id} onClick={handleRemoveTodo} key={todo.id} className="item">{todo.text}</p>
                        )
                    })
                ) : (
                    <div>You have no todos</div> 
                )
            }
                {/* <p className="item">Plan the family trip</p>
                <p className="item">Go for a shopping</p>
                <p className="item">Go for a walk</p> */}
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="todo">Add todo:</label>
                    <input type="text" id='todo' onChange={handleChange}/>
                    <input type="submit" value="add new todo" className="ui button primary"/>
                </form>
                <button className="ui button primary" onClick={changeTheme}>change the theme</button>
            </div>  
    );
}

export default TodoList;