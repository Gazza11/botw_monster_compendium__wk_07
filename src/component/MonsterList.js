import ListItem from "./ListItem";

const MonsterList = ({monsters}) => {

    const monsterItems = monsters.map((monster, index) => {
        return <ListItem monster={monster} key={index} />
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