import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import Renderer from "./Renderer";



const MovieFrame = () => {

    const url = `https://swapi.py4e.com/api/films/`;

    let movies = useFetch(url);
    movies = movies.results;

    return (
        <>
            <h1>This is Data from <abbr title="Star Wars API">SWAPI</abbr></h1>
            {movies ? <Renderer data={movies} /> : <Loading />}
        </>
    );
};

export default MovieFrame;