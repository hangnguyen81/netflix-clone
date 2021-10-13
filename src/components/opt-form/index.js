import { Container, Text, Input, Button, Wrap } from "./styles/opt-form"

export default function OptForm({children, ...restProps}){
    return <Container {...restProps}> {children}</Container>
}

OptForm.Text = function OptFormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

OptForm.Wrap = function OptFormWrap({children, ...restProps}){
    return <Wrap {...restProps}>{children}</Wrap>
}

OptForm.Input = function OptFormInput({ ...restProps}){
    return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({children, ...restProps}){
    return(
        <Button {...restProps}>
            {children}
            <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    ) 
    
}

