import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import addBook from '../../redux/ManageBookSlice/thunks/addBook';
import '../../../src/main'

const BookAddForm = () => {
  const dispatch = useDispatch()
  // else {
    const { register, handleSubmit, watch, formState: { errors } ,reset } = useForm();
  // }
  const onSubmit = async data => {
    
    dispatch(addBook(data))
    
    reset()
  }


  return (
    <>
          <div>
       <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
         <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
         <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
           <div className="space-y-2">
             <label for="name">Book Name</label>
               <input required className="text-input" type="text" id="input-Bookname" name="name" 
                {...register("name")}
               />
           </div>
   
           <div className="space-y-2">
             <label for="category">Author</label>
               <input required className="text-input" type="text" id="input-Bookauthor" name="author"  {...register("author")}
               />
           </div>
   
           <div className="space-y-2">
             <label for="image">Image Url</label>
             <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" {...register("thumbnail")}/>
           </div>
   
           <div className="grid grid-cols-2 gap-8 pb-4">
             <div className="space-y-2">
               <label for="price">Price</label>
               <input required className="text-input" type="number" id="input-Bookprice" name="price" {...register("price")} />
             </div>
   
             <div className="space-y-2">
               <label for="quantity">Rating</label>
                 <input required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" {...register("rating")}  />
             </div>
           </div>
   
           <div className="flex items-center bg-white font-white">
               <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4 bg-white font-white"
                 {...register("featured")}
               />
             <label for="featured" className="ml-2 text-sm font-black"> This is a featured book </label>
           </div>
             <button type="submit" className="submit" id="submit">Add Book</button>
         </form>
       </div>
     </div>
    </>
  )
}

export default BookAddForm