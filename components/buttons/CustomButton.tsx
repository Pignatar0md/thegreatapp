import { Pressable, StyleProp, StyleSheet, Text } from "react-native";
import React, { FC } from "react";

const CustomButton: FC<{
	text: string;
	onPress: () => void;
	isLoading: boolean;
	containerStyle?: StyleProp<object>;
	textStyle?: StyleProp<object>;
}> = ({ text, onPress, isLoading, containerStyle, textStyle }) => {
	const customWrapper = [styles.defaultWrapper, containerStyle];
	const customText = [styles.defaultText, textStyle];
	return (
		<Pressable onPress={onPress} disabled={isLoading} style={customWrapper}>
			<Text style={customText}>{text}</Text>
		</Pressable>
	);
};

export default CustomButton;

const styles = StyleSheet.create({
	defaultWrapper: {
		borderRadius: 5,
		padding: 12,
		backgroundColor: "orange",
		alignItems: "center",
	},
	defaultText: { color: "white", fontSize: 20, fontWeight: "500" },
});
