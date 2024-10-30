import {useParams} from "react-router-dom";

export const TodoDetails = () => {
    const { id } = useParams();
    return (
        <>
            <h1>Todo Details</h1>
            <p>
                je suis le todo numéro {id}
            </p>
        </>
    )
}
