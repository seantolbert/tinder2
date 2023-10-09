import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Go to Chat Screen" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
