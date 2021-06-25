import {useState, useEffect} from 'react'
import MonsterList from "../component/MonsterList";
import MonsterDetail from "../component/MonsterDetail";
import Header from '../component/Header';

const MonsterContainer = () => {

    const [monsters, setMonsters] = useState([])

    useEffect(() => {
        getMonsters()
    }, [])

    const getMonsters = function () {
        fetch('https://botw-compendium.herokuapp.com/api/v1')
        .then(result => result.json())
        .then(monsters => setMonsters(monsters.data.monsters))
    }

    console.log(monsters)
    return(
        <div>
            <Header />
            <MonsterList monsters={monsters}/>  
            <MonsterDetail />
        </div>
        
    )
}

export default MonsterContainer;