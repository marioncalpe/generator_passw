import styled from "@emotion/styled"

interface TitleProps{
    children: string
}

const StyledTitle = styled.h2`
    color: white
`

export function Title({children}: TitleProps){
    return <StyledTitle>
        {children}        
    </StyledTitle>
}