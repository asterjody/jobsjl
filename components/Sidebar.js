/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Avatar } from '@mui/material'
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import Image from 'next/image'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'

function Sidebar() {
    const { data: session } = useSession()
  return (
    <div className='space-y-2 min-w-max max-w-lg'>
        {/* Top */}
        <div className='bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative
         flex flex-col items-center text-center border border-gray-300 dark:border-none'>
            <div className='relative w-full h-14'>
                <Image src='https://rb.gy/i26zak' layout='fill' priority />
            </div>
            <Avatar
                onClick={signOut}
                src={session?.user?.image}
                className='!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer'
            />
            <div className='mt-5 py-4 space-x-0.5'>
                <h4 className='hover:underline decoration-purple-700 cursor-pointer
                 underline-offset-1'>
                    {session?.user?.name}
                </h4>
                <p className='text-black/60 dark:text-white/75 text-sm'>
                    {session?.user?.email}
                </p>
            </div>

            <div className='hidden md:inline text-left dark:text-white/75 text-sm'>
                <div className='font-medium sidebarButton space-y-0.5'>
                    <div className='flex justify-between space-x-2'>
                        <h4>Who viewed Your Profile</h4>
                        <span className='text-blue-500'>12</span>
                    </div>
                    <div className='flex justify-between space-x-2'>
                        <h4>Views of Your Post</h4>
                        <span className='text-blue-500'>100</span>
                    </div>
                </div>
                
                <div className='sidebarButton'>
                    <h4 className='leading-4 text-xs'>
                        Access Exclusive Tools & Insights
                    </h4>
                    <h4 className='dark:text-white font-medium'>
                    <span className='w-3 h-3 bg-gradient-to-tr from-yellow-700
                     to-yellow-200 inline-block rounded-sm mr-1' />{' '}
                        Try Premium for free
                    </h4>
                </div>

                <div className='sidebarButton flex items-center space-x-1.5'>
                    <BookmarkOutlinedIcon className='!-ml-1' />
                    <h4 className='dark:text-white font-medium'>My items</h4>
                </div>
            </div>
         </div>
        {/* Bottom */}
        <div className='hiddden md:flex bg-white dark:bg-[#1d2226] text-black/70 dark:text-white/75
         rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky top-20 bordder border-gray-300
         dark:border-none'>
            <p className='sidebarLink'>Groups</p>
            <div className='flex items-center justify-between'>
                <p className='sidebarLink'>Events</p>
                <AddRoundedIcon className='!h-5'/>
            </div>
            <p className='sidebarLink'>Followed Hastags</p>
            <div className='sidebarButton text-center'>
                <h4 className='dark:text-white font-medium text-sm'>Discover More</h4>
            </div>
         </div>
    </div>
  )
}

export default Sidebar