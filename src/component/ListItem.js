const ListItem = ({monster}) => {
    return(
        <li>
            <div>
            <h2 className='capitalise'>{monster.name}</h2>
            <p>Commonly found at: {monster.common_locations}</p>
            </div>
            <div>
                <img src={monster.image}></img>
            </div>
        </li>
    )
}

export default ListItem;