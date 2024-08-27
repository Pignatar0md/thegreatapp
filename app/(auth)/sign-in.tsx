import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Link } from "expo-router";

import Logo from "@/components/images/Logo";
import TextField from "@/components/inputs/TextInput";
import MainWrapper from "@/components/wrappers/mainWrapper";
import CustomButton from "@/components/buttons/CustomButton";

const signIn = () => {
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const onChange = (text: string, key: "email" | "password") => {
		setLoginData({
			...loginData,
			[key]: text,
		});
	};

	const submit = () => {};

	return (
		<MainWrapper>
			<ScrollView>
				<View
					style={{
						margin: 30,
					}}
				>
					<View style={{ marginVertical: 20 }}>
						<Logo size="medium" />
					</View>
					<View style={{ marginVertical: 20 }}>
						<Text
							style={{
								color: "white",
								fontWeight: "600",
								fontSize: 24,
							}}
						>
							Log in to Aora
						</Text>
					</View>
					<View style={{ marginVertical: 10 }}>
						<TextField
							placeHolder="john.doe@gmail.com"
							size="tiny"
							value={loginData.email}
							label="Email"
							onChangeText={(text: string) => onChange(text, "email")}
						/>
					</View>
					<View style={{ marginVertical: 10 }}>
						<TextField
							size="tiny"
							value={loginData.password}
							label="Password"
							placeHolder="●●●●●●●●"
							onChangeText={(text: string) => onChange(text, "password")}
						/>
					</View>
					<View style={{ marginVertical: 20 }}>
						<CustomButton text={"Sign In"} onPress={submit} isLoading={false} />
					</View>
					<View
						style={{
							marginVertical: 10,
							alignItems: "center",
						}}
					>
						<Text style={{ color: "white" }}>
							Don't have an account yet?
							<Link href="/(auth)/sign-up">
								<Text style={{ color: "orange" }}> Sign up</Text>
							</Link>
						</Text>
					</View>
				</View>
			</ScrollView>
		</MainWrapper>
	);
};

export default signIn;
