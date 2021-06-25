const MonsterDetail = ({selectedMonster}) => {
    return(
        <div className='fixed-ct'>
            <h2>Monster Details</h2>
            <h3 className='capitalise'>{selectedMonster.name}</h3>
            <p>{selectedMonster.description}</p>
            <br></br>
            <h4>Commonly Found: 
            {selectedMonster.common_locations ? selectedMonster.common_locations.map(location => (
            <p>{location}</p>
            )): "Hidden"}</h4>
            <br></br>
            <h4 className='capitalise'>Can drop: {selectedMonster.drops ? selectedMonster.drops.map(drop => (
                <p>{drop}</p>
            )): "Nothing"}</h4>
        </div>
    )
}

export default MonsterDetail;