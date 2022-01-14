import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";
import RenderChar from "./RenderChar";

const RevengeSith = () => {

    const url = `https://swapi.py4e.com/api/films/6/`;

    let characters = useFetch(url);
    characters = characters.characters;

    return (
        <>
            <Link to={"/"}>Return to index</Link>
            <h1>Revenge of the Sith</h1>
            {characters ? <RenderChar data={characters}/> : <Loading/> }
        </>
    );
};

export default RevengeSith;