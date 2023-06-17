import React, { useState } from 'react'
import { booksData } from '../assets/data/booksData'

export default function Search({booksData}) {
    const [category,setCategory] = useState('')
    const [filteredBooks,setFilteredBooks] = useState([])

    const handleCategoryInput = (e) => {
        const newCategory = e.target.value;
        setCategory(newCategory)
        const filtered = booksData.filter((book) => book.category.toLowerCase().includes(newCategory.toLowerCase()))
        setFilteredBooks(filtered)
    } 
  return (
    <div>
        <input type='text' placeholder='Enter Book Genre' value={category} onChange={handleCategoryInput}/>
        {
            category !== '' && filteredBooks.length === 0 && (
                <p>We don't have any books in the category.</p>
            )
        }

        {
            filteredBooks.map(book => (
                <div key={book.id}>
                    <img src={book.image} alt={book.title} />
                    <h3>{book.title}</h3>
                    <p>Price: {book.price}</p>
                    <p>Rating: {book.rating}</p>
                    <p>Category: {book.category}</p>
                </div>
            ))
        }
    </div>
  )
}
