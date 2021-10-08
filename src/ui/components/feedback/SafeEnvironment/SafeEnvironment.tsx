import React from "react";
import { SafeEnvironomentContainer } from "./SafeEnvironment.style";
import {Container} from '@mui/material';

const SafeEnvironment = () =>{
    return (
        <SafeEnvironomentContainer>
            <Container>
            Ambiente Seguro <i className={'twf-lock'}/>
            </Container>
        </SafeEnvironomentContainer>
        
    );
}

export default SafeEnvironment;
