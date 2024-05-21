import React from "react";
import { Redirect, Stack } from "expo-router";
import { UseAuth } from "@/src/Providers/AuthProvider";

const AuthLayout = () => {
  const { session } = UseAuth();
  if (session) {
    return <Redirect href={"/(user)"} />;
  }
  return <Stack />;
};

export default AuthLayout;
