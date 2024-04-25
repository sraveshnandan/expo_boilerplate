import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

type Props = {};

const HomeScreen = (props: Props) => {
  useLayoutEffect(() => {}, []);
  return (
    <Animated.View
      entering={FadeInUp.delay(900).springify()}
      exiting={FadeInUp}
      className="mx-auto w-200 h-150 bg-gray-400 rounded-md my-12 p-10"
    >
      <Text>Home Screen</Text>
    </Animated.View>
  );
};

export default HomeScreen;
