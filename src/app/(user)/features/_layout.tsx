import Colors from "@/src/constants/Colors";
import { UseAuth } from "@/src/Providers/AuthProvider";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function shopStack() {
  const router = useRouter();
  const { session } = UseAuth();

  if (!session) {
    router.replace("/");
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Dashboard" }} />
    </Stack>
  );
}
