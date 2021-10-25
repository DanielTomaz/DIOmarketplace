import React from 'react';
import { Feather } from "@expo/vector-icons";
import { Image } from 'react-native';

import { Container, LogoApp, MenuButton } from './styles';

import { useNavigation } from "@react-navigation/native";

import Logo from '../../assets/logo.png';


function Header(){

    const navigation = useNavigation();

    return(
        <Container>
            <MenuButton onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={36} color="#fff"/>
            </MenuButton>
            <LogoApp 
            source={Logo} 
            resizeMethod="resize"
            />
        </Container>
    );
}

export default Header;