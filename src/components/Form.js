import {v4 as uuidv4} from "uuid";
import {useEffect} from "react";

const Form =({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    const todosArr = Array.from(todos)
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title)
        } else {
            setInput("")
        }
    }, [setInput, editTodo]);
    const updateTodo = (title, id) => {
        const newTodo = todosArr.map((todo) =>
            todo.id === id ? { title, id} : todo
        )
        setTodos(newTodo);
        setEditTodo("");
    }
    const onInputChange = evt => setInput(evt.target.value);
    const onFormSubmit = (evt) => {
      evt.preventDefault();
      if (!editTodo) {
          setTodos([...todos, {id:uuidv4(), title: input}]);
          setInput("");
      } else {
          updateTodo(input, editTodo.id)
      }
    }
    
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter a task" className="task__input" value={input} onChange={onInputChange} required/>
            <input type="submit" className="button__add" value={editTodo ? "Confirm" : "Add"}/>
        </form>
    )
}

export default Form;
