import React from "react";
import { Image } from "react-native";
import { images } from "@/constants";

const Logo = ({ size }: { size: "big" | "small" | "medium" }) => {
	const medium = { width: 135, height: 37 };
	const small = { width: 90, height: 25 };
	const big = { width: 180, height: 50 };
	const sizes = {
		medium,
		big,
		small,
	};
	return (
		<Image source={images.logo} resizeMode="contain" style={sizes[size]} />
	);
};

export default Logo;
