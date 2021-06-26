import {useState, useEffect} from 'react'
import MonsterList from "../component/MonsterList";
import MonsterDetail from "../component/MonsterDetail";
import Header from '../component/Header';
import Filter from '../component/Filter';

const MonsterContainer = () => {

    const [monsters, setMonsters] = useState([])
    const [selectedMonster, setSelectedMonster] = useState(null)
    const [filteredMonsters, setFilteredMonsters] = useState(null)

    useEffect(() => {
        getMonsters()
    }, [])

    const getMonsters = function () {
        fetch('https://botw-compendium.herokuapp.com/api/v1')
        .then(result => result.json())
        .then(monsters => {
            setMonsters(monsters.data.monsters)
            setFilteredMonsters(monsters.data.monsters)
                    })
    }

    const onMonsterClick = function (monster){
        setSelectedMonster(monster)
        if (selectedMonster === monster) {
            setSelectedMonster(null)
        }
    }

    const filter = (searchTerm) => {
        const prepareSearch = searchTerm
        console.log(prepareSearch)
        const filteredMonsters = monsters.filter((monster) => {
            // console.log('Monster', monster.name)
            return monster.name.indexOf(prepareSearch) > -1
        })
        setFilteredMonsters(filteredMonsters)
        console.log(filteredMonsters)

    }

    return(
        <div className='like-body'>
            <Header />
            <Filter filter={filter}/>
            <div className='main-container'>
            <MonsterList monsters={filteredMonsters} onMonsterClick={onMonsterClick}/>
            {selectedMonster ? <MonsterDetail selectedMonster={selectedMonster} /> : null}
            </div>
        </div>
        
    )
}

export default MonsterContainer;