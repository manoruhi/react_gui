import React from 'react';
import "../App.css";
import LeftLoginContainer from './LeftLoginContainer';
import RightLoginContainer from './RightLoginContainer';


export default function Login() {

    return (
        <div className='body_container'>
            <LeftLoginContainer />
            <RightLoginContainer />
        </div>
    );
}
