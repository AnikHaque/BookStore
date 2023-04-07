import { GetBookAction } from "../actionCreator"

const fetchSpecificBook = (id) => {
    return async(dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${id}`)
        const data = await response.json()
        console.log("specific book",data)
        dispatch(GetBookAction(data))
    }
}

export default fetchSpecificBook