import { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { Label } from '@/components/common/Form'
import { FrappeContext, type FrappeConfig } from "frappe-react-sdk"
import {Box,Button, Flex, TextField }  from "@radix-ui/themes"
import { Loader, AuthContainer } from '@/components'

type SignupInputs = {
  email: string
  full_name: string
 
}
type CalloutObject = {
    state : boolean,
    message : string
}

export const Component = () => {
    const { call } = useContext(FrappeContext) as FrappeConfig
    const [callout,setCallout] = useState<CalloutObject | null>(null)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }} = useForm<SignupInputs>()
    
    const signup=async(values:SignupInputs)=>{
    try{
         return call
            .post("frappe.core.doctype.user.user.sign_up", {
                email: values.email,
                full_name: values.full_name,

                redirect_to: "/travel"
            })
            .then((result) => {
                setCallout({
                    state: true,
                    message: result?.message,
                });
            })
            .catch((err) => {
                setError(err);
            });
    }catch(error){
        console.log(error)
    }

}

   
  return (
    <AuthContainer>
         {callout && <SuccessCallout message={callout.message} />}
        <main className="auth">
        <div className="size-full">
          <div className="sign-in-card ">
             <Box>
              <form onSubmit={handleSubmit(signup)}>

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
                      <Label htmlFor='full_name' isRequired size='3'>First Name </Label>
                        <TextField.Root 
                         {...register("full_name",
                          {
                            required: "First Name is Required.",

                          }
                        )}
                          name="full_name"
                          type="text"
                          id="full_name"
                          placeholder="Jonh"
                          size='3'
                          color="gray"
                          />
                    </Flex>
                 
                   
                    <Flex direction='column' gap='2' align="start">
                      <Button type="submit" size="4" variant="soft" disabled={isSubmitting}>
                        {isSubmitting ? <Loader className="text-White" />:'Sign Up'} 
                      </Button>
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

Component.displayName = 'SignUpPage'