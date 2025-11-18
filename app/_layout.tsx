import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "To-Do App",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="about"
        options={{
          headerTitle: "About",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
