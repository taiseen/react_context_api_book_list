import React, { useContext } from 'react';
import { BookContext } from './context/BookContext';
import Book from './Book';
import BookInput from './BookInput';

function BookContainer() {

    const { books, deleteBook } = useContext(BookContext);

    return books.length ? (
        <section className="book_section">

            {
                books.map(book => <Book book={book} deleteBook={deleteBook} key={book.id} />)
            }

            <BookInput />

        </section>
    ) : (
        <>
            <p className="empty">No book in your reading list</p>
            <BookInput />
        </>
    );
}

export default BookContainer;