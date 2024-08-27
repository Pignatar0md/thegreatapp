import { Image, Text, View, ScrollView } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import CustomButton from "@/components/buttons/CustomButton";
import MainWrapper from "@/components/wrappers/mainWrapper";
import Logo from "@/components/images/Logo";

import { images } from "@/constants";

export default function Index() {
	return (
		<MainWrapper>
			<StatusBar style="light" />
			<ScrollView centerContent={true}>
				<View style={{ alignItems: "center" }}>
					<Logo size="big" />
					<Image
						source={images.cards}
						resizeMode="contain"
						style={{ width: 360, height: 300 }}
					/>
					<View
						style={{
							padding: 20,
						}}
					>
						<Text
							style={{
								textAlign: "center",
								color: "white",
								fontWeight: "600",
								fontSize: 24,
							}}
						>
							Discover endless possibilities with{" "}
							<Text style={{ color: "orange" }}>Aora</Text>
						</Text>
					</View>
					<View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
						<Text
							style={{
								textAlign: "center",
								color: "white",
								fontWeight: "400",
								fontSize: 14,
							}}
						>
							Where creativity meets innovation: embark on a journey of
							limitless exploration with Aora
						</Text>
					</View>
					<View style={{ width: "100%", padding: 20 }}>
						<CustomButton
							isLoading={false}
							text="Continue with Email"
							onPress={() => router.push("/sign-in")}
						/>
					</View>
				</View>
			</ScrollView>
		</MainWrapper>
	);
}
