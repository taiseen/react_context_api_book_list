// import React, { useContext } from 'react';
// import { BookContext } from './context/BookContext';

function Book({ book, deleteBook }) {

    // const { deleteBook } = useContext(BookContext);
    const { title, author, time, id } = book
    return (
        <section className="book_reading_list" onClick={() => deleteBook(id)}>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <p>{time}</p>
        </section>
    );
}

export default Book;