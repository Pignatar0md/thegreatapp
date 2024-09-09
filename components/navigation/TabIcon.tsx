import React, { FC } from "react";
import { Text, View, Image, ImageSourcePropType } from "react-native";

const TabIcon: FC<{
	icon: ImageSourcePropType;
	color: string;
	name: string;
	focused: boolean;
}> = ({ icon, color, name, focused }) => (
	<View style={{ alignItems: "center" }}>
		<Image
			style={{ width: 20, height: 20 }}
			source={icon}
			resizeMode="contain"
			tintColor={color}
		/>
		<Text style={{ fontWeight: focused ? "bold" : "500", color }}>{name}</Text>
	</View>
);

export default TabIcon;
