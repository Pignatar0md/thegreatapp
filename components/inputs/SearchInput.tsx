import React, { FC } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Text,
	Image,
	Pressable,
	Alert,
} from "react-native";
import { icons } from "@/constants";
import { SearchInputType, textInputSize } from "@/types/components/TextInput";
import { sizes } from "@/constants/ComponentSizes";
import { router, usePathname } from "expo-router";

const SearchField: FC<SearchInputType> = ({
	value,
	onChangeText,
	placeHolder,
	size,
	label,
	keyboardType,
	customWrapperStyle,
}) => {
	const customWrapper = [styles.defaultWrapper, sizes[size as textInputSize]];
	const pathname = usePathname();
	return (
		<>
			<Text style={styles.defaultLabel}>{label}</Text>
			<View style={[customWrapper, customWrapperStyle]}>
				<TextInput
					value={value}
					style={{ height: 42, width: "100%" }}
					onChangeText={onChangeText}
					placeholder={placeHolder}
					inputMode={keyboardType}
				/>

				<Pressable
					onPress={() => {
						if (!value) {
							return Alert.alert(
								"Missing query",
								"Please input something to search results across database"
							);
						}

						if (pathname.startsWith("/search")) {
							router.setParams({ query: value });
						} else {
							router.push(`/search/${value}`);
						}
					}}
				>
					<Image style={{ width: 20, height: 20 }} source={icons.search} />
				</Pressable>
			</View>
		</>
	);
};

export default SearchField;

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
