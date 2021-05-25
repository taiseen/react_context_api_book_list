import React, { useContext } from 'react';
import { BookContext } from './context/BookContext';
import Book from './Book';
import BookInput from './BookInput';

function BookContainer() {

    const { books, deleteBook } = useContext(BookContext);

    return (
        <section className="book_section">
            
            {
                books.map(book => <Book book={book} deleteBook={deleteBook} key={book.id} />)
            }

            <BookInput />
            
        </section>
    );
}

export default BookContainer;