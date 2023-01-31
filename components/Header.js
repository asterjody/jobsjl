/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import JlWhite from'../public/jldark.svg';
import JlBlue from'../public/jlsq.svg';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HeaderLink from './HeaderLink';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

function Header() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme, theme} = useTheme()

    useEffect(() => setMounted(true), [])
    
  return (
    <header 
        className=' sticky top-0 z-40 bg-white dark:bg-[#1D2226] 
        flex items-center justify-around py-1.5 px-3
        focus-within:shadow-lg'>
        {/* left */}
        <div className='flex items-center space-x-2 w-full max-w-xs'>
            {mounted && (
            <>
                {resolvedTheme === "dark" ? (
                <Image src={JlWhite} width={45} height={45} />
                ) : (
                <Image src={JlBlue} width={45} height={45} />
                )}
            </>
            )}

            <div className='flex items-center space-x-1
             dark:md:bg-gray-700 py-2.5 px-4 rounded-w-full'>
                <SearchRoundedIcon />
                <input type='text' placeholder='Search' className='hidden 
                md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70
                dark:placeholder-gray-400/75 flex-grow' /> 
            </div>
        </div>

        {/* right */}
        <div className='flex items-center space-x-6'>
            <HeaderLink Icon={HomeRoundedIcon} text='Home' feed active />
            <HeaderLink Icon={GroupIcon} text='My Network' feed />
            <HeaderLink Icon={BusinessCenterIcon} text='Jobs' feed hidden />
            <HeaderLink Icon={ChatIcon} text='Messaging' feed />
            <HeaderLink Icon={NotificationsIcon} text='Notifications' feed />
            <HeaderLink Icon={Avatar} text='Me' feed avatar hidden />
            <HeaderLink Icon={AppsOutlinedIcon} text='Work' feed hidden />

            {/* Dark mode toggle */}
            {mounted && (
            <div
                className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
                resolvedTheme === "dark" ? "justify-end" : "justify-start"
                }`}
                onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
            >
                <span className="absolute left-0 pl-0.5 mb-1">
                    <NightlightIcon className='text-xl text-yellow-400' />
                </span>
                <motion.div
                className="w-5 h-5 bg-white rounded-full z-40"
                layout
                transition={spring}
                />

                <span className="absolute right-0.5 mb-1">
                    <LightModeIcon className='text-xl text-yellow-400' />
                </span>
            </div>
            )}
            </div>

    </header>
  )
}

export default Header