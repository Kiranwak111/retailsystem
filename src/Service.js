import React from 'react';
import Cards from "./Cards"
import SData from "./SData"

const Service = () => {
    return (
        <>
            <div className="mt-2">
                <h1 className="text-center"> Our Services </h1>
                <div className='container-fluid mb-5'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className="row gy-2">
                                {SData.map((val, ind) => {
                                    return <Cards key={ind} imgsrc={val.imgsrc} title={val.title} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;