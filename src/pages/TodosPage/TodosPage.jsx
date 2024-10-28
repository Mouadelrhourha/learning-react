import "./TodosPage.css";
import {useEffect, useState} from "react";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
export const TodosPage = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect( () => {
        const fetchTodos = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();
            return data;
        }
        fetchTodos().then((data) => {
            setIsLoading(false);
            setTodos(data);
        }).catch(error => console.error(error));

    }, []);

    return (
        <div>
            <Header title={"Todos Page"} />
            {
                isLoading && <p>Loading...</p>
            }
            {
                !isLoading && (
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index}>
                                {todo.id} - {todo.userId} - {todo.title} - {todo.completed.toString()}
                            </li>
                        ))
                        }
                    </ul>
                )
            }

            <Footer/>
        </div>
    )
}
