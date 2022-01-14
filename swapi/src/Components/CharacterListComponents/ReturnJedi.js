import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";
import RenderChar from "./RenderChar";

const ReturnJedi = () => {

    const url = `https://swapi.py4e.com/api/films/3/`;

    let characters = useFetch(url);
    characters = characters.characters;

    return (
        <>
            <Link to={"/"}>Return to index</Link>
            <h1>Return of the Jedi</h1>
            {characters ? <RenderChar data={characters}/> : <Loading/> }
        </>
    );
};

export default ReturnJedi;