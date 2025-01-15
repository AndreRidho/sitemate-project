import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const RootLayout = () => {
  useEffect(() => {
    async function hideSplashScreen() {
      try {
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    hideSplashScreen();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(pages)" />
      </Stack>
    </QueryClientProvider>
  );
};

export { queryClient };
export default RootLayout;
