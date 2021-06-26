import {useState, useEffect} from 'react'
import MonsterList from "../component/MonsterList";
import MonsterDetail from "../component/MonsterDetail";
import Header from '../component/Header';
import Filter from '../component/Filter';

const MonsterContainer = () => {

    const [monsters, setMonsters] = useState([])
    const [selectedMonster, setSelectedMonster] = useState(null)
    const [filteredMonsters, setFilteredMonsters] = useState([])

    useEffect(() => {
        getMonsters()
    }, [])

    const getMonsters = function () {
        fetch('https://botw-compendium.herokuapp.com/api/v1')
        .then(result => result.json())
        .then(monsters => {
            setFilteredMonsters(monsters.data.monsters)
            setMonsters(monsters.data.monsters)
                    })
    }

    const onMonsterClick = function (monster){
        setSelectedMonster(monster)
        if (selectedMonster === monster) {
            setSelectedMonster(null)
        }
    }

    const filter = (searchTerm) => {
        const prepareSearch = searchTerm.toLowerCase()
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.indexOf(prepareSearch) > -1
        })
        setFilteredMonsters(filteredMonsters)
    }

    const filterLoc = (searchTermLoc) => {
        setFilteredMonsters(monsters)
        const prepareSearchLoc = monsters.filter((monster) => {
            return monster.common_locations !== null
        })
        const filteredMonstersLoc = prepareSearchLoc.filter((monster) => {
            return monster.common_locations.indexOf(searchTermLoc) > -1
            })


        setFilteredMonsters(filteredMonstersLoc)
        console.log(filteredMonstersLoc)
    }

    return(
        <div className='like-body'>
            <Header />
            <Filter filter={filter} filterLoc={filterLoc}/>
            <div className='main-container'>
            <MonsterList monsters={filteredMonsters} onMonsterClick={onMonsterClick}/>
            {selectedMonster ? <MonsterDetail selectedMonster={selectedMonster} /> : null}
            </div>
        </div>
        
    )
}

export default MonsterContainer;