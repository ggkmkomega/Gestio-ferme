import features from "@/assets/data/features";
import FeatureInfo from "@/src/components/FeatureInfo";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

export default function index() {
  return (
    <View style={styles.container}>
      <View
        style={{
          margin: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", margin: 10 }}>
          Ferme #1
        </Text>
        <Button disabled title="Ajoutez une ferme" />
      </View>
      <FlatList
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        data={features}
        renderItem={({ item }) => <FeatureInfo feature={item} />} // Pass the correct properties to the FeatureInfo component
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
