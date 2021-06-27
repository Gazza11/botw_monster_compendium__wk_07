import {useState, useEffect} from "react"

const Filter = ({filter, filterLoc, reset}) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchTermLoc, setSearchTermLoc] = useState("")

    const changeSearchTerm = (event) => {
        event.preventDefault()
        setSearchTerm(event.target.value)
    }

    const changeSearchTermLoc = (event) => {
        event.preventDefault()
        setSearchTermLoc(event.target.value)
    }

    useEffect(() => {
        filter(searchTerm)
    }, [searchTerm])


    useEffect(() => {
        filterLoc(searchTermLoc)
    }, [searchTermLoc])


    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleReset = () => {
        reset()
    }

    return(
        <div className='form-container'>
            <div>
                <button onClick={handleReset}>Reset Search</button>
            </div>
            <select onChange={changeSearchTermLoc} id='search-by-loc'>
                <option value=''>Select a region to filter by</option>
                <option value='Hyrule Field'>Hyrule Field</option>
                <option value='West Necluda'>West Necluda</option>
                <option value='East Necluda'>East Necluda</option>
                <option value='Divine Beast'>Divine Beasts</option>
                <option value='Gerudo Highlands'>Gerudo Highlands</option>
                <option value='Eldin Canyon'>Eldin Canyon</option>
                <option value='Deep Akkala'>Deep Akkala</option>
                <option value='Tabantha Frontier'>Tabantha Frontier</option>
            </select>
            <form onSubmit={handleSubmit} id='search-by-text'>
                <input type='text' name='search' placeholder='Filter by Name' onChange={changeSearchTerm}></input>
            </form>
            </div>
    )
}

export default Filter