import { XIcon } from '@heroicons/react/solid'
import React from 'react'

function Menu({ open, setOpen }) {
    return (
        <div className={`${open ? "absolute" : "hidden"} lg:hidden sticky top-16`}>
            Menu 
            <XIcon onClick={() => setOpen(false)} className='w-6 h-6 text-red-600' />
        </div>
    )
}

export default Menu