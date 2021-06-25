import {useState, useEffect} from 'react'
import MonsterList from "../component/MonsterList";
import MonsterDetail from "../component/MonsterDetail";

const MonsterContainer = () => {

    const [monsters, setMonsters] = useState([])

    
    return(
        <div>
            <MonsterList />  
            <MonsterDetail />
        </div>
        
    )
}

export default MonsterContainer;