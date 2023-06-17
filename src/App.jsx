import { Route, Routes } from 'react-router'
import './App.css'
import { BookList } from './pages/bookList'
import { NavLink } from 'react-router-dom'
import Search from './pages/search'
import { booksData } from './assets/data/booksData'

function App() {
  return (
    <>
      <nav>
        <NavLink to='/'>All Books</NavLink>---
        <NavLink to='/search'>Search</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<BookList/>}/>
        <Route path='/search' element={<Search booksData={booksData}/>}/>
      </Routes>
    </>
  )
}

export default App
