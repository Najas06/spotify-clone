import React from 'react'
import { CiTwitter } from 'react-icons/ci'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Main = () => {
    return (
        <>
            <div className='  w-full bg-neutral-900 p-3 rounded-lg'>
                <div className='w-full bg-neutral-700 flex justify-end gap-3 rounded p-2 sticky top-0'>
                    <button className='text-xl font-semibold text-neutral-400 hover:text-white'>Sign Up</button>
                    <button className='bg-white font-semibold text-xl text-neutral-700 px-3 py-1 rounded-lg hover:text-neutral-950'>Log In</button>
                </div>
                <div className='py-8 px-1'>
                    <h1 className='text-3xl font-bold'>Popular artist</h1>
                    <div className='grid grid-cols-3 gap-2 mt-5' >
                        <div className='flex flex-col items-center gap-3 mt-5 hover:bg-neutral-600 p-3 rounded-lg transition duration-300'>
                            <img src="https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b" alt="" className='w-2/3 rounded-full object-contain' />
                            <p className='text-xl font-semibold'>Eminem</p>
                        </div>
                        <div className='flex flex-col items-center gap-3 mt-5 hover:bg-neutral-600 p-3 rounded-lg transition duration-300'>
                            <img src="https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b" alt="" className='w-2/3 rounded-full object-contain' />
                            <p className='text-xl font-semibold'>Eminem</p>
                        </div>
                        <div className='flex flex-col items-center gap-3 mt-5 hover:bg-neutral-600 p-3 rounded-lg transition duration-300'>
                            <img src="https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b" alt="" className='w-2/3 rounded-full object-contain' />
                            <p className='text-xl font-semibold'>Eminem</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>Popular albums</h1>
                        <div className='grid grid-cols-4 gap-2 mt-5'>
                            <div className='bg-red-900 rounded-lg p-5'>
                                <img src="https://cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1900x1900-000000-80-0-0.jpg" alt="" className='w-full rounded-lg' />
                                <h1 className='text-xl font-semibold'>Eminem</h1>
                                <p className='text-sm'>10 songs</p>
                            </div>
                            <div className='bg-green-900 rounded-lg p-5'>
                                <img src="https://i.kfs.io/playlist/global/58530050v58/cropresize/600x600.jpg" alt="" className='w-full rounded-lg' />
                                <h1 className='text-xl font-semibold'>Eminem</h1>
                                <p className='text-sm'>10 songs</p>
                            </div>
                            <div className='bg-amber-950 rounded-lg p-5'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRMlwBKny1ygq14Xlj1HK9VVgbp7pxqT3sNi7uR_j8WxrSsT37dfCQZbRqbDJOjLv47A&usqp=CAU" alt="" className='w-full rounded-lg' />
                                <h1 className='text-xl font-semibold'>Eminem</h1>
                                <p className='text-sm'>10 songs</p>
                            </div>
                            <div className='bg-blue-950 rounded-lg p-5'>
                                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLuLFoxpi0WcDDENym0R70qwV8zLGuej8h9TgluVrk0riCxqhw9Fd7yCyuB4IQXXlHygoyuQqaibd0VS1l8MSiy0dXHt1m3g6KTOA0wnDgtItmKOIm8PeWVeo6PfpU06XDzbhL5FRohO4/s1600/Eminem+Live.jpg" alt="" className='w-full rounded-lg' />
                                <h1 className='text-xl font-semibold'>Eminem</h1>
                                <p className='text-sm'>10 songs</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-6'>
                        <h1 className='text-3xl font-bold'>Made for you</h1>
                        <div className='grid grid-cols-4 gap-2 mt-5'>
                            <div className='bg-yellow-900 rounded-lg p-5'>
                                <img src="https://images.genius.com/f491f38d594c861310cb4faac94b4573.500x500x1.jpg" alt=""  className='w-full rounded-lg'/>
                                <h1 className='text-xl font-semibold'>Dabzee</h1>
                                <p className='text-sm'>Vettapam</p>
                            </div>
                            <div className='bg-neutral-500 rounded-lg p-5'>
                                <img src="https://i.scdn.co/image/ab67616100005174b44f3f8cc95569d7d67813e9" alt=""  className='w-full rounded-lg'/>
                                <h1 className='text-xl font-semibold'>Vedan</h1>
                                <p className='text-sm'>Niram</p>
                            </div>
                            <div className='bg-green-900 rounded-lg p-5'>
                                <img src="https://i.scdn.co/image/ab6761610000e5ebbb9ae6fce2f80583a974b4bf" alt=""  className='w-full rounded-lg'/>
                                <h1 className='text-xl font-semibold'>Baby Jean</h1>
                                <p className='text-sm'>Kaayi</p>
                            </div>
                            <div className='bg-red-900 rounded-lg p-5'>
                                <img src="https://i.scdn.co/image/ab67616d0000b273fb17d3ac2c236e9642e22005" alt=""  className='w-full rounded-lg'/>
                                <h1 className='text-xl font-semibold'>FEJO</h1>
                                <p className='text-sm'>Padayali</p>
                            </div>
                        </div>
                    </div>
                    <div className=' gap-3 grid grid-cols-5'>
                        <ul className='flex gap-3 flex-col'>
                            <li className='font-semibold'>© 2024 Spotify AB</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Legal</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>About</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Privacy</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Cookie preferences</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Ad Choices</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Help</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>More</li>
                        </ul>
                        <ul className='flex gap-3 flex-col'>
                            <li className='font-semibold'>Community</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>For Artist</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Developer</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Adversting</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Investors</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Vendors</li>
                        </ul>
                        <ul className='flex gap-3 flex-col'>
                            <li className='font-semibold'>Useful links</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Support</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Free Mobile</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>App</li>
                        </ul>
                        <ul className='flex gap-3 flex-col'>
                            <li className='font-semibold'>Spotify Plans</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Premium <br />Individual</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Premium Duo</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Premium Family</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Premium Student</li>
                            <li className='text-neutral-400 font-light cursor-pointer'>Spotify Free</li>
                        </ul>
                        <ul className='flex gap-3'>
                            <li className='font-semibold'><FaInstagram className='rounded-full text-3xl' /></li>
                            <li className='font-semibold'><CiTwitter className='rounded-full text-3xl' /></li>
                            <li className='font-semibold'><FaFacebook className='rounded-full text-3xl' /></li>

                        </ul>
                    </div>
                    <div className='border-b my-5'></div>
                    <div>
                        <p className='text-neutral-400 font-light'>© 2024 Spotify AB</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main