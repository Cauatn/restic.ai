import CustomStatusBar from "@/components/CustomStatusBar";
import { Stack } from "expo-router";
import React from "react";

export default function EnvaseERotulagemLayout() {
  return (
    <>
      <CustomStatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
