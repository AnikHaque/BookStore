import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveBookAction } from '../../redux/ManageBookSlice/actionCreator';
import updateBookThunk from '../../redux/ManageBookSlice/thunks/updateBook';

const EditBookForm = ({setIsEdit}) => {
    const dispatch = useDispatch()
    const { book } = useSelector(state => state)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [defaulti,setDefaulti]=useState({})
  useEffect(() => {

      setDefaulti({
      "name":book?.name,
      "author":book?.author,
      "thumbnail":book?.thumbnail ,
      "price": book?.price,
      "rating":book?.rating ,
      "featured":book?.featured,
      "id": book?.id
    })

  }, [book?.name,]);

    const editSubmit = async (data) => { 
        // setBookid(book.id)
        console.log(data)
        // let bookii = {
        //     "name":bookname,
        //     "author":bookauthor,
        //     "thumbnail":bookthumbnail ,
        //     "price": bookprice,
        //     "rating":book.rating ,
        //     "featured":bookfeatured,
        //     "id": bookid
        // }
        console.log(data);
        await dispatch(updateBookThunk(data, book.id))
        
        // setBookauthor('')
        // setBookfeatured(false)
        // setBookid(null)
        // setBookname('')
        // setBookrating(null)
        // setBookthumbnail('')
        // setBookprice(null)
        setDefaulti({
          "name":"",
          "author":"",
          "thumbnail":"" ,
          "price": null,
          "rating":null ,
          "featured":false,
          "id": null
      })
        reset({
          "name":"",
          "author":"",
          "thumbnail":"" ,
          "price": null,
          "rating":null ,
          "featured":false,
          "id": null
        })
        dispatch(RemoveBookAction())
        setIsEdit(false)
          return
        }
    
  return (
    <div>
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Update Book</h4>
      <form className="book-form" onSubmit={handleSubmit(editSubmit)}>
        <div className="space-y-2">
          <label for="name">Book Name</label>
            <input required className="text-input" type="text" id="input-Bookname" name="name" 
              onChange={e => setBookname(e?.target?.value)}
              {...register("name")}
              defaultValue={book?.name}
            />
        </div>

        <div className="space-y-2">
          <label for="category">Author</label>
            <input required className="text-input" type="text" id="input-Bookauthor" name="author"
              {...register("author")}
              defaultValue={book?.author}
            />
        </div>

        <div className="space-y-2">
          <label for="image">Image Url</label>
            <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail"
               {...register("thumbnail")}
              defaultValue={book?.thumbnail} />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label for="price">Price</label>
              <input required className="text-input" type="number" id="input-Bookprice" name="price"
               {...register("price")}
                defaultValue={book?.price} />
          </div>

          <div className="space-y-2">
            <label for="quantity">Rating</label>
              <input required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" 
                {...register("rating")}
                defaultValue={book?.rating} />
          </div>
        </div>

        <div className="flex items-center bg-white font-white">
            <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4 bg-white font-white"
              {...register("featured")}
            defaultChecked={book?.featured}
            />
          <label for="featured" className="ml-2 text-sm font-black"> This is a featured book </label>
        </div>
          <button type="submit" className="submit" id="submit">Edit Book</button>
      </form>
    </div>
  </div>
  )
}

export default EditBookForm