import { View, ActivityIndicator } from "react-native";
import React from "react";
import Button from "../components/Button";
import { Link, Redirect } from "expo-router";
import { UseAuth } from "../Providers/AuthProvider";

const index = () => {
  const { loading, session, error } = UseAuth();

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <text>{JSON.stringify(error)}</text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Redirect href="/(user)/features" />;
};

export default index;
