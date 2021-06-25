const MonsterDetail = ({selectedMonster}) => {
    return(
        <div>
            <h2>Monster Details</h2>
            <h3 className='capitalise'>{selectedMonster.name}</h3>
            <p>{selectedMonster.description}</p>
            <p>Commonly Found: {selectedMonster.common_locations}</p>
            <p>Can drop: {selectedMonster.drops}</p>
        </div>
    )
}

export default MonsterDetail;