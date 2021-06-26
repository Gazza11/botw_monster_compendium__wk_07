import {useState, useEffect} from "react"

const Filter = ({filter}) => {

    const [searchTerm, setSearchTerm] = useState("")

    const changeSearchTerm = (event) => {
        event.preventDefault()
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        filter(searchTerm)
    }, [searchTerm])

    const handleSubmit = (event) => {
        event.preventDefault()
    }


    return(
        <div className='form-container'>
        {/* //     <select>
        //         <option value=''>Select a region to filter by</option>
        //         <option>Hyrule Field</option>
        //         <option>East Necula</option>
        //     </select> */}
            <form onSubmit={handleSubmit}>
                <input type='text' name='search' placeholder='Filter by Name' onChange={changeSearchTerm}></input>
                {/* <input type='submit' value='Submit'></input> */}
            </form>
            </div>
    )
}

export default Filter