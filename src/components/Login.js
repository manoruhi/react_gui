import React from 'react';
import "../App.css";
import LeftLoginContainer from './LeftLoginContainer';
import RightLoginContainer from './RightLoginContainer';
// import { useMediaQuery } from 'react-responsive';

export default function Login() {

    // const isMobileDevice = useMediaQuery({
    //     query: "(min-device-width: 480px)",
    // });

    // { isMobileDevice && <Mobile /> }


    return (
        <>
            <div className="body_container">
                <LeftLoginContainer></LeftLoginContainer>
                <RightLoginContainer></RightLoginContainer>
            </div>
        </>
    )
}
