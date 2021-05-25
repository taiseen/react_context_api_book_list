import React, { createContext, useState } from 'react';
import { v1 as uuidV1 } from 'uuid';

export const BookContext = createContext();

function BookContextProvider(props) {

    const allBooks = [
        { title: 'The Power Of Now', author: "Ekar Tolle", time: "January 2020", id: 1 },
        { title: 'The 5AM Club', author: "Robin Shurma", time: "May 2020", id: 2 },
        { title: 'Think Like a Monk', author: "Jay Shati", time: "December 2020", id: 3 },
    ]

    const [books, setBooks] = useState(allBooks);

    const addBook = (title, author, time) => {
        const newBook = [
            ...books,
            { title, author, time, id: uuidV1() }
        ]
        setBooks(newBook);
    }

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    return (
        <BookContext.Provider value={{ books, addBook, deleteBook }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;