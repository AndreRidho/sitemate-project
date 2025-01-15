import { Stack } from "expo-router";

const HomepageStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: "#009959",
        // },
        // headerTitleAlign: "center",
        // headerTintColor: "white",
        // headerTitleStyle: {
        //   fontSize: 24,
        // },
      }}
    >
      <Stack.Screen name="HomePage" options={{ title: "News" }} />
    </Stack>
  );
};

export default HomepageStackLayout;
