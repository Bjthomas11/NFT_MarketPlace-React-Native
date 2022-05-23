import React, { useState } from "react";
import { StatusBar, View } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar animated={true} {...props} barStyle={"dark-content"} />
  ) : null;
};

export default FocusedStatusBar;
