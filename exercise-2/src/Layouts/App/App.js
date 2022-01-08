import './App.css';
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from 'react'
function App() {
  const [todos, setTodos] = useState([]);
  const [activeCategory,setActiveCategory] = useState("All");
  
  let filteredTodos = 
   activeCategory==="All" 
   ? todos
   : activeCategory==="Active" ? todos.filter(item => item.complete === false) 
   : todos.filter(item=> item.complete === true)

  // Todo Ekleme
  const addTodo = (todo) =>{
    setTodos([...todos,todo])
  }
  useEffect(()=>{
    console.log(todos);
  },[todos])
  
  const CompletedTodos = todos.filter(item => item.complete === true);
  
  // Todo id sine göre ilgili kaydı siler.
  const removeTodo=(id)=>{
    const filtered = todos.filter(item=>item.id !== id)
    setTodos(filtered);
  }
  // Todo id sine göre ilgili kaydın tamamlanma durumunu günceller. 
  const updateCompleteTodo=(id)=>{
    const index = todos.findIndex(item=>item.id===id);
    const todo = todos.find(item=>item.id===id);
    todo.complete = !todo.complete
    const newTodos = [...todos];
    newTodos[index] = todo;
    setTodos(newTodos);
  }

   // Tamamlanmış todo ları siler. 
  const clearCompletedTodo=()=>{
    // Tamamlanmayan verileri döner.Tamamlananlar silinmiş olur.
    const filtered = todos.filter(item=>item.complete === false)
    setTodos(filtered);
  }
  return (
    <>
      <section className="todoapp">
        <Header addTodo={addTodo}/>
        {
          todos.length>0 &&
          <>
            <Main filteredTodos={filteredTodos} removeTodo={removeTodo} updateCompleteTodo={updateCompleteTodo}/> 
            <Footer CompletedTodos={CompletedTodos} clearCompletedTodo={clearCompletedTodo} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
          </>
        }

      </section>
      <footer className="info">
        <span>Created By Osman Akdağ</span>
      </footer>
    </>

  );
}

export default App;
