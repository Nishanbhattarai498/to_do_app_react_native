import { Background } from "@react-navigation/elements";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={
        styles.container
      }
    >
      <Text style={styles.content}>Edit app/index.tsx to edit this screen hey heyS s.</Text>
      <Link href="/about" style={{ marginTop: 20, fontSize: 18, color: 'blue' }}>

      Visit about screen
      
      </Link>
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
