import React from 'react';
import Card from './Card.jsx';
import Sdata from './Sdata.jsx';


const Amazon = ()=>{
    return (
        <Card 
            key= {Sdata[3].id} //this is unique key that avoid in the devtool that use in arraywhen using map() function
            imgsrc={Sdata[3].imgsrc}
            title={Sdata[3].title}
            cardtitle={Sdata[3].cardtitle}
            link={Sdata[3].link}
        />
    )
}

export default Amazon;