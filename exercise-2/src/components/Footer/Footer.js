import React from 'react'

export default function Footer({ setActiveCategory, activeCategory, CompletedTodos,clearCompletedTodo }) {


    return (
        <footer className="footer">
            <span className="todo-count">
                <strong> {CompletedTodos.length} </strong>
                item completed
            </span>
            <ul className="filters">
                <li>
                    <a onClick={(e) => { setActiveCategory("All") }} className={activeCategory === "All" ? 'selected' : null}>All</a>
                </li>
                <li>
                    <a onClick={(e) => { setActiveCategory("Active") }} className={activeCategory === "Active" ? 'selected' : null}>Active</a>
                </li>
                <li>
                    <a onClick={(e) => { setActiveCategory("Completed") }} className={activeCategory === "Completed" ? 'selected' : null}>Completed</a>
                </li>
            </ul>
            {/* Hidden if no completed items are left ↓ */}
            {
                CompletedTodos.length > 0 
                ? <button className="clear-completed" onClick={()=>clearCompletedTodo()}>Clear completed</button>
                : null
            }
            
        </footer>
    )
}
