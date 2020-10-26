// index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

ReactDOM.render( <App />, document.getElementById('root'));

// Card.jsx
import React from 'react';
import Images from "./Images.jsx";

function Card(prop) {
    return (
        <>
            <div className="card">
                <div className="img_body">
                    <Images imgsrc={prop.imgsrc} />
                </div>
                <div className="card_body">
                    <span> {prop.title}</span>
                    <h3> {prop.cardtitle}</h3>
                    <a href={prop.link} className="linkNext" target="_blank">
                        <button> Watch Now</button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Card;

//Sdata.jsx
const Sdata = [
    {
        id : 1,
        imgsrc: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3f98fd84e67c9dee82a0595dc2c634e0b46e083dff86986b1dd160a1f274f15a._UR1920,1080_RI_SX356_FMwebp_.jpg",
        title: "Amazon Prime Video",
        cardtitle: " Terminator 3",
        link: "https://www.primevideo.com/detail/0G9EUG1ID77YV534BO3YELZ0XM/ref=atv_hm_hom_c_8pZiqd_2_1"
    },
    {
        id : 2,
        imgsrc: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3f98fd84e67c9dee82a0595dc2c634e0b46e083dff86986b1dd160a1f274f15a._UR1920,1080_RI_SX356_FMwebp_.jpg",
        title: "Amazon Prime Video",
        cardtitle: " Terminator 3",
        link: "https://www.primevideo.com/detail/0G9EUG1ID77YV534BO3YELZ0XM/ref=atv_hm_hom_c_8pZiqd_2_1"
    },
    {
        id : 3,
        imgsrc: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2cb0774c0e43a470e9e1973ddfdb4948497a80d6b44075f93a8d57781a66c8da._UR1920,1080_RI_SX356_FMwebp_.jpg",
        title: "Amazon Prime Video",
        cardtitle: "K.K",
        link: "https://www.primevideo.com/detail/0HSWPE5ZOL3I942CAWGFEAMC2K/ref=atv_hm_hom_c_8pZiqd_2_3"
    },
    {
        id : 4,
        imgsrc: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/89f512cebace67310ad38609e5dde3e4a07a8ae07d803d64177be6548f04a0e5._UR1920,1080_RI_SX356_FMwebp_.jpg",
        title: "Amazon Prime Video",
        cardtitle: "Joker",
        link: "https://www.primevideo.com/detail/0L00GWZSCV2S1KF3VA6EY6KFRD/ref=atv_hm_hom_c_8pZiqd_2_10"
    },
    {
        id : 5,
        imgsrc: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/121df2169e928a64349d58592c3d2371b6fdd9faac37e766b79fd546a0de81e8._UR1920,1080_RI_SX356_FMwebp_.jpg",
        title: "Netflix Series",
        cardtitle: "Dear Comrade",
        link: "https://www.primevideo.com/detail/0S81977O5S4TBE8JBBUG0A429C/ref=atv_hm_hom_c_HQaJEi_brws_3_3"
    },
];

export default Sdata;

//Netflix1.jsx
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

//Amazon.jsx
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

//App.jsx
import React from 'react';
import Card from './Card.jsx';
import Sdata from './Sdata.jsx';
import Netflix from './Netflix1.jsx';
import Amazon from './Amazon.jsx';


//console.log(Sdata[0].link);

const favSeries = "amazon";

const Fseries = ()=>{

if(favSeries === "netflix"){

    return <Netflix />

}else{

    return <Amazon />

};
};

const App = ()=> {
    return (
        <>
            <h2 className = "heading"> Amazon Prime Video Or Mouvies</h2>
            <Fseries />
        </>
    );
};

export default App;