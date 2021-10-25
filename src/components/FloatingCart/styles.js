import styled from 'styled-components/native';

export const Container = styled.View`
    bottom: 0;
    position: absolute;
    background-color: #e83f5b;
    padding: 0px 18px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const CartPricing = styled.Text`
    padding: 20px;
`;

export const CardTotalPrice = styled.Text`
    color: #f3f9ff;
    font-size: 16px;
    font-weight: bold;
`;

export const CartButton = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
`;

export const CardButtonText = styled.Text`
    flex: 1;
    color: #f3f9ff;
    font-weight: bold;
    margin-left: 15px;
    margin-right: auto;
`;