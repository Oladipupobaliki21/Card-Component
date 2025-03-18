import React from 'react'

const UserCard = ({name, email, bio}) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl p-5 text-center border">
        <h2 className='text-xl font-semibold mt-3'>{name}</h2>
        <p className='text-gray-500 text-sm'>{email}</p>
        <p className='mt-2 text-gray-700'>{bio}</p>
    </div>
  )
}

export default UserCard