import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { FC, ReactNode } from "react";
import { themeStyle } from "@/app/theme/theme";

const MainWrapper: FC<{ children: ReactNode }> = ({ children }) => {
	return <SafeAreaView style={themeStyle.wrapper}>{children}</SafeAreaView>;
};

export default MainWrapper;

const styles = StyleSheet.create({});
