import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import BookAddForm from './components/bookAddForm/BookAddForm'
import BookCard from './components/BookCard/BookCard'
import EditBookForm from './components/EditBookForm/EditBookForm'
import Navbar from './components/Navbar/Navbar'
import { GetBookAction } from './redux/ManageBookSlice/actionCreator'
import  fetchAllBook  from './redux/ManageBookSlice/thunks/fetchAllBook'
import fetchSpecificBook from './redux/ManageBookSlice/thunks/fetchSpecificBook'

function App() {
  // redux functions
  const dispatch = useDispatch()
  const {books,book,searchbook} = useSelector(state => state)
  // console.log("books after first render use effect ", state)
  const [isEdit, setIsEdit] = useState(false)
  const [allbook,setallbook]=useState(books)
  const [isfeature, setisFeature] = useState(false)
  const handleSearch = (text) => {
    books.filter(elem=>elem.name.include(text))
  }
  const handleEdit = async(id) => {
    console.log('hiiiiii');
    await dispatch(fetchSpecificBook(id))
    setIsEdit(true)
  }
  console.log(isEdit);
  useEffect(() => {
    dispatch(fetchAllBook)
  },[books.length])
// console.log("is feature",books?.filter(book => book.featured!==false))
  return (
    <div className="App">
      <Navbar/>
      <main class="py-12 2xl:px-6">
      <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <div class="order-2 xl:-order-1">
        <div class="flex items-center justify-between mb-12">
          <h4 class="mt-2 text-xl font-bold">Book List</h4>

          <div class="flex items-center space-x-4">
            <button onClick={()=>setisFeature(false)} class="filter-btn active-filter" id="lws-filterAll">All</button>
            <button onClick={()=>setisFeature(true)}  class="filter-btn bg-white" id="lws-filterFeatured">Featured</button>
          </div>
        </div>
        <div class="lws-bookContainer">
              { 
                searchbook!==''?books.filter(book=>book.name.toUpperCase().includes(searchbook.toUpperCase())).map(elem=><BookCard book={elem} key={elem.id} handleEdit={handleEdit} />):
               isfeature===false? books.map(book => <BookCard book={book} key={book.id} handleEdit={handleEdit} />):books?.filter(book => book.featured!==false)?.map(elem=><BookCard book={elem} key={elem.id} handleEdit={handleEdit} />)
          }
        </div>
      </div>
          {
            isEdit===false? <BookAddForm />:<EditBookForm setIsEdit={setIsEdit}/>
       }
    </div>
  </main>
    </div>
  )
}

export default App
