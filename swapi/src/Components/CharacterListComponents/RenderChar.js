import { useEffect, useState } from "react";

let characterlist = [];

const RenderChar = (list) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        characterlist = [];
        list.data.forEach(element => {
            fetch(element)
            .then((res) => res.json()).then((data) => setCharacters(data));
        });
    }, []);

    let uniqueCharacters = characterlist.filter((element, index)=> {
        return characterlist.indexOf(element) === index;
    })
    
    uniqueCharacters.sort();

    return (
        <>
            <h1>Done! Here are the characters:</h1>
            <ul>
                {uniqueCharacters.map((element, index) => <li key={index}>{element}</li>)}
            </ul>
        </>
    );
};

export default RenderChar;