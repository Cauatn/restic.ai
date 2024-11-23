import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ActivityCardProps {
  icon: any;
  title: string;
  route: string | any;
  // type?: string;
  param?: {
    tank: string;
    depositId?: number;
    content?: string;
    contentId?: number;
  }[];
}

export default function ActivityCard({
  icon,
  title,
  route,
  //type = "",
  param = [],
}: ActivityCardProps) {
  const href =
    param.length > 0
      ? {
          pathname: route,
          params: param[0],
        }
      : {
          pathname: route,
        };

  return (
    <Link
      style={{
        paddingHorizontal: 10,
        paddingVertical: 20,
        width: 130,
        gap: 8,
      }}
      href={href}
      asChild
    >
      <TouchableOpacity className="bg-white justify-between rounded-lg">
        {icon}
        <Text className="text-black text-xl font-medium leading-6">
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}
