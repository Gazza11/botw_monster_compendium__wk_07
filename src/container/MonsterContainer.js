import {useState, useEffect} from 'react'
import MonsterList from "../component/MonsterList";
import MonsterDetail from "../component/MonsterDetail";
import Header from '../component/Header';

const MonsterContainer = () => {

    const [monsters, setMonsters] = useState([])
    const [selectedMonster, setSelectedMosnter] = useState({})

    useEffect(() => {
        getMonsters()
    }, [])

    const getMonsters = function () {
        fetch('https://botw-compendium.herokuapp.com/api/v1')
        .then(result => result.json())
        .then(monsters => setMonsters(monsters.data.monsters))
    }

    const onMonsterClick = function (monster){
        setSelectedMosnter(monster)
    }

    return(
        <div className='main-container'>
            <div>
            <Header />
            <MonsterList monsters={monsters} onMonsterClick={onMonsterClick}/>
            </div>
            <div>
            <MonsterDetail selectedMonster={selectedMonster}/>
            </div>
        </div>
        
    )
}

export default MonsterContainer;