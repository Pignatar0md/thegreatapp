import { Text, View, Image, ImageSourcePropType } from "react-native";
import React, { FC } from "react";
import { Tabs } from "expo-router";

import { icons } from "../../constants";

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

const TabsLayout = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					headerShown: false,
					tabBarActiveTintColor: "#FFA001",
					tabBarInactiveTintColor: "#CDCDE0",
					tabBarStyle: {
						backgroundColor: "#161622",
						borderTopWidth: 1,
						borderTopColor: "#232533",
						height: 84,
					},
				}}
			>
				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								color={color}
								focused={focused}
								name="Home"
								icon={icons.home}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="bookmark"
					options={{
						title: "Bookmark",
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								color={color}
								focused={focused}
								name="Bookmark"
								icon={icons.bookmark}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="create"
					options={{
						title: "Create",
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								color={color}
								focused={focused}
								name="Create"
								icon={icons.plus}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: "Profile",
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								color={color}
								focused={focused}
								name="Profile"
								icon={icons.profile}
							/>
						),
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;
