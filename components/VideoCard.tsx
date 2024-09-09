import React, { FC, useState } from "react";
import { Image, View, Text, Pressable } from "react-native";
import { icons } from "@/constants";
import { Post } from "@/types/entities/Post";
import { ResizeMode, Video } from "expo-av";

const VideoCard: FC<{ item: Post }> = ({ item }) => {
	const { creator, prompt, thumbnail, title, video } = item;
	const [play, setPlay] = useState(false);

	const playVideo = () => {
		setPlay(true);
	};

	return (
		<View>
			<View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<View style={{ marginRight: 10 }}>
							<Image
								resizeMode="cover"
								source={{ uri: creator.avatar }}
								style={{ width: 40, height: 40, borderRadius: 8 }}
							/>
						</View>
						<View>
							<Text style={{ color: "white" }}>{title}</Text>
							{/* <Text style={{ color: "white" }}>{video}</Text> */}
							<Text style={{ color: "white" }}>{creator.username}</Text>
						</View>
					</View>
					<View>
						<Image
							source={icons.menu}
							resizeMode="contain"
							style={{ width: 10, height: 20 }}
						/>
					</View>
				</View>
			</View>
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
					style={{
						marginVertical: 20,
						justifyContent: "center",
						alignItems: "center",
					}}
					onPress={() => playVideo()}
				>
					<Image
						source={{ uri: thumbnail }}
						resizeMode="cover"
						style={{ borderRadius: 10, width: 200, height: 120 }}
					/>
					<Image
						source={icons.play}
						style={{
							width: 30,
							height: 30,
							position: "absolute",
						}}
						resizeMode="contain"
					/>
				</Pressable>
			)}
		</View>
	);
};

export default VideoCard;
