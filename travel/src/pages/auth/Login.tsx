import { useForm } from "react-hook-form"
import {Box,Button, Flex, TextField, Link as LinkButton }  from "@radix-ui/themes"
import { useFrappeAuth, useFrappeGetCall } from "frappe-react-sdk";

import { Link, useNavigate } from "react-router-dom";  
import { Label } from "@/components/common/Form";
import AuthContainer from "@/components/layouts/AuthContainer";
import type { LoginInputs, LoginContext, SocialProvider } from "@/types/Auth/Login";

import { FaGoogle } from "react-icons/fa";

const imageUrl = `${import.meta.env.VITE_FRAPPE_BASE_URL}/files/auth-img.webp`;


export const Component = () => {
  const navigate = useNavigate();
  const { login } = useFrappeAuth()
 const { data : LoginContext , mutate } = useLoginContext()

  const {
    register,
    handleSubmit
   
  } = useForm<LoginInputs>()

  async function onSubmit(values:LoginInputs){
    
    try {
    const user = await login({ username: values.email, password: values.password })
   
    if(user) {
      navigate('/dashboard')
    }
    }catch(error){
      console.log(error)
    }
    
  }
  return (
    <AuthContainer>
      <main className="auth">
        <div className="size-full">
          <div className="sign-in-card">
           
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>

                <Flex direction='column' gap='4' >
                    <Flex direction='column' gap='2'>
                      <Label htmlFor='email' isRequired size='3'>Email Id</Label>
                        <TextField.Root
                          {...register("email",
                            {  required: "Email is required."}
                          )}
                          name="email"
                          type="text"
                          required
                          id="email"
                          size='3'
                          color="gray"
                          />
                    </Flex>
                    <Flex direction='column' gap='2'>
                      <Label htmlFor='password' isRequired size='3'>Password</Label>
                        <TextField.Root 
                         {...register("password",
                          {
                            required: "Password is required.",

                          }
                        )}
                          name="password"
                          type="password"
                          required
                          id="password"
                          placeholder="*******"
                          size='3'
                          color="gray"
                          />
                    </Flex>
                  
                    <Flex direction='column' gap='3' >
                      <Button type="submit" size="3" variant="soft">
                          Sign In
                      </Button>
                    </Flex>
                    <OtherLoginMethods  />
                    
                      <Flex direction='column' gap='2' align="end">
                          <LinkButton
                              asChild
                              color='gray'
                              size="2"
                          >
                              <Link to="/forgot-password">
                                  Forgot Password?
                              </Link>
                          </LinkButton>
                    </Flex>
                    
                </Flex>
              </form>
            </Box>
            
          </div>
        </div>
      </main> 
    </AuthContainer>
   
  )
}
const useLoginContext = () => {
  
    return useFrappeGetCall<LoginContext>('travel_app.api.login.get_context', {
        "redirect-to": "/"
    }, 'travel_app.api.login.get_context', {
        revalidateOnMount: true,
        revalidateOnReconnect: false,
        revalidateOnFocus: false
    })
}
export const  OtherLoginMethods = () =>{
  const { data: LoginContext } = useLoginContext()
  return(
    <>
       {
            LoginContext?.message?.social_login ? LoginContext?.message?.provider_logins.map((soc: SocialProvider, i: number) => {
                return (
                    <Flex direction='column' key={i} >
                        <Button
                            size='3'
                            color='gray'
                            variant="outline"
                            className="not-cal font-medium text-gray-12 dark:text-white"
                            
                            asChild>
                            <Link to={soc.auth_url} className="flex items-center">
                              
                                Continue with {soc.provider_name}
                            </Link>
                        </Button>
                    </Flex>
                )
            }) : null
        }
    </>
     
  )
}

Component.displayName = "LoginPage";