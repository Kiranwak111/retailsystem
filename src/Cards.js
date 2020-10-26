import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Cards = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx auto">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={props.imgsrc} className="card-img-top" alt="..." style={{ width: "18rem", height: "18rem" }}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <Button>
                        <NavLink to="#" className=" btn-buy-now"> Buy Now</NavLink>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;