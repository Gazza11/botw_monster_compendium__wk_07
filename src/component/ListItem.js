const ListItem = ({monster, onMonsterClick}) => {

    const handleClick = function () {
        onMonsterClick(monster)
    }
    return(
        <li>
            <div>
            <h2 onClick={handleClick} className='capitalise' className='list-item-header'><a>{monster.name}</a></h2>
            <p>Commonly found at: 
                {monster.common_locations ? monster.common_locations.map(location => (
                    <p>{location}</p>
                )): null}</p>
            </div>
            <div>
                <img src={monster.image} alt='Missing Image' loading='lazy'></img>
            </div>
        </li>
    )
}

export default ListItem;