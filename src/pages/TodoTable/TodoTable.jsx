import { useState } from "react"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

export const TodoTable=()=>{
    const [todos , setTodos]=useState([])

    const fetched = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;

        }
        fetched().then((data)=>{                
            setTodos(data)
        }).catch(error=> console.error(error));
        
    return (
        <>
        <Header title={"Todo table"}/>
        <table>
                <tr> 
                    <th>id</th>
                    <th>userId</th>
                    <th> title </th>
                    <th> body</th>
                </tr>
                    {todos.map((todo,index)=>(
                        <tr key={index}>
                            <td>{todo.id}</td>  
                            <td>{todo.userId}</td> 
                             <td>{todo.title}</td>
                             <td>{todo.body}</td>
                        </tr>
                    ))}
            </table>
        <Footer/>
        </>
    
    )
    
    }