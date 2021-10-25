import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from "react-native";


import StackRoutes from "./stackRoutes";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Logo from "../assets/logo.png";

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#333",
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: "#F2B072",
        drawerActiveTintColor: "#FFF",
      }}
    >
    <Drawer.Screen
        name="Catalog"
        component={StackRoutes}
        options={{
          title: "Catalog",
        }}
      />
    <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Cart",
        }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
