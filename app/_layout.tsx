import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerTitle: "To-Do App",
          headerTitleAlign: "center",
        }}
      />

      
    </Stack>
  );
}
