import { useEffect, useState } from "react";

const RenderChar = (list) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        list.data.forEach(element => {
            fetch(element)
                .then((res) => res.json())
                .then((data) => setCharacters((prevstate)=> [...prevstate, data]))
        });
    }, []);

    characters.sort(function(a, b){
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });

    return (
        <>
            <h1>Done! Here are the characters:</h1>
            <ul>
                {characters.map((element, index) => <li key={index}>{element.name}</li>)}
            </ul>
        </>
    );
};

export default RenderChar;