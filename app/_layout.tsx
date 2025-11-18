import { DefaultTheme, ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { ThemeProvider as AppThemeProvider } from "../hooks/useTheme";

export default function RootLayout() {
  return (
    <AppThemeProvider>
      <NavigationThemeProvider value={DefaultTheme}>
        <Stack screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </NavigationThemeProvider>
    </AppThemeProvider>
  );

    
    
}
