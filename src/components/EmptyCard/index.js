import React from 'react';
import LottieView from 'lottie-react-native';

import EmptyCartAnimation from '../../../EmptyCartAnimation.json';

import { 
    Container,
    EmptyCartText,
    EmptyCartContainer,
 } from "./styles";

function EmptyCard(){
    return(
        <Container>
            <EmptyCartContainer> 
                <LottieView 
                source={EmptyCartAnimation}
                resizeMode="contain"
                autoPlay
                loop
                />
            </EmptyCartContainer> 
            <EmptyCartText>Carrinho vazio!</EmptyCartText>
        </Container>
    );
}

export default EmptyCard;