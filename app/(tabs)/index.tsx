import { useTheme } from '../../hooks/useTheme'
import { Background } from "@react-navigation/elements";
import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();
  return (
    <View
      style={
        styles.container
      }
    >
      <Text style={styles.content}>Edit app/index.tsx to edit this screen hey heyS s.</Text>

      < TouchableOpacity onPress={() => {
        toggleDarkMode();
      }}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
   
  },
  content: {
    
    fontSize: 20,
  },
});
