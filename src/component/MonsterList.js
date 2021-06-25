import ListItem from "./ListItem";

const MonsterList = ({monsters, onMonsterClick}) => {

    const monsterItems = monsters.map((monster, index) => {
        return <ListItem monster={monster} key={index} onMonsterClick={onMonsterClick}/>
    })

    return(
        <div>
            <ul>
                {monsterItems}
            </ul>
        </div>
    )
}

export default MonsterList;