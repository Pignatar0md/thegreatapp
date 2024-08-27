import { StyleSheet, Text } from "react-native";
import React from "react";
import MainWrapper from "@/components/wrappers/mainWrapper";

const welcome = () => {
	return (
		<MainWrapper>
			<Text>welcome</Text>
		</MainWrapper>
	);
};

export default welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
