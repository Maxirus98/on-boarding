import React, { useState } from 'react'
import Persona from '../../models/Persona'
import { User } from '../user/User'

const UserList = () => {
  // Step 1: Add an object with the email, fullName and imageSrc properties
  // 
  const [users, setUsers] = useState<Persona[]>([
    {
      email:"maxime.dupuis@elancedei.com",
      fullName:"Maxime Dupuis",
      githubProfileImageUrl:"https://avatars.githubusercontent.com/u/70596866?s=400&v=4"
    },
  {
    email: "leonella.levymartel@elancedei.com",
    fullName: "Leonella Ariane Levy Martel",
    githubProfileImageUrl: ""
  }
  ])
  return (
    <table>
      <tbody>
      {
        users.map((user, key, array) => <User user={user}/>)
      }
      </tbody>
    </table>
  )
}

export default UserList