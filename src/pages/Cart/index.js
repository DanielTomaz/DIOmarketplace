import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

import * as CartActions from "../../store/modules/cart/actions";

import {
  Container,
  ContainerContents,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductSinglePrice,
  TotalContainer,
  ProductPrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
  TotalProductsContainer,
  TotalProductsText,
  SubtotalValue,
  Scroll,
  SubTotalValue,
} from "./styles";

import EmptyCart from "../../components/EmptyCard";
import formatValue from "../../utils/formatValue";


function Cart() {

  const dispatch = useDispatch();

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


  function increment(product){
    dispatch(CartActions.updateAmountRequest(product.id = product.amount + 1));
  }

  function decrement(product){
    dispatch(CartActions.updateAmountRequest(product.id = product.amount - 1));
  }

  function removeFromCart(id){
    dispatch(CartActions.removeFromCart(id));
  }


  return (
    <Container>
      <ProductContainer>
        <Scroll>
          <ProductList
            data={products}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<EmptyCart />}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{
              height: 80,
            }}
            renderItem={({ item }) => (
              <Product>
                <ProductImage source={{ uri: item.image_url }} />
                <ProductTitleContainer>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPriceContainer>
                    <ProductSinglePrice>{formatValue(item.price)}</ProductSinglePrice>

                    <TotalContainer>
                      <ProductQuantity>{`${item.amount}x`}</ProductQuantity>

                      <ProductPrice>
                        R${item.price * item.amount}
                      </ProductPrice>
                    </TotalContainer>
                  </ProductPriceContainer>
                </ProductTitleContainer>
                <ActionContainer>
                  <ActionButton onPress={() => increment(item)}>
                    <Feather name="plus" color="#E83F5B" size={16} />
                  </ActionButton>
                  <ActionButton onPress={() => 
                  item.amount > 1 ? decrement(item) : removeFromCart(item.id)
                  }>
                    <Feather name="minus" color="#E83F5B" size={16} />
                  </ActionButton>
                </ActionContainer>
              </Product>
            )}
          />
        </Scroll>
      </ProductContainer>
      <TotalProductsContainer>
        <Feather name="shopping-cart" color="#fff" size={24} />
        <TotalProductsText>{cartSize} {cartSize === 1 ? 'item' : 'itens'}</TotalProductsText>
        <SubTotalValue>{cartTotal}</SubTotalValue>
      </TotalProductsContainer>
    </Container>
  );
}

export default Cart;
