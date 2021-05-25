import React from 'react';
import BookContextProvider from './components/context/BookContext';
import Heading from './components/Heading';

const App = () => {
    return (
        <BookContextProvider>
            <Heading />
        </BookContextProvider>
    );
};

export default App;