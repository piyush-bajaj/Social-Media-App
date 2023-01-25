import React from 'react'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logo.png'
import { GoogleLogin } from '@react-oauth/google';

function Login() {
    const loginSuccess = (response) => {
        console.log(response)
    }

    const loginFailed = (response) => {
        console.log(response)
    }

    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video
                    src={shareVideo}
                    type='video/mp4'
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='w-full h-full object-cover'
                />

                <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                    <div className='p-5'>
                        <img src={logo} width="130px" alt='logo.png' />
                    </div>
                </div>

                <div className='shadow-2xl absolute flex flex-col justify-center items-center top-20 right-0 left-0 bottom-0'>
                    <GoogleLogin 
                        onSuccess={loginSuccess}
                        onError={loginFailed}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login