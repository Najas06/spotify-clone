import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { LuLibrary } from 'react-icons/lu'
import { MdHomeFilled } from 'react-icons/md'

const Aside = () => {
    return (
        <>
            <div className='flex flex-col gap-4 sticky top-10 mt-5'>
                <div className='bg-neutral-900 p-3 rounded-lg flex flex-col gap-3'>
                    <div className='flex items-center gap-1'>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png" alt="spotify logo" width={30} />
                        <h1 className='text-white'>Spotify</h1>
                    </div>
                    <div className='flex items-center gap-1'>
                        <MdHomeFilled className='text-3xl' />
                        <p>Home</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CiSearch className='text-3xl' />
                        <p>Search</p>
                    </div>
                </div>

                <div className='bg-neutral-900 p-3 rounded-lg flex flex-col gap-3'>
                    <h1 className='flex items-center gap-1'><LuLibrary /> Your Library</h1>
                    <div className='m-3 bg-neutral-700 p-3 rounded-lg flex flex-col gap-3'>
                        <h1>Create your First Playlist</h1>
                        <p>It's easy, we'll help you</p>
                        <button className='bg-white px-2 py-1 rounded-lg text-neutral-950'>
                            Create Playlist
                        </button>
                    </div>
                </div>
                <div className='bg-neutral-900 p-3 rounded-lg flex flex-col gap-3'>
                    <h1 className='flex items-center gap-1'>Let's find some podcasts to follow</h1>
                    <div className='m-3 bg-neutral-700 p-3 rounded-lg flex flex-col gap-3'>
                        
                        <p>We'll keep you updated on new episodes</p>
                        <button className='bg-white px-2 py-1 rounded-lg text-neutral-950'>
                            Browse podcasts
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aside