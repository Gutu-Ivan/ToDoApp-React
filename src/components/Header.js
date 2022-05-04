const Header =({todos}) => {
    let todosCount = Array.from(todos).length
    return (
        <div className="header">
            <h1>ToDo-List</h1>
            <p>{todosCount} tasks</p>
        </div>
    )
}

export default Header;
