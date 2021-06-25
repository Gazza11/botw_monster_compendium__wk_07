const MonsterDetail = ({selectedMonster}) => {
    return(
        <div className='monster-detail-hidden'>
            <h2>Monster Details</h2>
            <h3 className='capitalise'>{selectedMonster.name}</h3>
            <p>{selectedMonster.description}</p>
            <br></br>
            <ul>Commonly Found: 
            {selectedMonster.common_locations ? selectedMonster.common_locations.map(location => (
            <p>{location}</p>
            )): null}</ul>
            <br></br>
            <ul>Can drop: {selectedMonster.drops ? selectedMonster.drops.map(drop => (
                <p>{drop}</p>
            )): null}</ul>
        </div>
    )
}
// {selectedMonster ? <MonsterDetail selectedMonster={selectedMonster} /> : null}
export default MonsterDetail;

// {monster.common_locations ? monster.common_locations.map(location => (
//     <p>{location}</p>
// )): null}</p>