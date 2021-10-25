import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import * as CartActions from "../../store/modules/cart/actions";

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
  ProductButtonText,
} from "./styles";

import formatValue from "../../utils/formatValue";
import FloatingCart from "../../components/FloatingCart";
import Header from "../../components/Header";

import api from "../../services/api";

export default function Catalog() {

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function loadProducts(){
      const { data } = await api.get('/products');

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddToCard(id){
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <Header />
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id}
          listFooterComponent={<View />}
          listFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitle>{item.title}</ProductTitle>
              <PriceContainer>
                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                <ProductButton onPress={() => handleAddToCard(item.id)}>
                  <ProductButtonText>Adicionar</ProductButtonText>
                  <Feather size={30} name="plus-circle" color="#d1d7e9" />
                </ProductButton>
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
}
