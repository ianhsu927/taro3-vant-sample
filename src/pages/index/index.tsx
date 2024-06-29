import React from "react";
import { navigateTo } from "@tarojs/taro";
import { useState } from "react";
import { View, Text, Slot } from "@tarojs/components";
import { Button, Calendar } from "@antmjs/vantui";
import "./index.scss";

export default function Index() {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState("");
  const formatDate = (date) => {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };
  return (
    <View className='index'>
      <Button
        type='primary'
        onClick={() => {
          setShow(true);
        }}
      >
        显示日历
      </Button>
      <Calendar
        show={show}
        showConfirm
        type='range'
        onClose={() => {
          setShow(false);
        }}
        onConfirm={(event) => {
          setShow(false);
          setDate(formatDate(event.detail));
        }}
      >
        <Slot name='title'>
          <View>Hello world</View>
        </Slot>
      </Calendar>
      <View>{date}</View>
      <View>
        <Text
          onClick={() => {
            navigateTo({ url: "/pages/about/index" });
          }}
        >
          Hello world!
        </Text>
      </View>
    </View>
  );
}
