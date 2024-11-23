import { StatusBar, StatusBarProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
interface CustomStatusBarProps extends StatusBarProps {
  backgroundColor?: string;
}

export default function CustomStatusBar({
  backgroundColor,
  ...props
}: CustomStatusBarProps) {
  return (
    <SafeAreaView style={{ backgroundColor }}>
      <StatusBar translucent {...props} />
    </SafeAreaView>
  );
}
