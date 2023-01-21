import React from 'react'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logo.png'
import { useGoogleLogin } from '@react-oauth/google';
import {FcGoogle} from 'react-icons/fc'

function Login() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: tokenResponse => console.log(tokenResponse)
    })

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
                    <button
                        type="button"
                        className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                        onClick={() => login()}
                    >
                        <FcGoogle className="mr-4" /> Sign in with google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login