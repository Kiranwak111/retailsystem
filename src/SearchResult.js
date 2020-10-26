import React from 'react';

const SearchResult = (props) => {
    const img = `https://source.unsplash.com/400x300/?${props.anyName}`
    return (
        <>
            <div className='searchImage'>
                <img src={img} />
            </div>
        </>
    )
}

export default SearchResult;