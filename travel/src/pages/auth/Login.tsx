import { useForm } from "react-hook-form"
import {Box,Button, Flex, TextField, Link as LinkButton }  from "@radix-ui/themes"
import { useFrappeAuth, useFrappeGetCall } from "frappe-react-sdk";

import { Link, useNavigate } from "react-router-dom";  
import { Label } from "@/components/common/Form";

interface LoginInputs {
  email: string;
  password: string;
    
}
export const Component = () => {
  const navigate = useNavigate();
  const { currentUser , login } = useFrappeAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
   
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
    <main className="auth">
      <div className="size-full flex-center">
          <div className="sign-in-card ">
           
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>

                <Flex direction='column' gap='6' >
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
                    <Flex direction='column' gap='2' align="start">
                      <Button type="submit" size="4" variant="soft">
                          Sign In
                      </Button>
                    </Flex>
                    
                </Flex>
              </form>
            </Box>
            
          </div>
        </div>
    </main> 
   
  )
}




Component.displayName = "LoginPage";