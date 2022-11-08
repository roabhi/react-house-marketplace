import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState(null)

  const auth = getAuth()

  useEffect(() => {
    console.log(auth.currentUser)
    setUser(auth.currentUser)
  }, [])

  return user ? <h1>{user.email}</h1> : 'Not logged'
}

export default Profile
