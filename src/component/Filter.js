import {useState, useEffect} from "react"

const Filter = ({filter, filterLoc}) => {

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


    return(
        <div className='form-container'>
            <select onChange={changeSearchTerm}>
                <option value=''>Select a region to filter by</option>
                <option value='Hyrule Field'>Hyrule Field</option>
                <option value='East Necula'>East Necula</option>
                <option value='Divine Beast'>Divine Beasts</option>
            </select>
            <form onSubmit={handleSubmit}>
                <input type='text' name='search' placeholder='Filter by Name' onChange={changeSearchTerm}></input>
            </form>
            </div>
    )
}

export default Filter