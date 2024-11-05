import React, { useEffect, useRef, useState } from "react";
import {
	View,
	StyleSheet,
	Button,
	Text,
	Keyboard,
	Image,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
	GoogleSignin,
	statusCodes,
	isSuccessResponse,
} from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../components/Loading";
import LinearGradient from "react-native-linear-gradient";
import { IOS_CLIENT_ID, WEB_CLIENT_ID } from "@env";

const LoginScreen = () => {
	const navigation = useNavigation();
	const loading = useRef(null);

	useEffect(() => {
		GoogleSignin.configure({
			iosClientId: IOS_CLIENT_ID,
			webClientId: WEB_CLIENT_ID,
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
				navigation.navigate("Register");
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
			<View style={styles.logoContainer}>
				<Image
					source={require("../../assets/images/login_icon.png")}
					style={styles.image}
				/>
				<Text style={styles.title}>EaseNews</Text>
			</View>
			<View style={styles.middleCiontainer}>
				<Text style={styles.subTitle}>Chào mừng bạn trở lại</Text>
				<Text style={styles.subTitle}>Hãy bắt đầu trải nghiệm</Text>
				<TouchableOpacity onPress={handleLogin}>
					<LinearGradient
						colors={["#FF8086", "#FF3A44"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={styles.loginButton}
					>
						<Image
							source={require("../../assets/images/google_icon.png")}
							style={styles.googleIcon}
						/>
						<Text style={styles.loginButtonText}>Đăng nhập với Google</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
			<View style={styles.footerContainer}>
				<Text style={styles.finalText}>Bạn hãy đọc kĩ điều khoản? Nhấn </Text>
				<Text style={styles.linkFinalText}>Điều Khoản</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#ffffff",
		justifyContent: "center",
		alignItems: "center",
	},
	logoContainer: {
		flexDirection: "column",
		height: Dimensions.get("window").height * 0.4,
		justifyContent: "center",
	},
	middleCiontainer: {
		flexDirection: "column",
		height: Dimensions.get("window").height * 0.4,
		justifyContent: "flex-start",
	},
	footerContainer: {
		flexDirection: "row",
		height: Dimensions.get("window").height * 0.2,
		justifyContent: "flex-start",
	},
	image: {
		width: Dimensions.get("window").width * 0.55,
		height: Dimensions.get("window").height * 0.2,
	},
	title: {
		fontFamily: "Newsreader",
		fontSize: 38,
		fontWeight: "800",
		lineHeight: 38,
		letterSpacing: -0.3,
		textAlign: "center",
		color: "#301934",
	},
	subTitle: {
		fontFamily: "Newsreader",
		fontSize: 29,
		fontWeight: "700",
		lineHeight: 29,
		letterSpacing: -0.3,
		textAlign: "center",
		color: "#301934",
	},
	loginButton: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		borderRadius: 10,
		marginTop: 50,
	},
	googleIcon: {
		width: 20,
		height: 20,
		marginRight: 10,
	},
	loginButtonText: {
		fontFamily: "Nunito",
		fontSize: 25,
		fontWeight: "700",
		lineHeight: 34.1,
		letterSpacing: -0.3,
		textAlign: "center",
		color: "#fff",
	},
	finalText: {
		fontFamily: "Nunito",
		fontSize: 15,
		fontWeight: "400",
		color: "#000000",
	},
	linkFinalText: {
		fontFamily: "Nunito",
		fontSize: 15,
		fontWeight: "400",
		color: "blue",
		textDecorationLine: "underline",
	},
});

export default LoginScreen;
