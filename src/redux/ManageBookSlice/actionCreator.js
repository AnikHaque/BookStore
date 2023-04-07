import { ADDBOOK, DELETEBOOK, GETSPECIFICBOOK, LOADALLBOOKS, REMOVESPECIFICBOOK, SEARCHBOOK, UPDATEBOOKINFO } from "./actionType"

export const LoadBookAction = (books) => {
    return {
        type: LOADALLBOOKS,
        payload:books
    }
}
export const AddBookAction = (book) => {
    return {
        type: ADDBOOK,
        payload:book
    }
}
export const DeleteBookAction = (id) => {
    return {
        type: DELETEBOOK,
        payload:id
    }
}
export const UpdateBookAction = (book,id) => {
    return {
        type:UPDATEBOOKINFO,
        payload:{book,id}
    }
}
export const GetBookAction = (book) => {
    return {
        type:GETSPECIFICBOOK,
        payload:book
    }
}
export const RemoveBookAction = () => {
    return {
        type:REMOVESPECIFICBOOK,
    }
}
export const SearchBookAction = (name) => {
    return {
        type: SEARCHBOOK,
        payload:name
    }
}
