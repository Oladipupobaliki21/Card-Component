import React from 'react'
import UserCard from './Components/UserCard'
const users = [
  {
    name:"Oladipupo Bilikis Arike",
    email: "oladipupobilikisarike@gamil.com",
    bio: "Front-End Developer",
  },
  {
    name:"Olatunji Teslim",
    email:"olatunji@gmail.com",
    bio:"Full Stack Developer",
  },
  {
    name:"John Ayanyemi Abiodun",
    email:"john@gmail.com",
  }
]
const App = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100 py-10'>
      <h1 className="text-3xl font-bold mb-5">User Profile Cards</h1>
      <div className='flex flex-gap-8'>
      {users.map( (user, index) =>{
        <UserCard key={index} {...user} />
      }
      )}
      </div>

    </div>
  )
}

export default App