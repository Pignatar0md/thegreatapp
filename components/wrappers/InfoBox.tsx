import React, { FC } from "react";
import { StyleProp, StyleSheet, Text, View } from "react-native";

const InfoBox: FC<{
	title: string;
	subTitle?: string;
	containerStyle: StyleProp<object>;
	titleStyle: StyleProp<object>;
}> = ({ title, containerStyle, titleStyle, subTitle }) => {
	return (
		<View style={containerStyle}>
			<Text style={[titleStyle, { fontWeight: "900" }]}>{title}</Text>
			{subTitle && <Text style={[titleStyle]}>{subTitle}</Text>}
		</View>
	);
};

export default InfoBox;

const styles = StyleSheet.create({});
