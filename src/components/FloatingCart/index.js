import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import formatValue from "../../utils/formatValue";

import {
  Container,
  CartPricing,
  CardTotalPrice,
  CartButton,
  CardButtonText,
} from "./styles";

function FloatingCart() {
  const navigation = useNavigation();

  const products = useSelector(({ cart }) => cart);

  const cartSize = useMemo(() => {
    return products.length || 0;
  }, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((accumulator, product) => {
      const totalPrice = accumulator + product.price * product.amount;
      return totalPrice;
    }, 0);
    return formatValue(cartAmount);
  });

  return (
    <Container>
      <CartButton onPress={() => navigation.navigate("Cart")}>
        <Feather name="shopping-cart" size={24} color="#f3f9ff" />
        <CardButtonText>{cartSize} {cartSize === 1 ? 'item' : 'itens'}</CardButtonText>
        <CartPricing>
          <CardTotalPrice>{cartTotal}</CardTotalPrice>
        </CartPricing>
        <Feather name="chevron-right" size={24} color="#f3f9ff" />
      </CartButton>
    </Container>
  );
}

export default FloatingCart;
