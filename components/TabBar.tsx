import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function TabBar({ state, descriptors, navigation }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "transparent",
        borderTopWidth: 1,
        padding: 20,
        justifyContent: "space-around",
        borderColor: "#C0C0C0",
      }}
    >
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const IconComponent = options.tabBarIcon;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              alignItems: "center",
            }}
          >
            {IconComponent && (
              <IconComponent
                color={
                  isFocused
                    ? options.tabBarActiveTintColor
                    : options.tabBarInactiveTintColor
                }
                size={24}
              />
            )}
            <Text
              style={{
                color: isFocused
                  ? options.tabBarActiveTintColor
                  : options.tabBarInactiveTintColor,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
