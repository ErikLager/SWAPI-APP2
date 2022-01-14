import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";
import RenderChar from "./RenderChar";

const ANewHope = () => {

    const url = `https://swapi.py4e.com/api/films/1/`;

    let characters = useFetch(url);
    characters = characters.characters;

    return (
        <>
            <Link to={"/"}>Return to index</Link>
            <h1>A New Hope</h1>
            {characters ? <RenderChar data={characters}/> : <Loading/> }
        </>
    );
};

export default ANewHope;