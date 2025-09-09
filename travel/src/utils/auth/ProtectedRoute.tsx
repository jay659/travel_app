import { UserContext } from './UserProvider'
import { useContext } from 'react'
import { Flex, Text } from '@radix-ui/themes'
import { Outlet, useNavigate } from 'react-router-dom'

export const ProtectedRoute = () => {
    const { currentUser, isLoading } = useContext(UserContext)
    console.log(currentUser)
    const navigate = useNavigate();
    
    if (isLoading) {
        return <Flex justify='center' align='center' height='100vh' width='100vw' className='animate-fadein'>
        <Text color='gray' weight='medium'>Setting up your Details...</Text>
        </Flex>
    }else if(currentUser === 'Guest' && !currentUser){
        navigate('/login')
   }

  return (
    <Outlet />
  )
}
