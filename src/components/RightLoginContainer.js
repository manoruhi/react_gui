import React, { useState } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';

export default function RightLoginContainer() {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
;
    console.log(password)


    return (

        
        <div className='right_container'>
            <h1>Login</h1>
            <div className='input_container mb-3'>
                <label htmlFor="exampleFormControlInput1" className="form-label">Login ID</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Login ID" />
            </div>
            <div className='input_container'>
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>

                <div className="password-input">
                    <input type={showPassword ? 'text' : 'password'} className="form-control" id="exampleFormControlInput2" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />

                    <i
                        className={`eye-icon ${showPassword ? 'visible' : ''}`}
                        onClick={togglePasswordVisibility}
                    >
                        <AiFillEyeInvisible />
                    </i>
                </div>
            </div>

            <div className='input_container_checkbox input'>
                <div className='check_box_left_container'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label"htmlFor="flexCheckDefault">
                            Remember Me
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label"htmlFor="flexCheckChecked">
                            Agree to <a href='www.youtube.com'>Terms & Conditions</a>
                        </label>
                    </div>
                </div>
                <div className='check_box_right_container'>
                    <a href='/'>Change Password</a>
                </div>
            </div>

            <div className='input_container'>
                <div className='button_container'>
                    <button className="login btn btn-primary" type="button">Login</button>
                </div>
            </div>

            <div className='signup_container'>
                <p className='signup'>Don't have an account?&nbsp;<a href="/">Register Here</a></p>

            </div>
        </div>
    )
}
