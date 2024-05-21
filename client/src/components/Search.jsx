import { useState, useEffect } from 'react'; 
import { getSingleVerse, getVerseRange } from '../utils/API';

const SearchVerses = (props) => {
    const [searchInput, setSearchInput] = useState('');
     const [searchedVerse, setSearchedVerse] = useState({});


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            const response = await getSingleVerse(searchInput);

            if (!response.ok) {
                throw new Error('something went wrong!');
              }

            const verse = await response.json();

            const myVerse = {
                name: verse.reference,
                text: verse.text
            };

            setSearchedVerse(myVerse);
            setSearchInput('');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
        
        </>
    )

}