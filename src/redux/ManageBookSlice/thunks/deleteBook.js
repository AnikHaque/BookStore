import { DeleteBookAction } from "../actionCreator"

const deleteBook = (id) => {
    return (dispatch) => {
        // axios.delete(`http://localhost:9000/books/${id}`)
        fetch(`http://localhost:9000/books/${id}`,{
            method: 'DELETE',
        })
         .then(res => res.json)
        dispatch(DeleteBookAction(id))
    }
}
export default deleteBook