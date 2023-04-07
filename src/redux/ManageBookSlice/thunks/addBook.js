import axios from "axios"
import { AddBookAction } from "../actionCreator"


const addBook = (bookinfo) => {
    return (dispatch) => {
        axios.post('http://localhost:9000/books',bookinfo)
            .then(function (response) {
              console.log(response.data)
        })
        dispatch(AddBookAction(bookinfo))
          
  }
}

export default addBook