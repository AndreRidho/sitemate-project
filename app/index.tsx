import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const initializeApp = async () => {
    setTimeout(() => {
      router.replace("/(pages)/homepage/HomePage");

      setLoading(false);
    }, 0);
  };

  useEffect(() => {
    initializeApp();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={"#ff0000"} />
      </View>
    );
  }

  return null;
};

export default Index;
