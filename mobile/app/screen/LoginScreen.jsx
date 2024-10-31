import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Button, Text, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
	GoogleSignin,
	statusCodes,
	GoogleSigninButton,
	isSuccessResponse,
} from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../components/Loading";

const LoginScreen = () => {
	const navigation = useNavigation();

	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [tokenId, setTokenId] = useState("");

	const loading = useRef(null);

	useEffect(() => {
		GoogleSignin.configure({
			iosClientId:
				"686488690067-7nooi5ccq485bfqvcqie1eobtct7eqne.apps.googleusercontent.com",
			webClientId:
				"686488690067-97o9n75n08u48k2eljc68makj2reljk7.apps.googleusercontent.com",
		});
	}, []);

	const handleLogin = async () => {
		Keyboard.dismiss();
		loading.current.show();
		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();
			if (isSuccessResponse(userInfo)) {
				console.log(JSON.stringify(userInfo));
				await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
				navigation.navigate("Home");
			}
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				console.log("User cancelled the login flow");
			} else if (error.code === statusCodes.IN_PROGRESS) {
				console.log("Sign in is in progress already");
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				console.log("Play services not available or outdated");
			} else {
				console.log("Some other error happened: " + error.message);
			}
		} finally {
			loading.current.hide();
		}
	};

	return (
		<View style={styles.container}>
			<Loading ref={loading} />
			<GoogleSigninButton onPress={handleLogin} />
			<Text>{email}</Text>
			<Text>{name}</Text>
			<Text>{tokenId}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#8cbeea",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default LoginScreen;
