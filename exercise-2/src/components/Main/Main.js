
export default function Main({ filteredTodos, removeTodo, updateCompleteTodo }) {
    return (
        <section className="main">
            <ul className="todo-list">
                {
                    filteredTodos.map((todo, index) => (
                        <li key={index} className={todo.complete ? 'completed' : null}>
                            <div className="view">
                                <input className="toggle" type="checkbox" checked={todo.complete} onChange={() => updateCompleteTodo(todo.id)} />
                                <label>{todo.content}</label>
                                <button className="destroy" onClick={() => removeTodo(todo.id)} />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

{/* <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Learn React</label>
                        <button className="destroy" />
                    </div>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Have a life!</label>
                        <button className="destroy" />
                    </div>
                </li> */}