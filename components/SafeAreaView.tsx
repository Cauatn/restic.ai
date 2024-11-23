import React from "react";
import {
  SafeAreaView as SafeArea,
  SafeAreaViewProps as props,
} from "react-native-safe-area-context";

interface SafeAreaViewProps extends props {
  children: any;
}

export default function SafeAreaView({ children, ...rest }: SafeAreaViewProps) {
  return (
    <SafeArea
      style={{
        flex: 1,
        gap: 20,
      }}
      edges={["right", "left", "bottom"]}
      {...rest}
    >
      {children}
    </SafeArea>
  );
}
