import {
	StyleProp,
	StyleSheet,
	TextInput,
	View,
	Text,
	Image,
	TouchableOpacity,
} from "react-native";
import React, { FC, useState } from "react";
import { icons } from "@/constants";

type textInputSize = "tiny" | "small" | "medium" | "big" | "huge";
type textInputSizeStyle = StyleProp<{ height: number }>;

const TextField: FC<{
	value: string;
	onChangeText: (a: string) => void;
	label: string;
	placeHolder: string;
	size: textInputSize;
}> = ({ value, onChangeText, placeHolder, size, label }) => {
	const [showPass, setShowPass] = useState(false);
	const sizes: {
		tiny: textInputSizeStyle;
		small: textInputSizeStyle;
		medium: textInputSizeStyle;
		big: textInputSizeStyle;
		huge: textInputSizeStyle;
	} = {
		tiny: { height: 48 },
		small: { height: 52 },
		medium: { height: 60 },
		big: { height: 76 },
		huge: { height: 108 },
	};
	return (
		<>
			<Text style={styles.defaultLabel}>{label}</Text>
			<View style={[styles.defaultWrapper, sizes[size as textInputSize]]}>
				<TextInput
					// style={[styles.defaultWrapper, sizes[size as textInputSize]]}
					value={value}
					onChangeText={onChangeText}
					placeholder={placeHolder}
				/>
				{label === "Password" && (
					<TouchableOpacity onPress={() => setShowPass(!showPass)}>
						<Image
							style={{ width: 30, height: 20 }}
							source={!showPass ? icons.eye : icons.eyeHide}
						/>
					</TouchableOpacity>
				)}
			</View>
		</>
	);
};

export default TextField;

const styles = StyleSheet.create({
	defaultWrapper: {
		fontSize: 18,
		padding: 12,
		backgroundColor: "white",
		borderRadius: 6,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	defaultLabel: { color: "white", marginVertical: 5 },
});
