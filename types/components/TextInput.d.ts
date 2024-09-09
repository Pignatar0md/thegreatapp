import { StyleProp, InputModeOptions } from "react-native";
export type SearchInputType = {
	value: string;
	onChangeText: (a: string) => void;
	label: string;
	placeHolder: string;
	keyboardType: InputModeOptions;
	size: textInputSize;
	customWrapperStyle?: StyleProp<{}>;
};

export type TextInputType = {
	value: string;
	onChangeText: (a: string) => void;
	label: string;
	placeHolder: string;
	secureTextEntry?: boolean;
	customWrapperStyle?: StyleProp<{}>;
	keyboardType: InputModeOptions;
	size: textInputSize;
};

export type textInputSize = "tiny" | "small" | "medium" | "big" | "huge";
export type textInputSizeStyle = StyleProp<{ height: number }>;
