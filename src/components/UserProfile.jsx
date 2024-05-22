import React from 'react'
import user from '../assets/user.jpg'

const userProfile = ({toggle}) => {
  return (
    <div className={`flex gap-5 items-center ${toggle ? "bg-none transition-all duration-300 delay-200" : "bg-white rounded p-2"}`}>
      <div className="min-w-[3.5rem] h-[3.5rem]">
        <img src={user} alt="" className='object-cover w-full h-full rounded-full' />
      </div>
      <div className={toggle ? "opacity-0 delay-200" : ""}>
        <h3 className='font-serif text-xl font-bold'>Thilina</h3>
        <span className='text-[0.75rem] opacity-60'>thilinalakshan763@gmail.com</span>
      </div>
    </div>
  )
}

export default userProfile
