import { Link } from "react-router-dom";

const Renderer = (movies) => {
    let titles = [];
    let dates = [];
    let print = [];
    
    // Adds all the titles to the titles array
    movies.data.forEach(element => {
        titles.push(element.title);
    });
    
    // Adds all the dates of first release to an array
    movies.data.forEach(element => {
        dates.push(element.release_date);
    });
    
    // Combines the two arrays into a single array for easier rendering
    for (let i = 0; i < titles.length; i++) {
        print.push(titles[i] + " " + dates[i]);
    }
    
    return (
        <>
            {print.map((element, index) => <Link to={`${index}`} key={index}>{element}</Link>)}
        </>
    );
};

export default Renderer;