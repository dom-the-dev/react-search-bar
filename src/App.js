import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [characters, setCharacters] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
                setCharacters(data.results)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [query])

    return (
        <div className="App">
            <div className="search">
                <input type="text"
                       placeholder={"Search Character"}
                       className={"input"}
                       onChange={event => setQuery(event.target.value)}
                       value={query}
                />
            </div>
            <div className="results">
                {characters.map(character => (
                    <div>
                        <img src={character.image} alt={character.name}/>
                        {character.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
