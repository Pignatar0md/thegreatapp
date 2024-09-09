import React, { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

const Section: FC<{ children: ReactNode }> = ({ children }) => {
	return <View style={{ marginVertical: 20 }}>{children}</View>;
};

export default Section;

const styles = StyleSheet.create({});
