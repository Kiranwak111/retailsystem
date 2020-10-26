import React from "react";

const SlotM = (props) => {

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    //Or we can writeing  above code Object Destructuring in below

    let {x, y, z} = props;

    if (x === y && x === z) {
        return (
            <>
                <div className="slot-inner">
                    <p>{x} {y} {z}</p>
                    <hr></hr>
                    <p> This Is matching</p>
                </div>
            </>
        )

    } else {
        return (
            <>
                <div className="slot-inner">
                    <p>{x} {y} {z}</p>
                    <hr></hr>
                    <p> This Is  not matching</p>
                </div>
            </>
        )

    }

};

export default SlotM;