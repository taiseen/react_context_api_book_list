import React, { useContext, useState } from 'react';
import { BookContext } from './context/BookContext';

function BookInput() {

    const { addBook } = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();

        addBook(title, author, `${month} ${year}`);

        console.log(title, author, `${month} ${year}`);

        // for clearing all fields
        setTitle('');
        setAuthor('');
        setMonth('');
        setYear('');
    }


    return (
        <section className="book_input_area">
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Book Name"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <input
                    type="text"
                    placeholder="Author Name"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} />


                <div>
                    <section className="time_line">
                        <select required value={month} onChange={(e) => setMonth(e.target.value)} >
                            <option value="January" selected>January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="Jun">Jun</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>

                        <select required value={year} onChange={(e) => setYear(e.target.value)}>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020" selected>2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                    </section>
                    <input type="submit" value="Add Book" />
                </div>
            </form>
        </section>
    );
}

export default BookInput;