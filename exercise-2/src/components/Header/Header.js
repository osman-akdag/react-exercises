import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const initialValues = {content:"",complete:false}
export default function Header({addTodo}) {
    const [todo,setTodo] = useState(initialValues)
    
    const onChangeTodoInput = (e) =>{
        setTodo({...todo,[e.target.name]:e.target.value})
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if (todo.content === "") {
            alert("Todo Gir")
            return false
        }
        addTodo({...todo,id:uuidv4()});
        setTodo(initialValues);
    }
    return (
        <header className="header">
            <h1>Todos</h1>
            <form onSubmit={onSubmit}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    name='content'
                    value={todo.content}
                    onChange={onChangeTodoInput}
                    autoFocus
                />
            </form>
        </header>
    )
}
