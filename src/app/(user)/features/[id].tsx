import features from "@/assets/data/features";
import ExampleThree from "@/src/components/Table";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";

const featureDetailSceen = () => {
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === "string" ? idString : idString[0]);

  const feature = features.find((product) => product.id === id);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: feature?.title }} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Poules/Poussins</Text>
        <Button title="Ajouter" />
      </View>
      <ExampleThree />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
});
export default featureDetailSceen;
