import React from 'react'
import UserProfileNavbar from './UserProfileNavbar'
import Todo from './Todo'

const UserDashboard = () => {
  return (
    <div>
        <UserProfileNavbar/>
        <div className="p-4">
        <Todo />
      </div>
    </div>
  )
}

export default UserDashboard