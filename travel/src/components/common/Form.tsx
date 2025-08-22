import { TextProps } from '@radix-ui/themes/dist/cjs/components/text'
import { Box, Text } from '@radix-ui/themes'

interface LabelProps extends TextProps {
    isRequired : boolean,
    children : string,
}
export const Label = ({children, isRequired, ...props}:LabelProps) => {
   
  return (
    <Box pb='1'>
        <Text as='label' weight='medium' size='2' {...props}>
           
            {children}{isRequired && <Text as='span' color='red'>*</Text>}
        </Text>
    </Box>
  )
}
