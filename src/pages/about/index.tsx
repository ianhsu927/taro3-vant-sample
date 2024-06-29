import React from "react";
import { navigateTo } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default function About() {
  return (
    <View className='about'>
      <Text
        onClick={() => {
          navigateTo({ url: "/pages/index/index" });
        }}
      >
        About
      </Text>
    </View>
  );
}
