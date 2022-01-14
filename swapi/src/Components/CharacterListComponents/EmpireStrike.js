import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";
import RenderChar from "./RenderChar";

const EmpireStrike = () => {

    const url = `https://swapi.py4e.com/api/films/2/`;

    let characters = useFetch(url);
    characters = characters.characters;

    return (
        <>
            <Link to={"/"}>Return to index</Link>
            <h1>The Empire Strikes Back</h1>
            {characters ? <RenderChar data={characters}/> : <Loading/> }
        </>
    );
};

export default EmpireStrike;