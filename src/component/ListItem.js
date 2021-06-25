const ListItem = ({monster, onMonsterClick}) => {

    const handleClick = function () {
        onMonsterClick(monster)
    }
    return(
        <li>
            <div>
            <h2 onClick={handleClick} className='capitalise'>{monster.name}</h2>
            <p>Commonly found at: {monster.common_locations}</p>
            </div>
            <div>
                <img src={monster.image} alt='Missing Image'></img>
            </div>
        </li>
    )
}

export default ListItem;