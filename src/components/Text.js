// step1 : import react
import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
       color: red;
`

// step2 : create a function
const Text = (props) =>{
    return (
     <StyledWrapper>
         {props.titel}
         <p>{props.content}</p>
     </StyledWrapper>
    )
}
                      
//step3 : export
export default Text;