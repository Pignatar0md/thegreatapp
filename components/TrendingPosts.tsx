import React, { FC, useCallback, useState } from "react";
import {
	Text,
	FlatList,
	StyleSheet,
	Pressable,
	Image,
	ImageBackground,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { icons } from "@/constants";
import { Post } from "@/types/entities/Post";
import { ResizeMode, Video } from "expo-av";

const zoomIn = {
	0: {
		scale: 0.9,
	},
	1: {
		scale: 1.2,
	},
};

const zoomOut = {
	0: {
		scale: 1.2,
	},
	1: {
		scale: 0.9,
	},
};

const TrendingItem: FC<{ activeItem: string; item: Post }> = ({
	activeItem,
	item,
}) => {
	const [play, setPlay] = useState(false);

	return (
		<Animatable.View
			animation={activeItem === item.$id ? zoomIn : zoomOut}
			duration={500}
		>
			{play ? (
				<Video
					source={{ uri: item.video }}
					style={{ width: 300, height: 200 }}
					resizeMode={ResizeMode.CONTAIN}
					useNativeControls
					shouldPlay
					onPlaybackStatusUpdate={(status) => {
						if (status.didJustFinish) {
							setPlay(false);
						}
					}}
				/>
			) : (
				<Pressable
					style={{ margin: 10, justifyContent: "center", alignItems: "center" }}
					onPress={() => setPlay(true)}
				>
					<ImageBackground
						resizeMode="cover"
						source={{ uri: item.thumbnail }}
						style={{ width: 70, height: 40 }}
					/>
					<Image
						source={icons.play}
						style={{
							width: 16,
							height: 16,
							position: "absolute",
						}}
						resizeMode="contain"
					/>
				</Pressable>
			)}
		</Animatable.View>
	);
};

const TrendingPosts: FC<{ posts: Post[] }> = ({ posts }) => {
	const [activeItem, setActiveItem] = useState(posts[1]);

	const viewableItemsChanges = useCallback(({ viewableItems }) => {
		if (viewableItems.length > 0) {
			setActiveItem(viewableItems[0].key);
		}
	}, []);

	return (
		<FlatList
			data={posts}
			horizontal
			onViewableItemsChanged={viewableItemsChanges}
			viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
			contentOffset={{ x: 170 }}
			keyExtractor={(item) => item.title}
			renderItem={({ item }) => (
				<TrendingItem activeItem={activeItem} item={item} />
			)}
		/>
	);
};

export default TrendingPosts;

const styles = StyleSheet.create({});
