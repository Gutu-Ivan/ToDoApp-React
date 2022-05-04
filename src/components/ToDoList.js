const ToDoList =({todos, setTodos, setEditTodo, editTodo}) => {
    let todosArr = Array.from(todos)

    const  handleDelete = ({id}) => {
        setTodos(todosArr.filter(todo => todo.id !== id))
    }
    const handleEdit = ({id}) => {
        const getTodo = todosArr.find((todo) => todo.id === id)
        setEditTodo(getTodo);
        }

    return (
        <div>
            {todosArr.map( todo =>(
                <li className="todo-list_item" key={todo.id}>
                    <p className="list" onChange={evt => evt.preventDefault()}>{todo.title}</p>
                    <div className="button-edit task-button" onClick={() => handleEdit(todo)}>
                        <i className="fa fa-edit"></i>
                    </div>
                    <div className="button-delete task-button" onClick={() => handleDelete(todo)}>
                        <i className="fa fa-trash"></i>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default ToDoList;
