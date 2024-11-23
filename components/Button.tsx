import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export function Button({
  placeholder,
  route,
}: {
  placeholder: string;
  route: string;
}) {
  return (
    <Link href={route} className="p-3" asChild>
      <TouchableOpacity className="bg-[#171717] w-full flex items-center rounded-lg mb-4">
        <Text className="text-white text-lg font-medium ">{placeholder}</Text>
      </TouchableOpacity>
    </Link>
  );
}
