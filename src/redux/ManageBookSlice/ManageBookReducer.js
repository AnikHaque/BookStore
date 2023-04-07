import { ADDBOOK, DELETEBOOK, GETSPECIFICBOOK, LOADALLBOOKS, REMOVESPECIFICBOOK, SEARCHBOOK, UPDATEBOOKINFO } from "./actionType";
import { initialState } from "./initialState";

export const manageBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADALLBOOKS:
            console.log('i am getting requset')
            return {
                ...state,
                books: [
                    ...action.payload
                ]
            }
        case ADDBOOK:
            return {
                ...state,
                books: [
                    ...state.books,
                    action.payload
                ]
            }
        case DELETEBOOK:
            const remainBook=state.books.filter(book=>book.id !== action.payload)
            return {
                ...state,
                books: [
                    ...remainBook
                ]
            }
        case UPDATEBOOKINFO:
            const restbook = state.books.filter(book => book.id !== action.payload.id)
            return {
                ...state,
                books: [
                    ...restbook,
                    {... action.payload.book,id:action.payload.id }
                ]
            }
        case GETSPECIFICBOOK:
            return {
                ...state,
                book:action.payload
            }
        case REMOVESPECIFICBOOK:
            return {
                ...state,
                book:null
            }
        case SEARCHBOOK:
            // const search=books.filter(book=>book.name.include(action.payload))
            return {
                ...state,
                searchbook:action.payload.toUpperCase()
            }
        default:
            return state;
    }
}