import { useContext } from "react"
import { UserContext } from "../../utils/auth/UserProvider"

export const Component = () => {
  const { currentUser, isLoading } = useContext(UserContext)
  return (
    <div>{currentUser}</div>
    
  )
}
Component.dispalyName = "Dashboard"