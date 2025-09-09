import { Box, Flex,Heading } from '@radix-ui/themes';
import { type PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';



const AuthContainer = ({children}:PropsWithChildren) => {
  return (
    <>
        <Box className='min-h-screen'>
            <Flex align='center' justify='center' className='min-h-screen w-full ' >
                <Box className='w-full max-w-md'>
                            <Flex direction='column' justify='center' gap='2' className='w-full'>
                                <Link to="/" tabIndex={-1}>
                                    <Flex>
                                        <Heading size='7' className='cal-sans leading-normal tracking-normal capitalize'>Itinera</Heading>
                                    </Flex>
                                </Link>
                                {children}
                            </Flex>
                        </Box>

            </Flex>
        </Box>

        
    </>
  )
}

export default AuthContainer;
