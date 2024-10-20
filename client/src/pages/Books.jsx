import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"


const Books = () => {
    const [books,setBooks] = useState([])

    // Conectar ao backend
    useEffect(() => {
        const fecthAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data)
                // console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        fecthAllBooks()
    }, [])

    return (
        <div>
            <h1>Livraria</h1>
            <div className="books">
                {books.map((book, index) => (
                    <div className="book" key={book.id || index}>
                        {book.COVER && <img src={book.COVER} alt=""/>}
                        <h2>{book.TITLE}</h2>
                        <p>{book.DESC}</p>
                        <span>{book.PRICE}</span>
                    </div>
                ))}
            </div>
            <button></button>
        </div>
    )
}

export default Books