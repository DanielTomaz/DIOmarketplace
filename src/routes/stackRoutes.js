import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {backgroundColor: '#313746'},

      }}
      initialRouteName="Catalog"
    >
      <Stack.Screen
        name="Catalog"
        component={Catalog}
        options={{
          headerShown: false,
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart} 
        options={{
          headerShown: false,
          headerTransparent: true,
          title: "Cart",
        }}
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;
