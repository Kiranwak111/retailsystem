import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom'


const User = () => {

    const {fname, lname} = useParams();
    const location = useLocation();
    const history= useHistory();

    console.log(location);
    console.log(location.pathname)

    console.log(history);

    return (
    <>
    <h1>user {fname} {lname} page </h1>
    <p>my element {location.pathname}</p>
    {/* {location.pathname === '/user/kiran/wakchaure' ? <button onClick = {() => history.push('/contact')}> Click Me </button> : null} */}
    {location.pathname === '/user/kiran/wakchaure' ? <button onClick = {() => history.goBack()}> Click Me </button> : null}
    </>
    )
}

export default User;