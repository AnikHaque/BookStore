import { UpdateBookAction } from "../actionCreator";

const updateBookThunk = (book,id) => {
    return async(dispatch) => {
        const response=await fetch(`http://localhost:9000/books/${id}`,{
            method: 'PUT', // Method itself
            headers: {
             'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            body: JSON.stringify(book) // We send data in JSON format
           }
        )
        const data = await response.json()
        console.log(data)
        dispatch(UpdateBookAction(book,id))
    }

}

export default updateBookThunk;