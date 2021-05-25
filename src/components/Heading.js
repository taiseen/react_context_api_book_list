import React, { useContext } from 'react';
import BookContainer from './BookContainer';
import { BookContext } from './context/BookContext';


function Heading() {

    const { books } = useContext(BookContext);

    return (
        <main>
            <section className="header">
                <h1>Book Reading List</h1>
                {
                    books.length > 0
                        ? <h3>Currently you have {books.length} books read</h3>
                        : <h3>No book in reading list</h3>
                }
            </section>

            <BookContainer />

        </main>
    );
}

export default Heading;