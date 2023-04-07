import { LoadBookAction } from "../actionCreator";

 const fetchAllBook = async(dispatch) => {
    const response=await fetch('http://localhost:9000/books')
    const data=await response.json()
  dispatch(LoadBookAction(data))
 }

export default fetchAllBook;
