import React from "react";
import { Tabs } from "expo-router";

const CustomerTabLayout = () => {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="homepage"
        options={{
            tabBarStyle: { display: "none" },
          }}
      />
    </Tabs>
  );
};

export default CustomerTabLayout;
