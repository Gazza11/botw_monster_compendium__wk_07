import {useState, useEffect} from 'react'
import MonsterList from "../component/MonsterList";
import MonsterDetail from "../component/MonsterDetail";
import Header from '../component/Header';

const MonsterContainer = () => {

    const [monsters, setMonsters] = useState([])
    const [selectedMonster, setSelectedMosnter] = useState(null)

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
        <div className='like-body'>
            <Header />
            <div className='main-container'>
            <MonsterList monsters={monsters} onMonsterClick={onMonsterClick}/>
            {selectedMonster ? <MonsterDetail selectedMonster={selectedMonster} /> : null}
            </div>
        </div>
        
    )
}

export default MonsterContainer;