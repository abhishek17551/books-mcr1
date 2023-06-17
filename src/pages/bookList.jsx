import { useContext, useState } from "react"
import { booksData } from "../assets/data/booksData"
import '../styles/bookCard.css'

export const BookList = () => {

    const [books, setBooks] = useState(booksData);
    const {id,title,author,price,rating,image,category,status} = books
   
    const handleStatusChange = (bookId, newStatus) => {
        setBooks(prevBooks => {
          return prevBooks.map(book => {
            if (book.id === bookId) {
              return { ...book, status: newStatus };
            }
            return book;
          });
        });
      };


      const renderBookItem = book => {
        return (
          <div key={book.id} className="book-item">
            
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>Price: {book.price}</p>
            <p>Rating: {book.rating}</p>
            <p>Category: {book.category}</p>
            <select value={book.status} onChange={(e) => handleStatusChange(book.id, e.target.value)}>
              <option value="Currently Reading">Currently Reading</option>
              <option value="Want to Read">Want to Read</option>
              <option value="Read">Read</option>
            </select>
          </div>
        );
      };

      const renderBooksByStatus = status => {
        const booksByStatus = books.filter(book => book.status === status);
        if (booksByStatus.length === 0) {
          return <p>No books found for {status} status.</p>;
        }
        return (
          <div className="books-by-status">
            <h2>{status}:</h2>
            {booksByStatus.map(book => renderBookItem(book))}
          </div>
        );
      };

    return (
        <div>
            {renderBooksByStatus('Currently Reading')}
            {renderBooksByStatus('Want to Read')}
            {renderBooksByStatus('Read')}
        </div>
    )
}