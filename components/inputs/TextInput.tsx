import {
	StyleSheet,
	TextInput,
	View,
	Text,
	Image,
	Pressable,
} from "react-native";
import React, { FC, useState } from "react";
import { icons } from "@/constants";
import { textInputSize, TextInputType } from "@/types/components/TextInput";
import { sizes } from "@/constants/ComponentSizes";

const TextField: FC<TextInputType> = ({
	value,
	onChangeText,
	placeHolder,
	size,
	label,
	keyboardType,
	secureTextEntry,
}) => {
	const [showPass, setShowPass] = useState(false);

	return (
		<>
			<Text style={styles.defaultLabel}>{label}</Text>
			<View style={[styles.defaultWrapper, sizes[size as textInputSize]]}>
				<TextInput
					value={value}
					onChangeText={onChangeText}
					secureTextEntry={secureTextEntry}
					placeholder={placeHolder}
					inputMode={keyboardType}
					style={{ width: "100%", height: 42, textAlign: "center" }}
				/>
				{label === "Password" && (
					<Pressable onPress={() => setShowPass(!showPass)}>
						<Image
							style={{ width: 30, height: 20 }}
							source={!showPass ? icons.eye : icons.eyeHide}
						/>
					</Pressable>
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
