import { DefaultTheme, ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { ThemeProvider as AppThemeProvider } from "../hooks/useTheme";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <AppThemeProvider>
        <NavigationThemeProvider value={DefaultTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
          </Stack>
        </NavigationThemeProvider>
      </AppThemeProvider>
    </ConvexProvider>
  );
}
