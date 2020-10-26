import React from 'react';
import Card from './Card.jsx';
import Sdata from './Sdata.jsx';


const Netflix = ()=>{
    return (
        <Card 
            key= {Sdata[1].id} //this is unique key that avoid in the devtool that use in arraywhen using map() function
            imgsrc={Sdata[1].imgsrc}
            title={Sdata[1].title}
            cardtitle={Sdata[1].cardtitle}
            link={Sdata[1].link}
        />
    )
}

export default Netflix;