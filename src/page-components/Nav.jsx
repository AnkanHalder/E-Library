"use client"
import React from 'react'
import Image from 'next/image'
import { UserAuth } from '@/context/authContext'
import LoginButton from '@/components/Login/LoginButton'
import Cart from '@/components/Login/Nav/Cart'

const Nav = () => {
    const {user,userDetails} = UserAuth();
    return (
        <div className='nav w-screen bg-black'>
            <div className=' h-14 flex justify-between content-center items-center'>
                <h1 className='m-4 text-white'>E-Learning</h1>
                <div className='nav__icon-container m-4 flex gap-5 items-center'>
                    {(!user || !userDetails)?
                        <LoginButton />
                            :
                        <>
                            <h1 className='text-white'>My Books</h1>
                            <Cart number={userDetails.cart.length}/>
                            <img src={user.photoURL} className='h-10 w-10 rounded-full'/>
                        </>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Nav