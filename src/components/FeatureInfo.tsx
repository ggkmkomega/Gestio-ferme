import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import Colors from "@/src/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link, useSegments } from "expo-router";
import { Image, Text } from "react-native";
import { FeatureItem } from "@/assets/data/features";

function FeatureInfo({ feature }: { feature: FeatureItem }) {
  const segments = useSegments();
  return (
    <View style={[styles.container, { backgroundColor: feature.color }]}>
      {feature.id > 2 && (
        <Image source={require("../../assets/R.png")} style={styles.image} />
      )}
      <Link href={`/${segments[0]}/features/${feature.id}`} asChild>
        <Pressable>
          <FontAwesome name="circle" size={25} color={Colors.light.text} />
          <Text style={styles.title}>{feature.title}</Text>
        </Pressable>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 10,
    borderRadius: 20,
    maxWidth: "50%",
    position: "relative",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: 100, // Set your desired width
    height: 100, // Set your desired height
    position: "absolute", // Positioning the image absolutely
    top: -5,
    right: -5,
  },
});

export default FeatureInfo;
