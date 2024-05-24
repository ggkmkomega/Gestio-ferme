import { UseAuth } from "@/src/Providers/AuthProvider";
import { Stack, useRouter } from "expo-router";

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
