import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import MainWrapper from "@/components/wrappers/mainWrapper";
import Logo from "@/components/images/Logo";
import TextField from "@/components/inputs/TextInput";
import CustomButton from "@/components/buttons/CustomButton";
import { Link } from "expo-router";

const signUp = () => {
	const [loginData, setLoginData] = useState({
		email: "",
		confirmEmail: "",
		password: "",
	});

	const onChange = (
		text: string,
		key: "confirmEmail" | "email" | "password"
	) => {
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
							Sign Up to Aora
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
							placeHolder="john.doe@gmail.com"
							size="tiny"
							value={loginData.confirmEmail}
							label="Confirm Email"
							onChangeText={(text: string) => onChange(text, "confirmEmail")}
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
						<CustomButton
							text={"Register"}
							onPress={submit}
							isLoading={false}
						/>
					</View>
					<View
						style={{
							marginVertical: 10,
							alignItems: "center",
						}}
					>
						<Text style={{ color: "white" }}>
							Have an account already?
							<Link href="/(auth)/sign-in">
								<Text style={{ color: "orange" }}> Sign in</Text>
							</Link>
						</Text>
					</View>
				</View>
			</ScrollView>
		</MainWrapper>
	);
};
export default signUp;
