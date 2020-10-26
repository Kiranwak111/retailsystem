import React, { useState } from 'react';
import SearchResult from './SearchResult';

const Search = () => {

    const [img, setImg] = useState('');

    const inputEvent = (event) => {
        const data = event.target.value

        setImg(data)
    }

    return (
        <>
            <div className='searchBar'>
                <input type='text' value={img} placeholder='search anything' onChange={inputEvent} />
            </div>
            {img === '' ? null : <SearchResult anyName={img} />}
        </>
    );
};

export default Search;